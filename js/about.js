// Get references to the menu and menu toggle button
const menu = document.getElementById('menu');
const menuToggle = document.getElementById('menuToggle');

// Add a click event listener to the menu toggle button
menuToggle.addEventListener('click', () => {
    // Toggle the 'active' class on the menu to show/hide it
    menu.classList.toggle('active');
});
