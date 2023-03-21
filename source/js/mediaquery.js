var mQuery = window.matchMedia('(min-width: 1200px)');
var togleSelector = document.querySelectorAll('.field--two-rows');

if (window.innerWidth > 1200) {
  for (let i = 0; i <= togleSelector.length - 1; i++) {
    togleSelector[i].classList.remove('field--two-rows');
  };
};

function toggleClass(value) {
  if (value.matches) {
    for (let i = 0; i <= togleSelector.length - 1; i++) {
      togleSelector[i].classList.remove('field--two-rows');
    };
  } else {
    for (let i = 0; i <= togleSelector.length - 1; i++) {
      togleSelector[i].classList.add('field--two-rows');
    };
  };
};
mQuery.addListener(toggleClass);
