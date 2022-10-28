/**variables */
const car = document.querySelector('.js-car--insurance');
var overlay = document.querySelector('.modal-overlay');
const openCarModal = document.querySelector('.js-car');
const carEsc = document.querySelector('.js-car--escape');

/**events */
car.addEventListener('click', carInsurance);
document.addEventListener('keydown', closeModalByKeydown);
carEsc.addEventListener('click', closeModalByClick);

/**functions */
function carInsurance() {
    if (!openCarModal.classList.contains('active')) {
        overlay.classList.add('active');
        openCarModal.classList.add('active');
    }
}

function closeModalByClick() {
    openCarModal.classList.remove('active');
    overlay.classList.remove('active');
}

function closeModalByKeydown(e) {
    if (e.key === "Escape") {
        if (openCarModal.classList.contains('active')) {
            openCarModal.classList.remove('active');
            overlay.classList.remove('active');
        }
    }
}