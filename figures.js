document.addEventListener('DOMContentLoaded', function() {
    // Function to adjust iframe height
    function adjustIframeHeight() {
        const iframe = document.querySelector('iframe');
        const windowHeight = window.innerHeight;
        const minHeight = 400; // Minimum height for mobile devices
        const maxHeight = 800; // Maximum height for larger screens

        // Set iframe height based on window size
        iframe.style.height = Math.max(minHeight, Math.min(windowHeight * 0.7, maxHeight)) + 'px';
    }

    // Adjust iframe height on load and resize
    window.addEventListener('load', adjustIframeHeight);
    window.addEventListener('resize', adjustIframeHeight);

    // Smooth scroll for the back button
    document.querySelector('.back-link a').addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').split('#')[1];
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        } else {
            window.location.href = this.getAttribute('href');
        }
    });

    // Initialize lord-icon elements
    document.querySelectorAll('lord-icon').forEach(icon => {
        icon.setAttribute('colors', 'primary:var(--lord-icon-primary),secondary:var(--lord-icon-secondary)');
        icon.setAttribute('trigger', 'hover');
    });
});
