const viewMore = document.querySelector('span.view_more');

viewMore.addEventListener('click', () => {
  const view = document.querySelector('.view');
  view.classList.toggle('none');
});
