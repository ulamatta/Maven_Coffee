// Initialize EmailJS with your User ID
emailjs.init('bCp-isDmbw1mMpHl5');

document.getElementById('order-form').addEventListener('submit', function (event) {
  event.preventDefault();

  const companyName = document.getElementById('company-name').value;
  const kegs = document.getElementById('kegs').value;
  const deliveryDate = document.getElementById('delivery-date').value;

  emailjs.send('service_qqlbeh5', 'template_e545k99', {
    company: companyName,
    kegs: kegs,
    delivery_date: deliveryDate,
    to_email: 'umberto@eximiuscoffee.com',
  })
    .then(
      function (response) {
        window.location.href = `thankyou.html?company=${encodeURIComponent(companyName)}&kegs=${encodeURIComponent(kegs)}&delivery_date=${encodeURIComponent(deliveryDate)}`;
      },
      function (error) {
        alert('Failed to send the order. Please try again later.');
      }
    );
});
