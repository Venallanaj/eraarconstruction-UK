// ... (existing loadComponent, highlightActiveNav, initializeMobileMenu, loadPageHero, loadAboutDetailSection functions) ...

// --- NEW: Function to Load and Populate CTA Section Component ---
// This function takes a placeholder ID and the dynamic content for the CTA.
async function loadCtaSection(placeholderId, heading, paragraph, buttonText, buttonLink) {
    const placeholder = document.getElementById(placeholderId);
    if (!placeholder) {
        console.warn(`CTA placeholder with ID '${placeholderId}' not found. Skipping.`);
        return;
    }

    await loadComponent(placeholderId, '/components/cta-section.html', () => {
        // Once the HTML is loaded into the placeholder, find the elements by their IDs
        const headingElement = placeholder.querySelector('#cta-heading');
        const paragraphElement = placeholder.querySelector('#cta-paragraph');
        const buttonElement = placeholder.querySelector('#cta-button-link');

        // Populate the elements with the provided data
        if (headingElement) headingElement.textContent = heading;
        if (paragraphElement) paragraphElement.textContent = paragraph;
        if (buttonElement) {
            buttonElement.textContent = buttonText;
            buttonElement.href = buttonLink;
        }
    });
}

// ... (existing DOMContentLoaded event listener) ...