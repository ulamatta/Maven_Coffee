window.onload = function() {
  const urlParams = new URLSearchParams(window.location.search);
  const companyName = urlParams.get('company');
  const kegs = urlParams.get('kegs');
  const deliveryDate = urlParams.get('delivery_date');

  document.getElementById('company-name').innerText = companyName;
  document.getElementById('kegs-ordered').innerText = kegs;
  document.getElementById('delivery-date').innerText = deliveryDate;
};
