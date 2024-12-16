document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.faq form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = form.querySelector('input[type="email"]').value;
        const message = form.querySelector('textarea[name="message"]').value;

        fetch('http://localhost:3000/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, message })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            alert('Email sent successfully!');
        })
        .catch(error => {
            console.error('Error sending email:', error);
            alert('Failed to send email.');
        });
    });
});
