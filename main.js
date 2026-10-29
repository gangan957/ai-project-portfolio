// Content and original image links also work without JavaScript.
const dialog = document.querySelector('#image-dialog');
if (dialog && typeof dialog.showModal === 'function') {
  document.querySelectorAll('[data-preview]').forEach(preview => {
    preview.addEventListener('click', event => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      const image = dialog.querySelector('img');
      image.src = preview.href; image.alt = preview.querySelector('img').alt;
      image.removeAttribute('width'); image.removeAttribute('height');
      document.querySelector('#preview-caption').textContent = image.alt;
      dialog.showModal();
    });
  });
  dialog.addEventListener('click', event => {
    if (event.target === dialog) {
      const r = dialog.getBoundingClientRect();
      if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) dialog.close();
    }
  });
}
