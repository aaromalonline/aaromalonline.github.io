/**
 * Extreme Minimalist Centralized Navigation
 * Centralizes the sticky right-side navigation to keep code DRY.
 */

document.addEventListener("DOMContentLoaded", () => {
    const navPlaceholder = document.getElementById("sticky-nav-placeholder");
    if (!navPlaceholder) return;

    // Detect path depth to handle relative links (e.g., from /writings/)
    // We check if the current path contains "writings/"
    const path = window.location.pathname;
    const isSubdir = path.includes("/writings/") || path.includes("/about/") || path.includes("/gallery/");
    const prefix = isSubdir ? "../" : "";

    const navHTML = `
        <h2>Aaromal A.</h2>
        <ul>
            <li><a href="${prefix}about/">About</a></li>
            <li><a href="${prefix}writings/">Writing</a></li>
            <li><a href="${prefix}people.html">People</a></li>
            <li><a href="${prefix}gallery/">Gallery</a></li>
            <li><a href="${prefix}links.html">Links</a></li>
            <li><a href="https://github.com/aaromalonline">GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/aaromalonline/">LinkedIn</a></li>
        </ul>
    `;

    navPlaceholder.innerHTML = navHTML;

    // Inject Footer
    const footerPlaceholder = document.getElementById("footer-placeholder");
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = `&copy; 2026 Aaromal A.`;
    }
});
