// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const hamburgerMenu = document.querySelector('.hamburger-menu ul');

if (hamburger && hamburgerMenu) {
    hamburger.addEventListener('click', () => {
        hamburgerMenu.style.display = hamburgerMenu.style.display === 'flex' ? 'none' : 'flex';
        hamburger.classList.toggle('active');
    });
}

// Global cart array
let cart = [];

// Function to open the cart modal
function openCartModal() {
    document.querySelector(".cart-modal").style.display = "block";
    loadCartItems();
}

// Function to close the cart modal
function closeCartModal() {
    document.querySelector(".cart-modal").style.display = "none";
}

// Load Recently Bought Items into Cart Modal
function loadCartItems() {
    const cartContainer = document.querySelector('.cart-items-container');
    cartContainer.innerHTML = '';  // Clear previous content

    cart.forEach(item => {
        cartContainer.innerHTML += `
        <div class="cart-item" data-id="${item.id}">
            <img src="${item.image}" alt="${item.name}">
            <div class="item-details">
                <h4>${item.name}</h4>
                <p>$${item.price.toFixed(2)}</p>
                <input type="number" min="1" value="${item.quantity}" class="quantity-input" data-id="${item.id}">
                <button class="remove-btn" data-id="${item.id}">Remove</button>
            </div>
        </div>
        `;
    });

    updateTotal();
}

// Add item to cart
function addItemToCart(itemElement) {
    const itemHTML = itemElement.dataset.itemHtml;
    const template = document.createElement('template');
    template.innerHTML = itemHTML.trim();  // Parse the HTML string into a DOM element

    const item = {
        id: Date.now(),  // Generate a unique ID for each item
        name: template.content.querySelector('p').innerText,
        price: parseFloat(template.content.querySelector('.sale-price')?.innerText.replace('$', '') || template.content.querySelector('p:nth-of-type(2)').innerText.replace('$', '')),
        image: template.content.querySelector('img').src,
        quantity: 1
    };

    const existingItem = cart.find(i => i.name === item.name);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push(item);  // Push the item into the cart array
    }

    loadCartItems();
}

// Remove item from cart
function removeItemFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    loadCartItems();
}

// Update quantity of items in the cart
document.addEventListener('change', function (e) {
    if (e.target && e.target.classList.contains('quantity-input')) {
        const itemId = parseInt(e.target.dataset.id);
        const newQuantity = parseInt(e.target.value);
        const item = cart.find(i => i.id === itemId);

        if (item && newQuantity > 0) {
            item.quantity = newQuantity;
        }
        updateTotal();
    }
});

// Update the cart total
function updateTotal() {
    let total = 0;
    cart.forEach(item => {
        total += item.price * item.quantity;
    });
    document.getElementById("cart-total").innerText = `$${total.toFixed(2)}`;
}

// Event listener to add items to cart from "Recently Bought" section
document.querySelectorAll('.recently-bought-item').forEach(item => {
    item.addEventListener('click', function () {
        addItemToCart(item);
    });
});

// Remove button event
document.addEventListener('click', function (e) {
    if (e.target && e.target.classList.contains('remove-btn')) {
        const itemId = parseInt(e.target.dataset.id);
        removeItemFromCart(itemId);
    }
});

// Close the modal when the user clicks the close button
document.querySelector('.close-cart').addEventListener('click', closeCartModal);

// Trigger the cart modal on clicking the Shopping Bag Icon
document.getElementById('shopping-bag').addEventListener('click', function (event) {
    event.preventDefault();  // Prevent default anchor behavior
    openCartModal();         // Open the modal
});