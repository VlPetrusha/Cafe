let isOpend = false;

const burgerButtons = document.getElementsByClassName('burger');
const burger = document.getElementById('burger');
const body = document.getElementById('body');
const html = document.querySelector('html');

burger.style.cssText = 'transition: 0.3s; opacity: 0; display: none;';

for (const burgerBtn of burgerButtons) {
  burgerBtn.addEventListener('click', () => {
    if (isOpend) {
      burger.style.cssText = 'transition: 0.3s; opacity: 0; z-index: -1;';
      body.classList = '';
      html.classList = '';

      isOpend = !isOpend;

      return;
    }

    isOpend = !isOpend;

    body.classList = 'opened';
    html.classList = 'opened';
    burger.style.cssText = 'transition: 0.3s; opacity: 1; z-index: 1;';
  });
}
