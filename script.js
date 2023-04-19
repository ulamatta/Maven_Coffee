// Initialize EmailJS with your User ID
emailjs.init('bCp-isDmbw1mMpHl5');

// Form submission event listener
document.getElementById('order-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const kegs = document.getElementById('kegs').value;
    const deliveryDate = document.getElementById('delivery-date').value;

    // Send email using EmailJS
    emailjs
        .send('service_qqlbeh5', 'template_e545k99', {
            kegs: kegs,
            delivery_date: deliveryDate,
            to_email: 'umberto@eximiuscoffee.com',
        })
        .then(
            function (response) {
                alert(`Your order of ${kegs} kegs has been scheduled for delivery on ${deliveryDate}.`);
                window.location.href = 'thankyou.html';
            },
            function (error) {
                alert('Failed to send the order. Please try again later.');
            }
        );
});
