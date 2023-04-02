import gulp from 'gulp';
import plumber from 'gulp-plumber';
import sass from 'gulp-dart-sass';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import browser from 'browser-sync';
import htmlmin from 'gulp-htmlmin';
import cssmin from 'postcss-csso';
import rename from 'gulp-rename';
import terser from 'gulp-terser';
import squoosh from 'gulp-libsquoosh';
import webp from 'gulp-webp';

//  import strip from 'gulp-strip-comments';
// import svgstore from 'gulp-svgstore';
// import * as del from 'del';
// import { deleteSync } from 'del';

import { deleteAsync } from 'del';

// Styles to ./build

export const stylesBuild = () => {
  return gulp.src('source/sass/style.scss', { sourcemaps: true })
    .pipe(plumber())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([
      autoprefixer(),
      cssmin()
    ]))
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('build/css', { sourcemaps: '.' }));
  // .pipe(browser.stream());
};


// Styles to ./source for develop

export const stylesSource = () => {
  return gulp
    .src('source/sass/style.scss', { sourcemaps: true })
    .pipe(plumber())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('source/css', { sourcemaps: '.' }));
}

// Minify *.html

export const minhtml = () => {
  return gulp.src('source/*.html')
    .pipe(htmlmin({ collapseWhitespace: true, removeComments: true }))
    .pipe(gulp.dest('build'));
};

// Minify sprite.svg

export const minsprite = () => {
  return gulp.src('source/img/**/sprite.svg')
    .pipe(htmlmin({ collapseWhitespace: true, removeComments: true }))
    .pipe(gulp.dest('build/img'));
};

// Minify scripts

export const minjs = () => {
  return gulp.src('source/js/!(*.min).js') // выбираем все не минифицированные файлы для минификации

    .pipe(terser())

    // Пакетное переименование
    // вызываем метод rename и передаем ему функцию обратного вызова
    .pipe(rename(function (path) {
      // добавляем суффикс "-min" к базовому имени файла
      //? path.basename += '-min';
      // меняем расширение файла на .min.js
      path.extname = '.min.js';
    }
    ))
    .pipe(gulp.dest('build/js'))
    .pipe(gulp.dest('source/js'));
};

// Optimize images

export const optimizeImages = () => {
  return gulp.src('source/img/**/*.{png,jpg,svg}')
    .pipe(squoosh())
    .pipe(gulp.dest('build/img'));
};

// Copy images /build

export const copyImages = () => {
  return gulp.src('source/img/**/*.{png,jpg,svg}')
    .pipe(gulp.dest('build/img'));
};

// Webp

export const createWebp = () => {
  return gulp.src('source/img/**/*.{jpg,png}')
    .pipe(webp({ quality: 90 }))
    .pipe(gulp.dest('build/img'));
};

// Make sprite file

// export const makeSprite = () => {
//   return gulp.src('source/img/icons/*.svg')
//     .pipe(svgstore({
//       inlineSvg: true
//     }))
//     .pipe(rename('allsprite.svg'))
//     .pipe(gulp.dest('build/img'));
// }


// Copy files to /build

export const copy = (done) => {
  gulp.src([
    "source/fonts/*.{woff2, woff}",
    "source/*.ico",
    "source/img/**/*.svg"
    //  "!source/img/icons/*.svg"
  ], { base: "source" })
    .pipe(gulp.dest('build'));
  done();
};

// Clean build

export const clean = () => {
  return deleteAsync(['build']);
};

// Server

const server = (done) => {
  browser.init({
    server: {
      baseDir: 'build'
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
};

// Watcher with reload browser

const watcher = () => {
  gulp.watch('source/sass/**/*.scss', gulp.series(stylesBuild));
  gulp.watch('build/*.html').on('change', browser.reload);
};


// Watcher for styleSource

const watcherSource = () => {
  gulp.watch('source/sass/**/*.scss', gulp.series(stylesSource));
};

// Develop styles watcher

export const dev = gulp.series(
  stylesSource,
  minjs,
  watcherSource);

// Builder project

export const build = gulp.series(
  clean,
  copy,
  minsprite,  //Костылик - минифицирую спрайт, в данном проекте. Чтобы уже не собирать собранный руками
  optimizeImages,
  gulp.parallel(
    stylesBuild,
    minhtml,
    minjs,
    createWebp
    // makeSpite,
  ),
  gulp.series(
    server,
    watcher
  )
);

// Default

export default gulp.series(
  clean,
  copy,
  copyImages,
  gulp.parallel(
    stylesBuild,
    minhtml,
    minjs,
    createWebp
  ),
  gulp.series(
    server,
    watcher
  ));
