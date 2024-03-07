const foodItems = [
  {
    id: 1,
    name: "Pizza",
    price: 10.99,
    image: "Images/Pizza.jpg",
  },
  {
    id: 2,
    name: "Burger",
    price: 7.99,
    image: "Images/burger.jpg",
  },
  {
    id: 3,
    name: "Ice Cream",
    price: 3.99,
    image: "Images/Ice.jpg",
  },
  {
    id: 4,
    name: "Sandwich",
    price: 5.99,
    image: "Images/Sandwich.jpg",
  },
  {
    id: 5,
    name: "Falafel",
    price: 6.99,
    image: "Images/falafel.jpg",
  },
  {
    id: 6,
    name: "Shawrmma",
    price: 4.99,
    image: "Images/Shawrmma.jpg",
  },
  // Add more food items as needed
];

document.addEventListener("DOMContentLoaded", () => {
  displayFoodItems();
  updateTotalPrice(); // Set initial total price to 0.00
});

function displayFoodItems() {
  const productListDiv = document.getElementById("productList");
  productListDiv.innerHTML = "";

  foodItems.forEach((foodItem) => {
    const itemDiv = document.createElement("div");
    itemDiv.innerHTML = `
      <img src="${foodItem.image}" alt="${foodItem.name}" />
      <h3>${foodItem.name}</h3>
      <p>Price: $${foodItem.price}</p>
      <button onclick="addToCart(${foodItem.id})">Add to Cart</button>
    `;
    productListDiv.appendChild(itemDiv);
  });
}

const cartItems = [];

function addToCart(itemId) {
  const itemToAdd = foodItems.find((item) => item.id === itemId);
  if (itemToAdd) {
    cartItems.push(itemToAdd);
    displayCartItems();
    updateTotalPrice(); // Update total price after adding an item to the cart
  }
}

function displayCartItems() {
  const cartItemsList = document.getElementById("cartItems");
  cartItemsList.innerHTML = "";

  cartItems.forEach((cartItem) => {
    const li = document.createElement("li");
    li.textContent = `${cartItem.name} - $${cartItem.price}`;
    cartItemsList.appendChild(li);
  });
}

function updateTotalPrice() {
  const totalPriceElement = document.getElementById("totalPrice");
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
  totalPriceElement.textContent = totalPrice.toFixed(2);
}

// Previous JavaScript code remains the same
