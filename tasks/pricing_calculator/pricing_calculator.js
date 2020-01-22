const priceInput = document.querySelector('#price-input');
const quantityInput = document.querySelector('#quantity');
const totalPriceDisplay = document.querySelector('#total-price span');
const quantityDisplay = document.querySelector('.badge');

priceInput.addEventListener('input', calculateTotalPrice);
quantityInput.addEventListener('input', calculateTotalPrice);

function calculateTotalPrice() {
  const price = priceInput.value;
  const quantity = quantityInput.value;
  let totalPrice = (price * quantity).toFixed(2);
  displayValues(quantity, totalPrice);
}

function displayValues(quantity, totalPrice) {
  quantityDisplay.innerHTML = quantity;
  totalPriceDisplay.innerHTML = totalPrice;
}
