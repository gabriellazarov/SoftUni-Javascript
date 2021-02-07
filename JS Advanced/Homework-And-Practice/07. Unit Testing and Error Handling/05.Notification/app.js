function notify(message) {
  let div = document.getElementById('notification');
  div.textContent = message;
  div.style.display = 'block';

  function hide() {
    div.style.display = '';
    div.textContent = message = '';
  }
  div.addEventListener('click', hide);
}