const cardButton = document.querySelector('#card-button');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close');
const cancel = document.querySelector('#cancel');

cardButton.addEventListener('click', toggleModal);
close.addEventListener('click', toggleModal);
cancel.addEventListener('click', toggleModal);

function toggleModal() {
    modal.classList.toggle('is-open');
}

new WOW().init();
