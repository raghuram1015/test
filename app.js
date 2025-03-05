document.addEventListener('DOMContentLoaded', function() {
    // Handle navigation bar interactions
    const navbarLinks = document.querySelectorAll('.navbar a');
    navbarLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            alert(`Navigating to ${this.textContent}`);
        });
    });

    // Handle form submissions with realistic feedback
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Form submitted successfully!');
        });
    });

    // Handle profile options interactions
    const profileOptions = document.querySelectorAll('.profile-options a');
    profileOptions.forEach(option => {
        option.addEventListener('click', function(event) {
            event.preventDefault();
            alert(`Opening ${this.textContent} settings`);
        });
    });

    // Handle button interactions
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            alert(`Button ${this.textContent} clicked`);
        });
    });

    // Handle link interactions
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            alert(`Link to ${this.href} clicked`);
        });
    });

    // Handle profile page interactions
    if (document.body.classList.contains('profile-page')) {
        const username = localStorage.getItem('username');
        if (username) {
            document.getElementById('profile-username').innerText = username;
        }
    }

    // Handle login page interactions
    if (document.body.classList.contains('login-page')) {
        const email = localStorage.getItem('email');
        const password = localStorage.getItem('password');
        const username = localStorage.getItem('username');
        if (username) {
            window.open('profile.html', '_blank');
        } else if (email && password) {
            document.getElementById('email').value = email;
            document.getElementById('password').value = password;
            alert('Please log in with your new credentials.');
        }
    }

    // Handle contact form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            const date = new Date().toLocaleString();

            const messages = JSON.parse(localStorage.getItem('messages')) || [];
            messages.push({ name, email, message, date });
            localStorage.setItem('messages', JSON.stringify(messages));

            alert('Thank you for contacting us!');
        });
    }
});
