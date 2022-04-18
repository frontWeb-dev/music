const spalsh = document.querySelector('#spalsh');
const menu = document.querySelector('.menu');
const sidebar = document.querySelector('#side_menu');
const modal = document.querySelector('.modal');
const nav = document.querySelector('#bottom_nav');

menu.addEventListener('click', () => {
  sidebar.classList.add('active');
  modal.classList.remove('none');
});

modal.addEventListener('click', () => {
  sidebar.classList.remove('active');
  modal.classList.add('none');
});
