Threaded E-Commerce Website

Overview:
This is a front-end implementation of an e-commerce website for "Threaded," focusing on product display, a shopping cart modal, and a responsive design. Users can browse products in the "Recently Bought" section, add items to the shopping cart, and interact with the shopping bag modal to update or remove items.

Technologies Used:

HTML5: Structure of the webpage
CSS3: Styling and responsive design
JavaScript (Vanilla): Dynamic functionality like adding/removing cart items and modal interaction
Flexbox: For responsive layout and alignment

Features:

1. Recently Bought Section

Displays a list of items recently purchased by customers.
Items are loaded using HTML markup.
Each item includes an image, name, price, and sale information.

2. Hamburger Menu

A collapsible hamburger menu for small screens. When clicked, it shows/hides the navigation links.

3. Shopping Cart Modal

Users can click the shopping bag icon to view their cart.
The cart modal allows users to:
View items they have added to the cart.
Increase/decrease item quantities.
Remove items from the cart.
View the total cart value.

4. Responsive Design

The website adjusts to different screen sizes for optimal user experience, from desktop to mobile.

File Structure:

index.html: Main HTML structure for the website.
styles.css: All the styling for the page, including the layout, modals, and responsive design.
script.js: Handles all the dynamic interactions (adding/removing items, updating the cart, modal handling).
images/: Folder containing product images.

How It Works:

1. Recently Bought Section:

Displays a grid of products in the recently-bought-section section, styled using CSS grid.

2. Hamburger Menu:

Toggles between showing and hiding navigation links when the hamburger icon is clicked.

3. Shopping Cart:

Items from the recently-bought-section can be added to the cart programmatically.
When the shopping bag icon is clicked, a modal appears showing the items added to the cart.
Users can adjust the quantity of items or remove them entirely.
The cart total updates dynamically based on the items in the cart.

4. Modal Functionality:

The modal is triggered to appear by clicking the shopping bag icon, and can be closed by clicking the "X" icon.
It uses flexbox to center it and ensure responsiveness.

5. JavaScript Functions:

addItemToCart(itemId): Adds items to the cart.
loadCartItems(): Loads all items into the modal from the cart array.
removeItemFromCart(itemId): Removes a specific item from the cart.
updateTotal(): Recalculates and updates the total price based on cart contents.

Instructions:

1. Viewing Items:

Recently bought items are listed in a grid format on the homepage.

2. Adding Items to Cart:

Items can be added to the cart via the product grid using addItemToCart() method in script.js.

3. Managing Cart:

Open the cart by clicking the shopping bag icon. You can then update the quantity or remove items as needed. The total updates automatically.

4. Closing the Modal:

Click the "X" button in the top-right corner of the modal to close it.

Responsive Behavior:

The site uses media queries to adapt to screen sizes, ensuring the best viewing experience on both desktop and mobile devices. For example, the modal's content width reduces on smaller screens.

Future Improvements:

Backend integration to handle real-time data and user authentication.
Payment gateway integration for checkout functionality.