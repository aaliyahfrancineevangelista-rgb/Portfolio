const root = document.documentElement;                      // <html> element (holds data-theme)
const menuToggle = document.getElementById("menu-toggle");  // hamburger button
const navLinks = document.getElementById("nav-links");      // navigation list
const themeToggle = document.getElementById("theme-toggle"); // dark/light button
const themeIcon = themeToggle.querySelector(".theme-icon"); // moon/sun icon

// Hamburger menu 
// Shows or hides the navigation on mobile screens.
function toggleMenu() {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", isOpen);          // keep screen readers in sync
  menuToggle.textContent = isOpen ? "✕" : "☰";
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
}
menuToggle.addEventListener("click", toggleMenu);

// Close the menu after a link is clicked.
navLinks.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    if (navLinks.classList.contains("open")) {
      toggleMenu();
    }
  });
});

// Dark / light mode 
// Applies the chosen theme and updates the button icon and label.
function applyTheme(theme) {
  const isDark = theme === "dark";
  if (isDark) {
    root.setAttribute("data-theme", "dark");
  } else {
    root.removeAttribute("data-theme");
  }
  themeIcon.textContent = isDark ? "☀️" : "🌙";
  themeToggle.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
}

// Switches the theme and saves the choice in localStorage.
function toggleTheme() {
  const newTheme = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  applyTheme(newTheme);
  localStorage.setItem("theme", newTheme);
}
themeToggle.addEventListener("click", toggleTheme);

// On page load
const savedTheme = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
applyTheme(savedTheme || (prefersDark ? "dark" : "light"));