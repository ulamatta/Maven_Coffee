document.addEventListener('DOMContentLoaded', function () {
  const orderSummary = document.getElementById('order-summary');
  const companyName = localStorage.getItem('companyName');
  const kegs = localStorage.getItem('kegs');
  const deliveryDate = localStorage.getItem('deliveryDate');

  if (companyName && kegs && deliveryDate) {
    orderSummary.innerHTML = `
      <h3>Order Summary</h3>
      <p>Company Name: ${companyName}</p>
      <p>Kegs: ${kegs}</p>
      <p>Delivery Date: ${deliveryDate}</p>
    `;
  } else {
    orderSummary.innerHTML = '<p>Order information not available.</p>';
  }
});
