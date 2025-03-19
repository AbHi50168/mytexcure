// document.addEventListener("DOMContentLoaded", function () {
//     const servicesMenuItem = document.querySelector(".menu-item-392 > a");
//     const subMenu = document.querySelector(".menu-item-392 .sub-menu");

//     // Create dropdown icon
//     const dropdownIcon = document.createElement("span");
//     dropdownIcon.innerHTML = "&#9662;"; // Downward triangle symbol
//     dropdownIcon.style.marginLeft = "8px";
//     servicesMenuItem.appendChild(dropdownIcon);

//     // Toggle submenu on click
//     servicesMenuItem.addEventListener("click", function (event) {
//         event.preventDefault(); // Prevent default anchor behavior
//         subMenu.classList.toggle("open");
//     });

//     // Close submenu when clicking outside
//     document.addEventListener("click", function (event) {
//         if (!servicesMenuItem.contains(event.target) && !subMenu.contains(event.target)) {
//             subMenu.classList.remove("open");
//         }
//     });

//     // Apply styles for submenu
//     subMenu.style.display = "none";
//     subMenu.style.position = "absolute";
//     subMenu.style.background = "#ffffff";
//     subMenu.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.1)";
//     subMenu.style.padding = "10px";
//     subMenu.style.borderRadius = "4px";
//     subMenu.style.minWidth = "200px";
//     subMenu.style.overflow = "hidden";

//     // Style submenu items
//     document.querySelectorAll(".sub-menu a").forEach(item => {
//         item.style.display = "block";
//         item.style.padding = "10px";
//         item.style.color = "#000000";
//         item.style.background = "#f8f9fa";
//         item.style.textDecoration = "none";
//         item.style.borderRadius = "4px";
//         item.style.marginBottom = "5px";

//         // Add hover effect
//         item.addEventListener("mouseover", function () {
//             item.style.background = "#003366"; // Navy Blue (or initial color)
//             item.style.color = "#ffffff"; // White text
//         });
//         item.addEventListener("mouseout", function () {
//             item.style.background = "#f8f9fa";
//             item.style.color = "#000000";
//         });
//     });

//     // Show/hide submenu
//     document.styleSheets[0].insertRule(".sub-menu.open { display: block !important; }", 0);

//     // Ensure each menu item navigates correctly
//     document.querySelectorAll(".sub-menu a").forEach(item => {
//         item.addEventListener("click", function (event) {
//             window.location.href = this.href;
//         });
//     });
// });

// menu.js
// menu.js



// document.addEventListener('DOMContentLoaded', function() {
//     // Menu elements
//     const menuToggle = document.querySelector('.elementor-menu-toggle');
//     const navContainer = document.querySelector('.elementor-nav-menu--dropdown.elementor-nav-menu__container');
//     const mainNav = document.querySelector('.elementor-nav-menu--main');
//     const menuItems = document.querySelectorAll('.elementor-nav-menu .menu-item-has-children');
//     const subMenus = document.querySelectorAll('.sub-menu');

//     // Breakpoint for mobile/tablet
//     const tabletBreakpoint = 1024;

//     // Initial setup
//     if (navContainer) {
//         navContainer.setAttribute('aria-hidden', 'true'); // Ensure initial state
//     }

//     // Toggle mobile menu
//     if (menuToggle && navContainer) {
//         menuToggle.addEventListener('click', function(e) {
//             e.preventDefault();
//             const isExpanded = this.getAttribute('aria-expanded') === 'true';
            
//             // Toggle states
//             this.classList.toggle('elementor-active');
//             this.setAttribute('aria-expanded', !isExpanded);
//             navContainer.classList.toggle('menu-open');
            
//             // Update aria-hidden and height
//             if (!isExpanded) {
//                 navContainer.setAttribute('aria-hidden', 'false');
//                 navContainer.style.maxHeight = `${navContainer.scrollHeight}px`;
//             } else {
//                 navContainer.setAttribute('aria-hidden', 'true');
//                 navContainer.style.maxHeight = '0';
//             }
//         });
//     }

