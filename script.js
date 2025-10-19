function showQuiz(quizId) {
    // Hide all quiz sections
    const allQuizzes = document.querySelectorAll('.quiz-section');
    allQuizzes.forEach(quiz => {
        quiz.classList.remove('active');
    });

    // Show selected quiz
    const selectedQuiz = document.getElementById(quizId);
    if (selectedQuiz) {
        selectedQuiz.classList.add('active');
    }

    // Close dropdown
    const dropdown = document.getElementById('dropdownContent');
    dropdown.classList.remove('show');

    // Update dropdown button text
    const button = document.querySelector('.dropdown-button');
    const quizTitle = selectedQuiz.querySelector('.quiz-title').textContent;
    button.textContent = quizTitle;
}

function closeHamburgerMenu() {
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const hamburgerNav = document.getElementById('hamburgerNav');
    hamburgerMenu.classList.remove('active');
    hamburgerNav.classList.remove('show');
}

        // Initialize when DOM is loaded
        document.addEventListener('DOMContentLoaded', function() {
            // Get dropdown elements
            const dropdownButton = document.getElementById('dropdownButton');
            const dropdownContent = document.getElementById('dropdownContent');
            
            // Get hamburger menu elements
            const hamburgerMenu = document.getElementById('hamburgerMenu');
            const hamburgerNav = document.getElementById('hamburgerNav');
            
            // Toggle hamburger menu
            hamburgerMenu.addEventListener('click', function() {
                hamburgerMenu.classList.toggle('active');
                hamburgerNav.classList.toggle('show');
            });
            
            // Close hamburger menu when clicking outside
            document.addEventListener('click', function(event) {
                if (!hamburgerMenu.contains(event.target) && !hamburgerNav.contains(event.target)) {
                    hamburgerMenu.classList.remove('active');
                    hamburgerNav.classList.remove('show');
                }
            });
    
    // Toggle dropdown when button is clicked
    dropdownButton.addEventListener('click', function(event) {
        event.stopPropagation();
        dropdownContent.classList.toggle('show');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function(event) {
        if (!dropdownButton.contains(event.target) && !dropdownContent.contains(event.target)) {
            dropdownContent.classList.remove('show');
        }
    });

    // Handle touch events for mobile
    document.addEventListener('touchstart', function(event) {
        // Prevent zoom on double tap
        if (event.touches.length > 1) {
            event.preventDefault();
        }
    }, { passive: false });

    // Improve touch scrolling
    document.addEventListener('touchmove', function(event) {
        // Allow scrolling but prevent zoom
        if (event.touches.length > 1) {
            event.preventDefault();
        }
    }, { passive: false });

    // Show first quiz by default
    showQuiz('quiz6');
});



