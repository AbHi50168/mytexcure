// // menu.js

// document.addEventListener('DOMContentLoaded', () => {
//     // Select necessary DOM elements
//     const menuToggle = document.querySelector('.elementor-menu-toggle');
//     const navMenuContainer = document.querySelector('.elementor-nav-menu--dropdown.elementor-nav-menu__container');
//     const menuItemsWithChildren = document.querySelectorAll('.menu-item-has-children');

//     // Function to toggle mobile menu
//     function toggleMobileMenu() {
//         const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
//         menuToggle.setAttribute('aria-expanded', !isExpanded);
//         menuToggle.classList.toggle('elementor-active');

//         if (!isExpanded) {
//             navMenuContainer.style.maxHeight = 'var(--menu-height)';
//             navMenuContainer.style.transform = 'scaleY(1)';
//         } else {
//             navMenuContainer.style.maxHeight = '0';
//             navMenuContainer.style.transform = 'scaleY(0)';
//         }
//     }

//     // Function to toggle submenu
//     function toggleSubmenu(event) {
//         const menuItem = event.currentTarget;
//         const submenu = menuItem.querySelector('.sub-menu');

//         // Prevent default anchor behavior for dropdowns
//         if (menuItem.classList.contains('menu-item-has-children')) {
//             event.preventDefault();
//         }

//         // Toggle active class for styling (optional, based on your design)
//         menuItem.classList.toggle('active');

//         // Toggle submenu visibility
//         if (submenu) {
//             const isSubmenuOpen = submenu.style.display === 'block';
//             submenu.style.display = isSubmenuOpen ? 'none' : 'block';
//         }
//     }

//     // Add click event listener to menu toggle (hamburger)
//     if (menuToggle) {
//         menuToggle.addEventListener('click', toggleMobileMenu);
//     }

//     // Add click event listeners to menu items with children (for dropdowns)
//     menuItemsWithChildren.forEach(item => {
//         const link = item.querySelector('.elementor-item');
//         if (link) {
//             link.addEventListener('click', toggleSubmenu);
//         }
//     });

//     // Ensure submenus are hidden by default on mobile
//     function resetSubmenus() {
//         menuItemsWithChildren.forEach(item => {
//             const submenu = item.querySelector('.sub-menu');
//             if (submenu) {
//                 submenu.style.display = 'none';
//             }
//             item.classList.remove('active');
//         });
//     }

//     // Reset submenus when menu is closed
//     menuToggle.addEventListener('click', () => {
//         if (menuToggle.getAttribute('aria-expanded') === 'false') {
//             resetSubmenus();
//         }
//     });

//     // Handle window resize to reset menu state on desktop
//     function handleResize() {
//         if (window.innerWidth >= 1025) { // Match tablet breakpoint from CSS
//             navMenuContainer.style.maxHeight = '';
//             navMenuContainer.style.transform = '';
//             menuToggle.setAttribute('aria-expanded', 'false');
//             menuToggle.classList.remove('elementor-active');
//             resetSubmenus();
//         }
//     }

//     window.addEventListener('resize', handleResize);

//     // Initial setup
//     handleResize();
// });

// menu1.js

// document.addEventListener('DOMContentLoaded', () => {
//     // If jQuery is available, use it; otherwise, use vanilla JS
//     const $ = window.jQuery || null;

//     // Select necessary DOM elements
//     const menuToggle = document.querySelector('.elementor-menu-toggle');
//     const navMenuContainer = document.querySelector('.elementor-nav-menu--dropdown.elementor-nav-menu__container');
//     const menuItemsWithChildren = document.querySelectorAll('.menu-item-has-children');

//     // Function to toggle mobile menu
//     function toggleMobileMenu() {
//         const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
//         menuToggle.setAttribute('aria-expanded', !isExpanded);
//         menuToggle.classList.toggle('elementor-active');

//         if (!isExpanded) {
//             navMenuContainer.style.maxHeight = '100vh'; // Use a fixed value or CSS variable
//             navMenuContainer.style.transform = 'scaleY(1)';
//         } else {
//             navMenuContainer.style.maxHeight = '0';
//             navMenuContainer.style.transform = 'scaleY(0)';
//         }
//     }

//     // Function to toggle submenu
//     function toggleSubmenu(event) {
//         const menuItem = event.currentTarget;
//         const submenu = menuItem.querySelector('.sub-menu');

//         // Prevent default anchor behavior for dropdowns
//         if (menuItem.classList.contains('menu-item-has-children')) {
//             event.preventDefault();
//         }

//         // Toggle active class for styling (optional, based on your design)
//         menuItem.classList.toggle('active');