//     // Handle submenu toggle on mobile
//     menuItems.forEach(item => {
//         const link = item.querySelector('.elementor-item');
//         const submenu = item.querySelector('.sub-menu');

//         if (link && submenu) {
//             link.addEventListener('click', function(e) {
//                 if (window.innerWidth <= tabletBreakpoint) {
//                     e.preventDefault();
//                     item.classList.toggle('submenu-open');
                    
//                     if (item.classList.contains('submenu-open')) {
//                         submenu.style.maxHeight = `${submenu.scrollHeight}px`;
//                     } else {
//                         submenu.style.maxHeight = '0';
//                     }
//                 }
//             });
//         }
//     });

//     // Handle window resize
//     function handleResize() {
//         const windowWidth = window.innerWidth;

//         if (windowWidth > tabletBreakpoint) {
//             if (menuToggle) {
//                 menuToggle.classList.remove('elementor-active');
//                 menuToggle.setAttribute('aria-expanded', 'false');
//             }
//             if (navContainer) {
//                 navContainer.style.maxHeight = '';
//                 navContainer.classList.remove('menu-open');
//                 navContainer.setAttribute('aria-hidden', 'true');
//             }
//             subMenus.forEach(submenu => {
//                 submenu.style.maxHeight = '';
//             });
//             menuItems.forEach(item => {
//                 item.classList.remove('submenu-open');
//             });
//         }

//         if (mainNav && navContainer) {
//             if (windowWidth <= tabletBreakpoint) {
//                 mainNav.style.display = 'none';
//                 navContainer.style.display = 'block';
//             } else {
//                 mainNav.style.display = 'block';
//                 navContainer.style.display = 'none';
//             }
//         }
//     }

//     // Close mobile menu when clicking outside
//     document.addEventListener('click', function(e) {
//         if (window.innerWidth <= tabletBreakpoint && navContainer && menuToggle) {
//             if (!navContainer.contains(e.target) && !menuToggle.contains(e.target)) {
//                 menuToggle.classList.remove('elementor-active');
//                 menuToggle.setAttribute('aria-expanded', 'false');
//                 navContainer.classList.remove('menu-open');
//                 navContainer.style.maxHeight = '0';
//                 navContainer.setAttribute('aria-hidden', 'true');
                
//                 menuItems.forEach(item => {
//                     item.classList.remove('submenu-open');
//                     const submenu = item.querySelector('.sub-menu');
//                     if (submenu) submenu.style.maxHeight = '0';
//                 });
//             }
//         }
//     });

//     // Keyboard accessibility
//     if (menuToggle) {
//         menuToggle.addEventListener('keydown', function(e) {
//             if (e.key === 'Enter' || e.key === ' ') {
//                 e.preventDefault();
//                 this.click();
//             }
//         });
//     }

//     // Focus management for dropdown items
//     if (navContainer) {
//         navContainer.querySelectorAll('a').forEach(link => {
//             link.addEventListener('focus', function() {
//                 if (navContainer.getAttribute('aria-hidden') === 'true') {
//                     navContainer.setAttribute('aria-hidden', 'false');
//                     if (menuToggle) {
//                         menuToggle.setAttribute('aria-expanded', 'true');
//                         menuToggle.classList.add('elementor-active');
//                     }
//                     navContainer.classList.add('menu-open');
//                     navContainer.style.maxHeight = `${navContainer.scrollHeight}px`;
//                 }
//             });
//         });
//     }

//     // Initialize and handle resize
//     window.addEventListener('resize', handleResize);
//     handleResize();

//     // Add initial aria attributes
//     if (menuToggle) {
//         menuToggle.setAttribute('aria-expanded', 'false');
//         menuToggle.setAttribute('aria-controls', 'menu-2-2abc8348');
//     }
// });


