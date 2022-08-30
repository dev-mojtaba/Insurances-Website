/**variables */
const house = document.querySelector('.js-house--insurance');
var overlay = document.querySelector('.modal-overlay');
const openHouseModal = document.querySelector('.js-house');
const houseEsc = document.querySelector('.js-house--escape');

/**events */
house.addEventListener('click', houseInsurance);
document.addEventListener('keydown', closeModalByKeydown);
houseEsc.addEventListener('click', closeModalByClick);

/**functions */
function houseInsurance() {
    if (!openHouseModal.classList.contains('active')) {
        overlay.classList.add('active');
        openHouseModal.classList.add('active');
    }
}

function closeModalByClick() {
    openHouseModal.classList.remove('active');
    overlay.classList.remove('active');
}

function closeModalByKeydown(e) {
    if (e.key === "Escape") {
        if (openHouseModal.classList.contains('active')) {
            openHouseModal.classList.remove('active');
            overlay.classList.remove('active');
        }
    }
}