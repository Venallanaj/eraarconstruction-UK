// --- Client-side component loading function ---
async function loadComponent(elementId, filePath, callback = null) {
  
    try {
        const response = await fetch(filePath);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status} for ${filePath}`);
        }
        const html = await response.text();
        document.getElementById(elementId).innerHTML = html;
        if (callback) {
            callback(); // Execute callback after content is loaded
        }
    } catch (error) {
        console.error('Error loading component:', error);
    }
}

// --- JavaScript for Active Navigation Link Highlighting ---
function highlightActiveNav() {
 
    const navLinks = document.querySelectorAll('#primary-menu a');
    const currentPath = window.location.pathname; // Get the path from the URL

    navLinks.forEach(link => {
        // Remove existing active classes
        link.classList.remove('current-page');

        // Get the href of the link, relative to the root
        const linkPath = new URL(link.href).pathname;

        // Check if the current URL path matches the link's path
        // Special handling for index.html (root path '/')
        if (currentPath === linkPath || (currentPath === '/' && linkPath.endsWith('/index.html'))) {
            link.classList.add('current-page');
        }
    });
}

// --- Initialize Mobile Menu Toggle ---
function initializeMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            menuToggle.setAttribute('aria-expanded', navMenu.classList.contains('active'));
        });
    }
}

// --- Event Listener for DOMContentLoaded to load components and initialize features ---
document.addEventListener('DOMContentLoaded', () => {
    // Load Header
    loadComponent('header-placeholder', '/layout/header.html', () => {
        // Initialize mobile menu AFTER header is loaded and appended to DOM
        initializeMobileMenu();
        // Highlight active nav link AFTER header is loaded
        highlightActiveNav();
    });

    // Load Footer
    loadComponent('footer-placeholder', '/layout/footer.html');

    // Any other global JavaScript logic for your pages can go here,
    // or be called as functions after components are loaded if they
    // interact with elements inside the loaded components.
});