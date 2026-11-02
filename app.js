const dialog = document.querySelector('dialog');
const title = document.querySelector('#dialog-title');
document.querySelectorAll('[data-subject]').forEach((button) => {
  button.addEventListener('click', () => {
    title.textContent = button.dataset.subject;
    dialog.showModal();
  });
});
document.querySelector('.close').addEventListener('click', () => dialog.close());
document.querySelector('.back').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => {
  const bounds = dialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right ||
      event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
});
