// Toggle dark mode manually
const themeBtn = document.querySelector(".theme");
themeBtn.addEventListener("click", () => {
  const isDark = document.documentElement.classList.toggle("dark");
  localStorage.theme = isDark ? "dark" : "light";
});

// Event delegation
document.addEventListener("click", (e) => {
  const themeBtn = e.target.closest(".theme");
  if (!themeBtn) return;
  const isDark = document.documentElement.classList.toggle("dark");
  localStorage.theme = isDark ? "dark" : "light";
});

// Navbar
const burger = document.querySelector(".burger");
const navList = document.querySelector(".nav-list");
burger.addEventListener("click", () => {
  // if div doesn't have class "open" then add it, or if it does, then remove it
  const isOpen = navList.classList.toggle("is-open");
  burger.setAttribute("aria-expanded", isOpen);
});

// Close when link clicked
document.querySelectorAll(".nav-list a").forEach((link) => {
  link.addEventListener("click", () => {
    navList.classList.remove("is-open");
    burger.setAttribute("aria-expanded", false);
  });
});

// Escape key to close the navbar
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    navList.classList.remove("is-open");
    burger.setAttribute("aria-expanded", false);
  }
});

// Click outside to close the navbar
document.addEventListener("click", (e) => {
  if (!navList.contains(e.target) && !burger.contains(e.target)) {
    navList.classList.remove("is-open");
    burger.setAttribute("aria-expanded", false);
  }
});

// Style the active link
// const navLink = document.querySelectorAll(".nav-list a");
// navLink.forEach((link) => {
//   link.addEventListener("click", () => {
//     navLink.forEach((l) => l.classList.remove("is-active"));
//     link.classList.add("is-active");
//   });
// });
