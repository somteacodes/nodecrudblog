const moreButton = document.querySelectorAll('.more');

for (let i = 0; i < moreButton.length; i++) {
  moreButton[i].addEventListener('click', () => {
    moreButton[i].children[1].classList.toggle('d-none');
  });
}
