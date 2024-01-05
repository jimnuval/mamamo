let cartCheckbox = document.getElementById('cart');
let orderList = document.querySelector('.order-list');
let totalAmountSpan = document.getElementById('totalAmount');
let cartItems = [];

function addToCart(itemName, itemPrice) {
  // Check if the item is already in the cart
  let existingItem = cartItems.find(item => item.name === itemName);

  if (existingItem) {
    // If the item is already in the cart, update the quantity and total price
    existingItem.quantity += 1;
    existingItem.totalPrice = existingItem.quantity * itemPrice;
  } else {
    // If the item is not in the cart, add it to the cart
    let newItem = {
      name: itemName,
      price: itemPrice,
      quantity: 1,
      totalPrice: itemPrice
    };
    cartItems.push(newItem);
  }

  // Update the order list and total amount
  updateOrderList();
}

function updateOrderList() {
  // Clear the order list
  orderList.innerHTML = '';

  // Update the order list with the current cart items
  cartItems.forEach(item => {
    let listItem = document.createElement('li');
    listItem.textContent = `${item.name} x${item.quantity} - $${item.totalPrice}`;
    orderList.appendChild(listItem);
  });

  // Update the total amount
  updateTotalAmount();
}

function updateTotalAmount() {
  // Calculate the total amount from the cart items
  let totalAmount = cartItems.reduce((total, item) => total + item.totalPrice, 0);

  // Update the total amount span
  totalAmountSpan.textContent = totalAmount;
}

function checkout() {
  // Implement your checkout logic here

  // For example, you can send the cartItems to the server for processing

  // After checkout, clear the cart and update the UI
  cartItems = [];
  updateOrderList();

  // Close the cart menu
  cartCheckbox.checked = false;
}
