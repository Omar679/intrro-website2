// Simple JavaScript for interactivity
document.addEventListener('DOMContentLoaded', function() {
    // Add a simple greeting in the console
    console.log('DevOps website loaded successfully!');

    // Add hover effect to headers
    const headers = document.querySelectorAll('h2');
    headers.forEach(header => {
        header.addEventListener('mouseenter', function() {
            this.style.color = '#3498db';
            this.style.transition = 'color 0.3s ease';
        });

        header.addEventListener('mouseleave', function() {
            this.style.color = '#2c3e50';
        });
    });

    // Add current year to footer
    const footer = document.querySelector('footer p');
    const currentYear = new Date().getFullYear();
    footer.textContent = `© ${currentYear} DevOps Practice Website`;
});