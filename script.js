document.addEventListener("DOMContentLoaded", function () {
    const loadingScreen = document.getElementById('loading');
    loadingScreen.style.display = 'none';

    // Navigation toggle
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    // Figures and Modal Handling
    const figures = document.querySelectorAll('.figure img');
    figures.forEach(figure => {
        figure.addEventListener('click', function (event) {
            event.preventDefault();
            const link = this.getAttribute('data-link');
            const fullImageSrc = this.getAttribute('data-full');
            if (link) {
                window.location.href = link;
            } else if (fullImageSrc) {
                let modal = document.getElementById('image-modal');
                if (!modal) {
                    modal = document.createElement('div');
                    modal.id = 'image-modal';
                    modal.innerHTML = `
                        <div class="modal-content">
                            <span class="close-modal">&times;</span>
                            <img id="modal-image" src="${fullImageSrc}" alt="Full Image">
                        </div>
                    `;
                    document.body.appendChild(modal);
                    document.querySelector('.close-modal').addEventListener('click', () => {
                        modal.style.display = 'none';
                    });
                }
                document.getElementById('modal-image').src = fullImageSrc;
                modal.style.display = 'block';
            }
        });
    });

    // Image Gallery Initialization with Lightbox
    const imageGallery = document.getElementById('image-gallery');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const closeLightbox = document.querySelector('.close-lightbox');
    const imagePaths = ["interview1.jpg", "interview2.jpg", "interview3.jpg"]; // Replace with actual paths

    imagePaths.forEach(path => {
        const img = document.createElement('img');
        img.src = path;
        img.alt = 'Interview Photo';
        img.loading = 'lazy';
        img.addEventListener('click', () => {
            lightboxImage.src = path;
            lightbox.style.display = 'block';
        });
        img.addEventListener('error', () => {
            console.error(`Failed to load image: ${path}`);
            img.src = 'placeholder.jpg'; // Replace with a placeholder image
            img.alt = 'Image not available';
        });
        imageGallery.appendChild(img);
    });

    closeLightbox.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Fade-in animation for sections
    const fadeElements = document.querySelectorAll('.fade-in');
    const fadeInObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    fadeElements.forEach(element => {
        fadeInObserver.observe(element);
    });

    // Close navigation menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navMenu.contains(event.target) || navToggle.contains(event.target);
        if (!isClickInsideNav && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
        }
    });

    // Back to top button
    const backToTopButton = document.getElementById("back-to-top");

    window.onscroll = function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    };

    backToTopButton.addEventListener("click", function() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    });

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            if (lightbox.style.display === 'block') {
                lightbox.style.display = 'none';
            }
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
        }
    });
});
