const priceInput = document.querySelector('#price-input');
const quantityInput = document.querySelector('#quantity');
const totalPriceDisplay = document.querySelector('#total-price span');
const quantityDisplay = document.querySelector('.badge');

priceInput.oninput = calculateTotalPrice;
quantityInput.oninput = calculateTotalPrice;

function calculateTotalPrice() {
  quantityDisplay.innerHTML = quantityInput.value;
  totalPriceDisplay.innerHTML = quantityInput.value * priceInput.value;
}
