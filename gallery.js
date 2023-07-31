const galleryImages = document.querySelectorAll('.gallery img');
const lightbox = document.querySelector('.lightbox');
const lightboxContent = document.querySelector('.lightbox-content');
const closeBtn = document.querySelector('.close');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentImageIndex = 0;

function showLightbox(index) {
  lightbox.style.display = 'flex';
  lightboxContent.src = galleryImages[index].src;
  currentImageIndex = index;
}

function hideLightbox() {
  lightbox.style.display = 'none';
}

function showNextImage() {
  currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
  lightboxContent.src = galleryImages[currentImageIndex].src;
}

function showPrevImage() {
  currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
  lightboxContent.src = galleryImages[currentImageIndex].src;
}

galleryImages.forEach((img, index) => {
  img.addEventListener('click', () => {
    showLightbox(index);
  });
});

closeBtn.addEventListener('click', () => {
  hideLightbox();
});

nextBtn.addEventListener('click', () => {
  showNextImage();
});

prevBtn.addEventListener('click', () => {
  showPrevImage();
});