// const additionalStyles = `
//     /* Ensure the dropdown container is fully visible and centered on the screen */
//     .elementor-nav-menu--dropdown.elementor-nav-menu__container {
//         width: 90%; /* Responsive width */
//         max-width: 400px; /* Cap the width for larger screens */
//         min-width: 300px; /* Ensure it doesn't collapse too much */
//         box-sizing: border-box;
//         overflow-x: visible !important; /* Override Elementor's hidden */
//         overflow-y: auto; /* Preserve vertical scrolling if needed */
//         position: absolute; /* Position relative to nearest positioned parent */
//         left: 110% !important; /* Center horizontally */
//         transform: translateX(-110%) !important; /* Adjust for true centering */
//         margin: 0; /* Remove any margin that might interfere */
//     }

//     /* Ensure sub-menus are not clipped and centered */
//     .sub-menu {
//         width: 100% !important;
//         max-width: 100% !important;
//         box-sizing: border-box;
//         overflow-x: visible !important;
//         text-align: center; /* Center submenu items */
//     }

//     @media (max-width: 1024px) {
//         .elementor-nav-menu--dropdown {
//             display: block;
//             position: absolute !important; /* Position relative to nearest positioned parent */
//             width: 90% !important; /* Responsive width */
//             max-width: 400px !important; /* Cap the width */
//             min-width: 300px !important; /* Ensure minimum width */
//             left: 50% !important; /* Center horizontally */
//             transform: translateX(-50%) !important; /* Adjust for true centering */
//             box-sizing: border-box;
//             overflow-x: visible !important;
//             padding: 0 10px; /* Add padding for better spacing */
//         }

//         .elementor-nav-menu--main {
//             display: none;
//         }

//         .elementor-menu-toggle {
//             display: flex !important;
//         }

//         .sub-menu {
//             position: relative;
//             width: 100% !important;
//             max-width: 100% !important;
//             background-color: #f8f8f8;
//         }

//         /* Center the menu items */
//         .elementor-nav-menu--dropdown a {
//             text-align: center; /* Center the text of menu items */
//             justify-content: center; /* Center flex items */
//         }

//         /* Ensure parent container supports absolute positioning */
//         .elementor-widget-container {
//             position: relative !important; /* Ensure the dropdown positions relative to this */
//         }

//         /* Override potential parent clipping */
//         .site-main .menu-navigation-container,
//         .elementor-section,
//         .elementor-widget-wrap {
//             overflow-x: visible !important;
//             width: 100% !important;
//             max-width: 100% !important;
//         }
//     }

//     @media (min-width: 1025px) {
//         .elementor-nav-menu--dropdown {
//             display: none !important;
//         }

//         .sub-menu {
//             position: absolute;
//             min-width: 200px;
//         }
//     }

//     /* Focus styles for accessibility */
//     .elementor-nav-menu a:focus {
//         outline: 2px solid #007bff;
//         outline-offset: 2px;
//     }

//     .elementor-menu-toggle:focus {
//         outline: 2px solid #007bff;
//         outline-offset: 2px;
//     }
// `;
// const styleSheet = document.createElement('style');
// styleSheet.textContent = additionalStyles;
// document.head.appendChild(styleSheet);




// document.addEventListener('DOMContentLoaded', function() {
//     // Menu elements
//     const menuToggle = document.querySelector('.elementor-menu-toggle');
//     const navContainer = document.querySelector('.elementor-nav-menu--dropdown.elementor-nav-menu__container');
//     const mainNav = document.querySelector('.elementor-nav-menu--main');
//     const menuItems = document.querySelectorAll('.elementor-nav-menu .menu-item-has-children');
//     const subMenus = document.querySelectorAll('.sub-menu');

//     // Breakpoint for mobile/tablet
//     const tabletBreakpoint = 1024;

//     // Initial setup
//     if (navContainer) {
//         navContainer.setAttribute('aria-hidden', 'true'); // Ensure initial state
//     }

