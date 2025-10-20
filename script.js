function closeHamburgerMenu() {
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const hamburgerNav = document.getElementById('hamburgerNav');
    hamburgerMenu.classList.remove('active');
    hamburgerNav.classList.remove('show');
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    // Get dropdown elements
    const dropdownButton = document.getElementById('dropdownButton');
    const dropdownContent = document.getElementById('dropdownContent');

    // Get hamburger menu elements
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const hamburgerNav = document.getElementById('hamburgerNav');

    // Toggle dropdown menu
    if (dropdownButton && dropdownContent) {
        dropdownButton.addEventListener('click', function (event) {
            event.stopPropagation();
            dropdownContent.classList.toggle('show');
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', function (event) {
            if (!dropdownButton.contains(event.target) && !dropdownContent.contains(event.target)) {
                dropdownContent.classList.remove('show');
            }
        });
    }

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
