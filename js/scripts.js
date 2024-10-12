// script.js

// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {

    // Email Collector Form Submission
    const emailForm = document.getElementById('email-form');
    if (emailForm) {
        emailForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('email').value;

            fetch('https://script.google.com/macros/s/YOUR_EMAIL_FORM_SCRIPT_ID/exec', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email: email })
            })
            .then(response => index.json())
            .then(data => {
                if (data.status === 'success') {
                    alert('Thank you for subscribing!');
                    emailForm.reset();
                } else {
                    alert('There was an error. Please try again.');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('There was an error. Please try again.');
            });
        });
    }

    // Contact Form Submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const message = document.getElementById('message').value;

            fetch('https://script.google.com/macros/s/YOUR_CONTACT_FORM_SCRIPT_ID/exec', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, phone, message })
            })
            .then(response => index.json())
            .then(data => {
                if (data.status === 'success') {
                    alert('Your message has been sent!');
                    contactForm.reset();
                } else {
                    alert('There was an error. Please try again.');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('There was an error. Please try again.');
            });
        });
    }

});
