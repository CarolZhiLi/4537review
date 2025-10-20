function closeHamburgerMenu() {
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const hamburgerNav = document.getElementById('hamburgerNav');
    hamburgerMenu.classList.remove('active');
    hamburgerNav.classList.remove('show');
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    // Get hamburger menu elements
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const hamburgerNav = document.getElementById('hamburgerNav');

    // Toggle hamburger menu
    if (hamburgerMenu && hamburgerNav) {
        hamburgerMenu.addEventListener('click', function () {
            hamburgerMenu.classList.toggle('active');
            hamburgerNav.classList.toggle('show');
        });
        
        // Close hamburger menu when clicking outside
        document.addEventListener('click', function (event) {
            if (!hamburgerMenu.contains(event.target) && !hamburgerNav.contains(event.target)) {
                hamburgerMenu.classList.remove('active');
                hamburgerNav.classList.remove('show');
            }
        });
    }

    // Handle touch events for mobile
    if (hamburgerMenu && hamburgerNav) {
        hamburgerMenu.addEventListener('touchstart', function (e) {
            e.preventDefault();
            hamburgerMenu.classList.toggle('active');
            hamburgerNav.classList.toggle('show');
        });
    }
});
