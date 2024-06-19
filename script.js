// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission handling
const form = document.querySelector('#contact form');
form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Validate form fields
    let isValid = true;
    form.querySelectorAll('input, textarea').forEach(field => {
        if (!field.value.trim()) {
            isValid = false;
            // Optionally, add visual indication for invalid fields
            field.style.borderColor = 'red';
        }
    });

    if (isValid) {
        // Simulating form submission for demo purpose
        alert('Form submitted successfully!');
        form.reset(); // Reset form fields
    }
});
