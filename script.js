document.addEventListener("DOMContentLoaded", function () {
    // Loading screen
    const loadingScreen = document.getElementById('loading');
    
    function hideLoadingScreen() {
        loadingScreen.style.opacity = '0';
        setTimeout(function() {
            loadingScreen.style.display = 'none';
        }, 500);
    }

    // Check if the page has already loaded
    if (document.readyState === 'complete') {
        hideLoadingScreen();
    } else {
        window.addEventListener('load', hideLoadingScreen);
    }

    // Figures and Lightbox
    const figures = document.querySelectorAll('.figure img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const closeLightbox = document.querySelector('.close-lightbox');

    if (figures && lightbox && lightboxImage && closeLightbox) {
        figures.forEach(figure => {
            figure.addEventListener('click', function () {
                const fullImageSrc = this.getAttribute('data-full');
                lightboxImage.src = fullImageSrc;
                lightbox.style.display = 'block';
            });
        });

        closeLightbox.addEventListener('click', () => {
            lightbox.style.display = 'none';
        });
    }

    // Slideshow
    let slideIndex = 1;
    showSlides(slideIndex);

    window.plusSlides = function(n) {
        showSlides(slideIndex += n);
    }

    function showSlides(n) {
        let slides = document.getElementsByClassName("mySlides");
        if (slides.length > 0) {
            if (n > slides.length) {slideIndex = 1}    
            if (n < 1) {slideIndex = slides.length}
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";  
            }
            slides[slideIndex-1].style.display = "block";  
        }
    }

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Back to top button
    const backToTopButton = document.getElementById("back-to-top");
    if (backToTopButton) {
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
    }

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && lightbox && lightbox.style.display === 'block') {
            lightbox.style.display = 'none';
        }
    });

    // Initialize lord-icon elements
    document.querySelectorAll('lord-icon').forEach(icon => {
        icon.setAttribute('colors', 'primary:var(--lord-icon-primary),secondary:var(--lord-icon-secondary)');
        icon.setAttribute('trigger', 'hover');
    });
});
