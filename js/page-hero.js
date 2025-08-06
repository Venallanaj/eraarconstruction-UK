// js/components.js

document.addEventListener('DOMContentLoaded', () => {
    // Call the function to load the hero component when the DOM is fully loaded
    loadHeroComponent();
});

function loadHeroComponent() {
    // Get the placeholder element where the hero will be inserted
    const heroPlaceholder = document.getElementById('pageHeroPlaceholder');

    if (heroPlaceholder) {
        // Retrieve dynamic content from data attributes on the placeholder
        const title = heroPlaceholder.dataset.title || 'Welcome'; // Default title
        const description = heroPlaceholder.dataset.description || 'Discover our services.'; // Default description
        const backgroundImage = heroPlaceholder.dataset.background || '../images/hero-background-default.jpg'; // Default background image

        // Fetch the HTML content of the hero component
        fetch('../components/page-hero.html')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.text();
            })
            .then(html => {
                // Insert the fetched HTML into the placeholder
                heroPlaceholder.innerHTML = html;

                // Get the elements within the newly loaded hero component
                const heroSection = heroPlaceholder.querySelector('.page-hero');
                const heroTitle = heroPlaceholder.querySelector('#heroTitle');
                const heroDescription = heroPlaceholder.querySelector('#heroDescription');

                // Update content and background image
                if (heroSection) {
                    heroSection.style.backgroundImage = `url('${backgroundImage}')`;
                }
                if (heroTitle) {
                    heroTitle.textContent = title;
                }
                if (heroDescription) {
                    heroDescription.textContent = description;
                }
            })
            .catch(error => console.error('Error loading page-hero component:', error));
    }
}