//     // Toggle mobile menu
//     if (menuToggle && navContainer) {
//         menuToggle.addEventListener('click', function(e) {
//             e.preventDefault();
//             const isExpanded = this.getAttribute('aria-expanded') === 'true';
            
//             // Toggle states
//             this.classList.toggle('elementor-active');
//             this.setAttribute('aria-expanded', !isExpanded);
//             navContainer.classList.toggle('menu-open');
            
//             // Update aria-hidden and height
//             if (!isExpanded) {
//                 navContainer.setAttribute('aria-hidden', 'false');
//                 navContainer.style.maxHeight = `${navContainer.scrollHeight}px`;
//             } else {
//                 navContainer.setAttribute('aria-hidden', 'true');
//                 navContainer.style.maxHeight = '0';
//             }
//         });
//     }

//     // Handle submenu toggle and navigation
//     menuItems.forEach(item => {
//         const link = item.querySelector('.elementor-item');
//         const submenu = item.querySelector('.sub-menu');

//         if (link && submenu) {
//             link.addEventListener('click', function(e) {
//                 // Prevent default if it's a navigation link with a valid href
//                 if (e.target.getAttribute('href') && e.target.getAttribute('href') !== '#') {
//                     return; // Allow navigation for direct links
//                 }

//                 e.preventDefault(); // Prevent default for submenu toggle
//                 item.classList.toggle('submenu-open');
                
//                 if (item.classList.contains('submenu-open')) {
//                     submenu.style.maxHeight = `${submenu.scrollHeight}px`;
//                 } else {
//                     submenu.style.maxHeight = '0';
//                 }
//             });
//         }
//     });

//     // Handle submenu item navigation
//     subMenus.forEach(submenu => {
//         submenu.querySelectorAll('a').forEach(subLink => {
//             subLink.addEventListener('click', function(e) {
//                 // Allow navigation to the href if it exists
//                 const href = this.getAttribute('href');
//                 if (href && href !== '#') {
//                     window.location.href = href; // Navigate to the page
//                 }
//                 // Optionally close the submenu or menu if desired
//                 if (window.innerWidth <= tabletBreakpoint) {
//                     const parentItem = this.closest('.menu-item-has-children');
//                     if (parentItem) {
//                         parentItem.classList.remove('submenu-open');
//                         submenu.style.maxHeight = '0';
//                     }
//                     if (navContainer.classList.contains('menu-open')) {
//                         navContainer.classList.remove('menu-open');
//                         navContainer.style.maxHeight = '0';
//                         menuToggle.classList.remove('elementor-active');
//                         menuToggle.setAttribute('aria-expanded', 'false');
//                     }
//                 }
//             });
//         });
//     });

//     // Handle window resize
//     function handleResize() {
//         const windowWidth = window.innerWidth;

//         if (windowWidth > tabletBreakpoint) {
//             if (menuToggle) {
//                 menuToggle.classList.remove('elementor-active');
//                 menuToggle.setAttribute('aria-expanded', 'false');
//             }
//             if (navContainer) {
//                 navContainer.style.maxHeight = '';
//                 navContainer.classList.remove('menu-open');
//                 navContainer.setAttribute('aria-hidden', 'true');
//             }
//             subMenus.forEach(submenu => {
//                 submenu.style.maxHeight = '';
//             });
//             menuItems.forEach(item => {
//                 item.classList.remove('submenu-open');
//             });
//         }

//         if (mainNav && navContainer) {
//             if (windowWidth <= tabletBreakpoint) {
//                 mainNav.style.display = 'none';
//                 navContainer.style.display = 'block';
//             } else {
//                 mainNav.style.display = 'block';
//                 navContainer.style.display = 'none';
//             }
//         }
//     }

