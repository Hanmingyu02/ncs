const dialog = document.querySelector('dialog');
const title = document.querySelector('#dialog-title');
document.querySelectorAll('[data-subject]').forEach((button) => {
  button.addEventListener('click', () => {
    title.textContent = button.dataset.subject;
    const hasContent = button.dataset.subject === '의사소통';
    document.querySelector('.study-content').hidden = !hasContent;
    document.querySelector('.empty-state').hidden = hasContent;
    document.querySelector('#dialog-description').textContent = hasContent
      ? '공문서 작성 시 기억할 내용' : '등록된 내용 0개';
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
