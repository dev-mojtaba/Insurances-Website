/**variables */
const health = document.querySelector('.js-health--insurance');
var overlay = document.querySelector('.modal-overlay');
const openHealthModal = document.querySelector('.js-health');
const healthEsc = document.querySelector('.js-health--escape');

/**events */
health.addEventListener('click', healthInsurance);
document.addEventListener('keydown', closeModalByKeydown);
healthEsc.addEventListener('click', closeModalByClick);

/**functions */
function healthInsurance() {
    if (!openHealthModal.classList.contains('active')) {
        overlay.classList.add('active');
        openHealthModal.classList.add('active');
    }
}

function closeModalByClick() {
    openHealthModal.classList.remove('active');
    overlay.classList.remove('active');
}

function closeModalByKeydown(e) {
    if (e.key === "Escape") {
        if (openHealthModal.classList.contains('active')) {
            openHealthModal.classList.remove('active');
    overlay.classList.remove('active');
        }
    }
}