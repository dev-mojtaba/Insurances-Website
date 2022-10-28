/**variables */
const finance = document.querySelector('.js-finance--insurance');
var overlay = document.querySelector('.modal-overlay');
const openFinanceModal = document.querySelector('.js-finance');
const financeEsc = document.querySelector('.js-finance--escape');

/**events */
finance.addEventListener('click', financeInsurance);
document.addEventListener('keydown', closeModalByKeydown);
financeEsc.addEventListener('click', closeModalByClick);

/**functions */
function financeInsurance() {
    if (!openFinanceModal.classList.contains('active')) {
        overlay.classList.add('active');
        openFinanceModal.classList.add('active');
    }
}

function closeModalByClick() {
    openFinanceModal.classList.remove('active');
    overlay.classList.remove('active');
}

function closeModalByKeydown(e) {
    if (e.key === "Escape") {
        if (openFinanceModal.classList.contains('active')) {
            openFinanceModal.classList.remove('active');
            overlay.classList.remove('active');
        }
    }
}