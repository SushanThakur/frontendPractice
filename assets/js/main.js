const open = document.getElementById('open');
const close = document.getElementById('close');
const nav_mobile = document.getElementsByClassName('nav-mobile-container');

open.addEventListener('click',() => {
  open.classList.add('invisible');
  close.classList.add('visible');
  nav_mobile[0].classList.add('visible');
});

close.addEventListener('click',() => {
  open.classList.remove('invisible');
  close.classList.remove('visible');
  nav_mobile[0].classList.remove('visible');
});



