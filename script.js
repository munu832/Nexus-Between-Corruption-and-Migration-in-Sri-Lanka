// script.js

// Loading screen
window.addEventListener('load', function() {
    const loadingScreen = document.getElementById('loading');
    loadingScreen.style.opacity = '0';
    setTimeout(() => {
        loadingScreen.style.display = 'none';
    }, 500);
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
