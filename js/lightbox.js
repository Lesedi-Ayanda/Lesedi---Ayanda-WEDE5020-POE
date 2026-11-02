const viewer = document.querySelector('#lightbox');
const pictures = [...document.querySelectorAll('.gallery-item')];
let currentPicture = 0;
function showPicture(index) {
    currentPicture = (index + pictures.length) % pictures.length;
    const item = pictures[currentPicture];
    const image = viewer.querySelector('.lightbox-image');
    image.src = item.dataset.full;
    image.alt = item.dataset.alt;
    viewer.querySelector('.lightbox-caption').textContent = item.dataset.caption;
    viewer.querySelector('.lightbox-count').textContent = `${currentPicture + 1} / ${pictures.length}`;
}
pictures.forEach((item, index) => item.addEventListener('click', () => {
    showPicture(index);
    viewer.showModal();
}));
viewer.querySelector('.lightbox-close').addEventListener('click', () => viewer.close());
viewer.querySelector('.lightbox-prev').addEventListener('click', () => showPicture(currentPicture - 1));
viewer.querySelector('.lightbox-next').addEventListener('click', () => showPicture(currentPicture + 1));
viewer.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft') showPicture(currentPicture - 1);
    if (event.key === 'ArrowRight') showPicture(currentPicture + 1);
});
