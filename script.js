/* =========================================
   MOBILE HAMBURGER MENU
   ========================================= */

// Get the hamburger button
const menuToggle = document.getElementById("menu-toggle");

// Get the navigation menu
const navLinks = document.getElementById("nav-links");


// Add a click event to the hamburger button
menuToggle.addEventListener("click", function () {

    // Show or hide the navigation menu
    navLinks.classList.toggle("active");

});


// Close the mobile menu after clicking a navigation link
const navigationItems = document.querySelectorAll(".nav-links a");

navigationItems.forEach(function (link) {

    link.addEventListener("click", function () {

        // Remove the active class
        // so the menu closes after selecting a section
        navLinks.classList.remove("active");

    });

});


/* =========================================
   DARK MODE TOGGLE
   ========================================= */

// Get the dark mode button and its icon
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = themeToggle.querySelector(".theme-icon");

// Update the icon and label to match the current theme
function updateThemeButton() {

    const isDark = document.documentElement.getAttribute("data-theme") === "dark";

    // Moon = switch to dark, Sun = switch to light
    themeIcon.textContent = isDark ? "☀️" : "🌙";

    themeToggle.setAttribute(
        "aria-label",
        isDark ? "Switch to light mode" : "Switch to dark mode"
    );

}

// Set the button correctly when the page first loads
updateThemeButton();

// Switch between light and dark when the button is clicked
themeToggle.addEventListener("click", function () {

    const isDark = document.documentElement.getAttribute("data-theme") === "dark";

    if (isDark) {
        // Turn dark mode OFF
        document.documentElement.removeAttribute("data-theme");
        localStorage.setItem("theme", "light");
    } else {
        // Turn dark mode ON
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
    }

    updateThemeButton();

});
