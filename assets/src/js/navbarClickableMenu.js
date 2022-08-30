/**variables */
const mobileMenuBtn = document.querySelector('.js-clickable--menu__button');
const mobileMenu = document.querySelector('.js-clickable--menu');
const mobileMenuItems = document.querySelector('.js-clickable--menu__ul');

/**events */
mobileMenuBtn.addEventListener('click', openingMobileMenu);

/**functions */
function openingMobileMenu() {
    if (mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
        mobileMenuItems.classList.remove('active');
    } else {
        mobileMenu.classList.add('active');
        setTimeout(() => {
            mobileMenuItems.classList.add('active');
        }, 200);
    }
}