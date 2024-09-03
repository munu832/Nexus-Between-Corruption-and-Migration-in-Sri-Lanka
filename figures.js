document.addEventListener('DOMContentLoaded', function() {
    // iframe height
    function adjustIframeHeight() {
        const iframe = document.querySelector('iframe');
        const windowHeight = window.innerHeight;
        const windowWidth = window.innerWidth;
        const minHeight = 400; 
        const maxHeight = 1200; 

        let targetHeight;

        if (windowWidth <= 768) {
            // For mobile devices
            targetHeight = Math.max(minHeight, windowHeight * 0.7);
        } else if (windowWidth <= 1024) {
            // For tablets and small desktops
            targetHeight = Math.max(minHeight, windowHeight * 0.8);
        } else {
            // For larger desktops
            targetHeight = Math.max(minHeight, Math.min(windowHeight * 0.9, maxHeight));
        }

        // Set iframe height
        iframe.style.height = targetHeight + 'px';
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