//         // Toggle submenu visibility
//         if (submenu) {
//             const isSubmenuOpen = submenu.style.display === 'block';
//             submenu.style.display = isSubmenuOpen ? 'none' : 'block';
//         }
//     }

//     // Add click event listener to menu toggle (hamburger)
//     if (menuToggle) {
//         menuToggle.addEventListener('click', toggleMobileMenu);
//     }

//     // Add click event listeners to menu items with children (for dropdowns)
//     menuItemsWithChildren.forEach(item => {
//         const link = item.querySelector('.elementor-item');
//         if (link) {
//             link.addEventListener('click', toggleSubmenu);
//         }
//     });

//     // Ensure submenus are hidden by default on mobile
//     function resetSubmenus() {
//         menuItemsWithChildren.forEach(item => {
//             const submenu = item.querySelector('.sub-menu');
//             if (submenu) {
//                 submenu.style.display = 'none';
//             }
//             item.classList.remove('active');
//         });
//     }

//     // Reset submenus when menu is closed
//     if (menuToggle) {
//         menuToggle.addEventListener('click', () => {
//             if (menuToggle.getAttribute('aria-expanded') === 'false') {
//                 resetSubmenus();
//             }
//         });
//     }

//     // Handle window resize to reset menu state on desktop
//     function handleResize() {
//         if (window.innerWidth >= 1025) { // Match tablet breakpoint from CSS
//             if (navMenuContainer) {
//                 navMenuContainer.style.maxHeight = '';
//                 navMenuContainer.style.transform = '';
//             }
//             if (menuToggle) {
//                 menuToggle.setAttribute('aria-expanded', 'false');
//                 menuToggle.classList.remove('elementor-active');
//             }
//             resetSubmenus();
//         }
//     }

//     window.addEventListener('resize', handleResize);

//     // Initial setup
//     handleResize();

//     // If jQuery is available, add hover effects for desktop (optional)
//     if ($) {
//         $('.menu-item-has-children').hover(
//             function() {
//                 const submenu = $(this).find('.sub-menu');
//                 if (window.innerWidth >= 1025) { // Only on desktop
//                     submenu.css('display', 'block');
//                 }
//             },
//             function() {
//                 const submenu = $(this).find('.sub-menu');
//                 if (window.innerWidth >= 1025) { // Only on desktop
//                     submenu.css('display', 'none');
//                 }
//             }
//         );
//     }
// });


document.addEventListener("DOMContentLoaded", function () {
    const servicesMenuItem = document.querySelector(".menu-item-392 > a");
    const subMenu = document.querySelector(".menu-item-392 .sub-menu");

    // Create dropdown icon
    const dropdownIcon = document.createElement("span");
    dropdownIcon.innerHTML = ""; // Downward triangle symbol
    dropdownIcon.style.marginLeft = "8px";
    servicesMenuItem.appendChild(dropdownIcon);

    // Toggle submenu on click
    servicesMenuItem.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default anchor behavior
        subMenu.classList.toggle("open");
    });

    // Close submenu when clicking outside
    document.addEventListener("click", function (event) {
        if (!servicesMenuItem.contains(event.target) && !subMenu.contains(event.target)) {
            subMenu.classList.remove("open");
        }
    });

    // Apply styles for submenu
    subMenu.style.display = "none";
    subMenu.style.position = "absolute";
    subMenu.style.background = "#ffffff";
    subMenu.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.1)";
    subMenu.style.padding = "10px";
    subMenu.style.borderRadius = "4px";
    subMenu.style.minWidth = "200px";
    subMenu.style.overflow = "hidden";

    // Style submenu items
    document.querySelectorAll(".sub-menu a").forEach(item => {
        item.style.display = "block";
        item.style.padding = "10px";
        item.style.color = "#000000";
        item.style.background = "#f8f9fa";
        item.style.textDecoration = "none";
        item.style.borderRadius = "4px";
        item.style.marginBottom = "5px";

        // Add hover effect
        item.addEventListener("mouseover", function () {
            item.style.background = "#003366"; // Navy Blue (or initial color)
            item.style.color = "#ffffff"; // White text
        });
        item.addEventListener("mouseout", function () {
            item.style.background = "#f8f9fa";
            item.style.color = "#000000";
        });
    });

    // Show/hide submenu
    document.styleSheets[0].insertRule(".sub-menu.open { display: block !important; }", 0);

    // Ensure each menu item navigates correctly
    document.querySelectorAll(".sub-menu a").forEach(item => {
        item.addEventListener("click", function (event) {
            window.location.href = this.href;
        });
    });
});