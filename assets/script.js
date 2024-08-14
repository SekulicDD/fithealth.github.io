document.addEventListener('DOMContentLoaded', () => {
    // Get all navigation links
    const navLinks = document.querySelectorAll('nav a');

    // Add click event listener to each link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Uncheck the checkbox to close the menu
            const menuToggle = document.getElementById('menu-toggle');
            menuToggle.checked = false;
        });
    });
});