//     // Close mobile menu when clicking outside
//     document.addEventListener('click', function(e) {
//         if (window.innerWidth <= tabletBreakpoint && navContainer && menuToggle) {
//             if (!navContainer.contains(e.target) && !menuToggle.contains(e.target)) {
//                 menuToggle.classList.remove('elementor-active');
//                 menuToggle.setAttribute('aria-expanded', 'false');
//                 navContainer.classList.remove('menu-open');
//                 navContainer.style.maxHeight = '0';
//                 navContainer.setAttribute('aria-hidden', 'true');
                
//                 menuItems.forEach(item => {
//                     item.classList.remove('submenu-open');
//                     const submenu = item.querySelector('.sub-menu');
//                     if (submenu) submenu.style.maxHeight = '0';
//                 });
//             }
//         }
//     });

//     // Keyboard accessibility
//     if (menuToggle) {
//         menuToggle.addEventListener('keydown', function(e) {
//             if (e.key === 'Enter' || e.key === ' ') {
//                 e.preventDefault();
//                 this.click();
//             }
//         });
//     }

//     // Focus management for dropdown items
//     if (navContainer) {
//         navContainer.querySelectorAll('a').forEach(link => {
//             link.addEventListener('focus', function() {
//                 if (navContainer.getAttribute('aria-hidden') === 'true') {
//                     navContainer.setAttribute('aria-hidden', 'false');
//                     if (menuToggle) {
//                         menuToggle.setAttribute('aria-expanded', 'true');
//                         menuToggle.classList.add('elementor-active');
//                     }
//                     navContainer.classList.add('menu-open');
//                     navContainer.style.maxHeight = `${navContainer.scrollHeight}px`;
//                 }
//             });
//         });
//     }

//     // Initialize and handle resize
//     window.addEventListener('resize', handleResize);
//     handleResize();
//     const additionalStyles = `
//     /* Ensure the dropdown container is fully visible and centered on the screen */
//     .elementor-nav-menu--dropdown.elementor-nav-menu__container {
//         width: 90%; /* Responsive width */
//         max-width: 400px; /* Cap the width for larger screens */
//         min-width: 300px; /* Ensure it doesn't collapse too much */
//         box-sizing: border-box;
//         overflow-x: visible !important; /* Override Elementor's hidden */
//         overflow-y: auto; /* Preserve vertical scrolling if needed */
//         position: absolute; /* Position relative to nearest positioned parent */
//         left: 50% !important; /* Center horizontally */
//         transform: translateX(-50%) !important; /* Adjust for true centering */
//         margin: 0; /* Remove any margin that might interfere */
//     }

//     /* Ensure sub-menus are styled and positioned correctly */
//     .sub-menu {
//         width: 100% !important;
//         max-width: 100% !important;
//         box-sizing: border-box;
//         overflow-x: visible !important;
//         text-align: center; /* Center submenu items */
//         display: none; /* Initially hidden */
//         position: absolute; /* Position below parent item */
//         top: 100%; /* Position below the parent link */
//         left: 0; /* Align with the parent item */
//         background-color: #f8f8f8;
//         z-index: 1000; /* Ensure it stays above other content */
//     }

//     .menu-item-has-children.submenu-open > .sub-menu {
//         display: block; /* Show submenu when parent has submenu-open class */
//         max-height: none; /* Allow full height when open */
//     }

//     @media (max-width: 1024px) {
//         .elementor-nav-menu--dropdown {
//             display: block;
//             position: absolute !important; /* Position relative to nearest positioned parent */
//             width: 90% !important; /* Responsive width */
//             max-width: 400px !important; /* Cap the width */
//             min-width: 300px !important; /* Ensure minimum width */
//             left: 50% !important; /* Center horizontally */
//             transform: translateX(-50%) !important; /* Adjust for true centering */
//             box-sizing: border-box;
//             overflow-x: visible !important;
//             padding: 0 10px; /* Add padding for better spacing */
//         }

//         .elementor-nav-menu--main {
//             display: none;
//         }

//         .elementor-menu-toggle {
//             display: flex !important;
//         }

