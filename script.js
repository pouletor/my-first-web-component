import './RonSwanson';
import { ronSwansonQuotes } from './api/apiUrls.js';

window.addEventListener('load', () => {
  fetchRequest();
});

async function fetchRequest() {
  const container = document.querySelector('.ronQuote');
  const tag = document.createElement('ron-swanson');

  try {
    const response = await fetch(ronSwansonQuotes);
    const json = await response.json();

    tag.img = {
      src: 'https://i.gifer.com/2u2C.gif',
      alt: 'Ron Swanson',
    };
    tag.content = json;
  } catch (_error) {
    tag.img = {
      src: 'https://giffiles.alphacoders.com/107/10706.gif',
      alt: 'Ron Swanson hates everything',
    };
  }

  container.appendChild(tag);
}
