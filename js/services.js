// --- Step 2a: Store your Services Data in a JSON-like format ---
const servicesData = [
    {
        "icon": "fas fa-paint-roller",
        "title": "Painting & Decorating",
        "description": "Adding the perfect finish to residential and commercial spaces with expert painting and decorative touches.",
        "link": "./quote-forms/painting-decorating-quote.html"
    },
    {
        "icon": "fas fa-hammer",
        "title": "Renovation Services",
        "description": "Transforming existing properties through comprehensive renovations, modernizing and improving functionality.",
        "link": "./quote-forms/renovation-quote.html"
    },
    {
        "icon": "fas fa-th-large",
        "title": "Flooring Services",
        "description": "Providing professional flooring solutions, from installation to repair, for various material types and applications.",
        "link": "./quote-forms/flooring-quote.html"
    },

  
    // You can add more service objects here for your full services page!
];

// --- Step 2b: Function to Render Individual Service Cards ---
// This function takes the ID of the container where cards go ('services-grid-container')
// and an array of service objects to display (either a few for preview, or all)
async function renderServiceCardsIntoGrid(containerId, servicesToRender) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`Error: Services grid container with ID '${containerId}' not found.`);
        return;
    }

    // Get the hidden template for a single service card from within the loaded HTML
    // This assumes services.html has already been loaded into the page.
    const serviceCardTemplate = container.querySelector('.service-template');
    if (!serviceCardTemplate) {
        console.error('Error: Service card template not found within the services grid (check components/services.html).');
        return;
    }

    // Remove the original hidden template from the page, so it doesn't show up empty.
    serviceCardTemplate.remove();

    // Loop through each service in our 'servicesToRender' array
    servicesToRender.forEach(service => {
        // 1. Make a copy (clone) of our hidden template
        const newCard = serviceCardTemplate.cloneNode(true); // 'true' means copy all its children too (i, h3, p, a)

        // 2. Remove the template class and make the copied card visible
        newCard.classList.remove('service-template');
        newCard.style.display = ''; // This makes it visible (removes the `display: none;`)

        // 3. Fill the copied card with actual data from our 'service' object
        // Update the icon class
        newCard.querySelector('.service-icon').className = `${service.icon} service-icon`;
        // Update the title text
        newCard.querySelector('h3').textContent = service.title;
        // Update the description text
        newCard.querySelector('p').textContent = service.description;
        // Update the link (href) and text of the call-to-action button
        const ctaButton = newCard.querySelector('.service-cta');
        ctaButton.href = service.link;
        // ctaButton.textContent = "Request a Free Quote"; // (Already in HTML, but can be set here if dynamic)

        // 4. Add the newly created and filled card to our services grid container
        container.appendChild(newCard);
    });
}

// --- Step 2c: Main Function to Load the Entire Services Component ---
// This function will be called from your index.html and services.html pages.
// 'placeholderId': The ID of the <div> on your page where the services section will be loaded.
// 'isFullPage': A boolean (true/false) to decide if we show ALL services or just a preview.
async function loadServicesComponent(placeholderId, isFullPage = false) {
    const placeholder = document.getElementById(placeholderId);
    if (!placeholder) {
        console.warn(`Warning: Services component placeholder with ID '${placeholderId}' not found on this page. This might be normal if the component isn't used on this specific page.`);
        return; // Exit if the placeholder isn't on the current page.
    }

    // Assuming 'loadComponent' is a globally available function from main.js.
    // It fetches an HTML file and injects it into a placeholder.
    await loadComponent(placeholderId, '/components/services.html', async () => {
        // This 'callback' function runs *after* services.html has been loaded into 'placeholderId'.

        // Now that the main services section structure is in the DOM,
        // decide which services (all or a subset) to pass to the rendering function.
        const servicesToDisplay = isFullPage ? servicesData : servicesData.slice(0, 3); // `slice(0, 3)` gets the first 3 services.

        // Render the individual cards into the grid that's now part of the DOM.
        await renderServiceCardsIntoGrid('services-grid-container', servicesToDisplay);
    });
}