//         .sub-menu {
//             position: relative; /* Stack vertically in mobile view */
//             width: 100% !important;
//             max-width: 100% !important;
//             top: auto; /* Remove absolute positioning in mobile */
//             left: auto; /* Remove absolute positioning in mobile */
//             display: none; /* Initially hidden */
//         }

//         .menu-item-has-children.submenu-open > .sub-menu {
//             display: block; /* Show submenu in mobile */
//             max-height: none; /* Allow full height */
//         }

//         /* Center the menu items */
//         .elementor-nav-menu--dropdown a {
//             text-align: center; /* Center the text of menu items */
//             justify-content: center; /* Center flex items */
//         }
//     }

//     @media (min-width: 1025px) {
//         .elementor-nav-menu--dropdown {
//             display: none !important;
//         }

//         .sub-menu {
//             position: absolute;
//             min-width: 200px;
//             top: 100%; /* Position below parent item */
//             left: 0; /* Align with the parent item */
//         }

//         .menu-item-has-children:hover > .sub-menu {
//             display: block; /* Show submenu on hover for desktop */
//         }
//     }

//     /* Focus styles for accessibility */
//     .elementor-nav-menu a:focus {
//         outline: 2px solid #007bff;
//         outline-offset: 2px;
//     }

//     .elementor-menu-toggle:focus {
//         outline: 2px solid #007bff;
//         outline-offset: 2px;
//     }
// `;
// const styleSheet = document.createElement('style');
// styleSheet.textContent = additionalStyles;
// document.head.appendChild(styleSheet);

//     // Add initial aria attributes
//     if (menuToggle) {
//         menuToggle.setAttribute('aria-expanded', 'false');
//         menuToggle.setAttribute('aria-controls', 'menu-2-2abc8348');
//     }
// });







