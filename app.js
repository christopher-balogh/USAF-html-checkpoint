const f = document.getElementById('search');
const q = document.getElementById('query');
const imdb = 'https://www.imdb.com/find?q=';
const site = 'index.html';

function submitted(event) {
  event.preventDefault();
  const url = imdb + q.value;
  const win = window.open(url, '_blank');
  win.focus();
}

f.addEventListener('submit', submitted);