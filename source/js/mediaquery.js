var mQuery = window.matchMedia('(min-width: 1200px)');
var togleSelector = document.querySelectorAll('.field--multirow');

if (window.innerWidth > 1200) {
  for (let i = 0; i <= togleSelector.length - 1; i++) {
    togleSelector[i].classList.remove('field--multirow');
  };
};

function toggleClass(value) {
  if (value.matches) {
    for (let i = 0; i <= togleSelector.length - 1; i++) {
      togleSelector[i].classList.remove('field--multirow');
    };
  } else {
    for (let i = 0; i <= togleSelector.length - 1; i++) {
      togleSelector[i].classList.add('field--multirow');
    };
  };
};
mQuery.addListener(toggleClass);