document.addEventListener('DOMContentLoaded', function() {
    // Menu elements
    const menuToggle = document.querySelector('.elementor-menu-toggle');
    const navContainer = document.querySelector('.elementor-nav-menu--dropdown.elementor-nav-menu__container');
    const mainNav = document.querySelector('.elementor-nav-menu--main');
    const menuItems = document.querySelectorAll('.elementor-nav-menu .menu-item-has-children');
    const subMenus = document.querySelectorAll('.sub-menu');

    // Breakpoint for mobile/tablet
    const tabletBreakpoint = 1024;

    // Initial setup
    if (navContainer) {
        navContainer.setAttribute('aria-hidden', 'true'); // Ensure initial state
    }

    // Toggle mobile menu
    if (menuToggle && navContainer) {
        menuToggle.addEventListener('click', function(e) {
            e.preventDefault();
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            
            // Toggle states
            this.classList.toggle('elementor-active');
            this.setAttribute('aria-expanded', !isExpanded);
            navContainer.classList.toggle('menu-open');
            
            // Update aria-hidden and height
            if (!isExpanded) {
                navContainer.setAttribute('aria-hidden', 'false');
                navContainer.style.maxHeight = `${navContainer.scrollHeight}px`;
            } else {
                navContainer.setAttribute('aria-hidden', 'true');
                navContainer.style.maxHeight = '0';
            }
        });
    }

    // Handle submenu toggle and navigation
    menuItems.forEach(item => {
        const link = item.querySelector('.elementor-item');
        const submenu = item.querySelector('.sub-menu');

        if (link && submenu) {
            link.addEventListener('click', function(e) {
                // Prevent default if it's a navigation link with a valid href
                if (e.target.getAttribute('href') && e.target.getAttribute('href') !== '#') {
                    return; // Allow navigation for direct links
                }

                e.preventDefault(); // Prevent default for submenu toggle
                item.classList.toggle('submenu-open');
                
                if (item.classList.contains('submenu-open')) {
                    submenu.style.maxHeight = `${submenu.scrollHeight}px`;
                } else {
                    submenu.style.maxHeight = '0';
                }
            });
        }
    });

    // Handle submenu item navigation
    subMenus.forEach(submenu => {
        submenu.querySelectorAll('a').forEach(subLink => {
            subLink.addEventListener('click', function(e) {
                // Allow navigation to the href if it exists
                const href = this.getAttribute('href');
                if (href && href !== '#') {
                    window.location.href = href; // Navigate to the page
                }
                // Close the submenu and main menu on mobile after clicking
                if (window.innerWidth <= tabletBreakpoint) {
                    const parentItem = this.closest('.menu-item-has-children');
                    if (parentItem) {
                        parentItem.classList.remove('submenu-open');
                        submenu.style.maxHeight = '0';
                    }
                    if (navContainer.classList.contains('menu-open')) {
                        navContainer.classList.remove('menu-open');
                        navContainer.style.maxHeight = '0';
                        menuToggle.classList.remove('elementor-active');
                        menuToggle.setAttribute('aria-expanded', 'false');
                    }
                }
            });
        });
    });

    // Handle window resize
    function handleResize() {
        const windowWidth = window.innerWidth;

        if (windowWidth > tabletBreakpoint) {
            if (menuToggle) {
                menuToggle.classList.remove('elementor-active');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
            if (navContainer) {
                navContainer.style.maxHeight = '';
                navContainer.classList.remove('menu-open');
                navContainer.setAttribute('aria-hidden', 'true');
            }
            subMenus.forEach(submenu => {
                submenu.style.maxHeight = '';
            });
            menuItems.forEach(item => {
                item.classList.remove('submenu-open');
            });
        }

        if (mainNav && navContainer) {
            if (windowWidth <= tabletBreakpoint) {
                mainNav.style.display = 'none';
                navContainer.style.display = 'block';
            } else {
                mainNav.style.display = 'block';
                navContainer.style.display = 'none';
            }
        }
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= tabletBreakpoint && navContainer && menuToggle) {
            if (!navContainer.contains(e.target) && !menuToggle.contains(e.target)) {
                menuToggle.classList.remove('elementor-active');
                menuToggle.setAttribute('aria-expanded', 'false');
                navContainer.classList.remove('menu-open');
                navContainer.style.maxHeight = '0';
                navContainer.setAttribute('aria-hidden', 'true');
                
                menuItems.forEach(item => {
                    item.classList.remove('submenu-open');
                    const submenu = item.querySelector('.sub-menu');
                    if (submenu) submenu.style.maxHeight = '0';
                });
            }
        }
    });

    // Keyboard accessibility
    if (menuToggle) {
        menuToggle.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    }

    // Focus management for dropdown items
    if (navContainer) {
        navContainer.querySelectorAll('a').forEach(link => {
            link.addEventListener('focus', function() {
                if (navContainer.getAttribute('aria-hidden') === 'true') {
                    navContainer.setAttribute('aria-hidden', 'false');
                    if (menuToggle) {
                        menuToggle.setAttribute('aria-expanded', 'true');
                        menuToggle.classList.add('elementor-active');
                    }
                    navContainer.classList.add('menu-open');
                    navContainer.style.maxHeight = `${navContainer.scrollHeight}px`;
                }
            });
        });
    }

    // Initialize and handle resize
    window.addEventListener('resize', handleResize);
    handleResize();

    
const additionalStyles = `
    /* Full-screen dropdown menu */
    .elementor-nav-menu--dropdown.elementor-nav-menu__container {
        width: 100vw; /* Full viewport width */
        height: 100vh; /* Full viewport height */
        position: fixed; /* Fix to the viewport */
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.9); /* Semi-transparent dark background */
        z-index: 9999; /* Ensure it overlays other content */
        display: flex;
        flex-direction: column;
        justify-content: center; /* Center items vertically */
        align-items: center; /* Center items horizontally */
        overflow-y: auto; /* Allow scrolling if content overflows */
        overflow-x: hidden;
        transform: translateX(100%); /* Initially off-screen to the right */
        transition: transform 0.5s ease-in-out; /* Smooth slide-in animation */
        box-sizing: border-box;
    }

    /* Show the menu when open */
    .elementor-nav-menu--dropdown.menu-open {
        transform: translateX(0); /* Slide in from the right */
        max-height: none !important; /* Override max-height for full-screen */
    }

    /* Style the menu items */
    .elementor-nav-menu--dropdown a {
        color: #fff; /* White text for contrast */
        font-size: 1.5rem; /* Larger font size for professionalism */
        font-weight: 500; /* Medium weight for readability */
        text-transform: uppercase; /* Uppercase for a modern look */
        padding: 15px 20px; /* Generous padding */
        text-align: center;
        transition: color 0.3s ease, transform 0.3s ease; /* Smooth hover effects */
    }

    /* Hover effect for menu items */
    .elementor-nav-menu--dropdown a:hover,
    .elementor-nav-menu--dropdown a:focus {
        color: #007bff; /* Blue on hover */
        transform: scale(1.05); /* Slight scale effect on hover */
    }

    /* Submenu styling */
    .sub-menu {
        width: auto; /* Auto width to fit content */
        max-width: 100%;
        box-sizing: border-box;
        display: none; /* Initially hidden */
        position: relative; /* Stack naturally in full-screen layout */
        background-color: transparent; /* No background to blend with the full-screen menu */
        text-align: center;
        margin-top: 10px; /* Space between parent and submenu */
    }

    .menu-item-has-children.submenu-open > .sub-menu {
        display: block; /* Show submenu when parent has submenu-open class */
        max-height: none; /* Allow full height when open */
    }

    /* Style submenu items */
    .sub-menu a {
        font-size: 1.2rem; /* Slightly smaller than main items */
        color: #ccc; /* Lighter color for submenu items */
        text-transform: none; /* Normal case for submenu items */
        padding: 10px 20px;
    }

    .sub-menu a:hover,
    .sub-menu a:focus {
        color: #fff; /* White on hover */
        background-color: rgba(255, 255, 255, 0.1); /* Subtle background on hover */
    }

    @media (max-width: 1024px) {
        .elementor-nav-menu--dropdown {
            display: block;
            width: 100vw !important;
            height: 100vh !important;
            position: fixed !important;
            top: 0;
            left: 0;
            background-color: rgba(0, 0, 0, 0.9);
            z-index: 9999;
            transform: translateX(100%);
            transition: transform 0.5s ease-in-out;
        }

        .elementor-nav-menu--main {
            display: none;
        }

        .elementor-menu-toggle {
            display: flex !important;
            z-index: 10000; /* Ensure toggle is above the menu */
        }

        .sub-menu {
            position: relative;
            width: auto !important;
            max-width: 100% !important;
            top: auto;
            left: auto;
            display: none;
        }

        .menu-item-has-children.submenu-open > .sub-menu {
            display: block;
            max-height: none;
        }
    }

    @media (min-width: 1025px) {
        .elementor-nav-menu--dropdown {
            display: none !important;
        }

        /* Desktop submenu behavior */
        .menu-item-has-children {
            position: relative;
        }

        .sub-menu {
            position: absolute;
            top: 100%;
            left: 0;
            min-width: 200px;
            background-color: #fff;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            display: none;
        }

        .sub-menu a {
            color: #333;
            font-size: 1rem;
            text-transform: none;
            padding: 10px 15px;
        }

        .sub-menu a:hover,
        .sub-menu a:focus {
            background-color: #f0f0f0;
            color: #007bff;
        }

        .menu-item-has-children:hover > .sub-menu {
            display: block;
        }
    }

    /* Focus styles for accessibility */
    .elementor-nav-menu a:focus {
        outline: 2px solid #007bff;
        outline-offset: 2px;
    }

    .elementor-menu-toggle:focus {
        outline: 2px solid #007bff;
        outline-offset: 2px;
    }
`;
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);


    // Add initial aria attributes
    if (menuToggle) {
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-controls', 'menu-2-2abc8348');
    }
});