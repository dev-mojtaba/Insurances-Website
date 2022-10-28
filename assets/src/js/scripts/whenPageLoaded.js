/**variables */
const bestWay = document.querySelector('.js-white--banner');

/**events */
document.addEventListener('DOMContentLoaded', StyleAllSelectedElementsWhenLoaded);

/**functions */
function StyleAllSelectedElementsWhenLoaded() {
    if (bestWay.classList.contains('style-perm')) {
        bestWay.classList.remove('style-perm');
    } else {
        setTimeout(() => {
            bestWay.classList.add('style-perm');
        }, 1000);
    }
    
}