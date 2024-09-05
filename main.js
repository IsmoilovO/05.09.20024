// Elementlarni tanlash
const openDrawer = document.getElementById('openDrawer');
const closeDrawer = document.getElementById('closeDrawer');
const drawer = document.getElementById('drawer');

// Drawerni ochish
openDrawer.addEventListener('click', () => {
    drawer.classList.add('open');
});

// Drawerni yopish
closeDrawer.addEventListener('click', () => {
    drawer.classList.remove('open');
});

// Overlay bo'sh joyga bosganda modalni yopish (ixtiyoriy)
window.addEventListener('click', (event) => {
    if (event.target === drawer) {
        drawer.classList.remove('open');
    }
});