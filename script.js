// script.js

// Loading screen
window.addEventListener('load', function() {
    const loadingScreen = document.getElementById('loading');
    loadingScreen.style.opacity = '0';
    setTimeout(() => {
        loadingScreen.style.display = 'none';
    }, 500);
});

// Key Figures functionality
const figures = document.querySelectorAll('.figure img');

figures.forEach(figure => {
    figure.addEventListener('click', function() {
        const link = this.getAttribute('data-link');
        window.location.href = link;
    });
});

// Figure modal functionality
const body = document.body;
figures.forEach(figure => {
    figure.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default click behavior
        const modal = document.createElement('div');
        modal.classList.add('modal');
        const modalImg = document.createElement('img');
        modalImg.src = this.getAttribute('data-full');
        modalImg.classList.add('modal-content');
        const closeBtn = document.createElement('span');
        closeBtn.innerHTML = '&times;';
        closeBtn.classList.add('close');
        modal.appendChild(modalImg);
        modal.appendChild(closeBtn);
        body.appendChild(modal);
        modal.style.display = 'flex';
        closeBtn.onclick = function() {
            modal.style.display = "none";
            body.removeChild(modal);
        }
        modal.onclick = function(event) {
            if (event.target === modal) {
                modal.style.display = "none";
                body.removeChild(modal);
            }
        }
    });
});

// Image gallery
const imageGallery = document.getElementById('image-gallery');
const imagePaths = [
    'interview1.jpg',
    'interview2.jpg',
    'interview3.jpg',
    // Add more image paths as needed
];
imagePaths.forEach(path => {
    const img = document.createElement('img');
    img.src = path;
    img.alt = 'Interview Photo';
    imageGallery.appendChild(img);
});
