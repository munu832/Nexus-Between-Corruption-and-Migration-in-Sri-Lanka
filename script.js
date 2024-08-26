// DOM Content Loaded Event Listener
document.addEventListener("DOMContentLoaded", function () {
    const loadingScreen = document.getElementById('loading');
    loadingScreen.style.display = 'none'; // Hide the loading screen once the DOM is loaded

    // Figures and Modal Handling
    const figures = document.querySelectorAll('.figure img');

    figures.forEach(figure => {
        figure.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default click behavior
            const link = this.getAttribute('data-link');
            const fullImageSrc = this.getAttribute('data-full');

            if (link) {
                window.location.href = link;
            } else if (fullImageSrc) {
                // Create modal only if it does not exist
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
                    // Add event listener for closing modal
                    document.querySelector('.close-modal').addEventListener('click', () => {
                        modal.style.display = 'none';
                    });
                }
                document.getElementById('modal-image').src = fullImageSrc;
                modal.style.display = 'block';
            }
        });
    });

    // Image Gallery Initialization
    const imageGallery = document.getElementById('image-gallery');
    const imagePaths = ["interview1.jpg", "interview2.jpg", "interview3.jpg"]; // Replace with actual paths

    imagePaths.forEach(path => {
        const img = document.createElement('img');
        img.src = path;
        img.alt = 'Interview Photo';
        img.loading = 'lazy'; // Lazy loading for better performance
        imageGallery.appendChild(img);
    });
});
