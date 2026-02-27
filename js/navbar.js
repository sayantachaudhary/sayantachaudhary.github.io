document.documentElement.classList.toggle(
  "dark",
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches),
);

const themeBtn = document.querySelector(".theme");
themeBtn.addEventListener("click", () => {
  const isDark = document.documentElement.classList.toggle("dark");
  localStorage.theme = isDark ? "dark" : "light";
});

// ---------------------------------------------------------

// function openSidebar() {
//   sidebar.classList.add("open");
//   burger.textContent = "x";
//   document.body.style.overflow = "hidden"; // Prevent scrolling when the sidebar is open
// }
//
// function closeSidebar() {
//   sidebar.classList.remove("open");
//   burger.textContent = "=";
//   document.body.style.removeProperty("overflow"); // document.body.style.overflow = "";
// }
//
// burger.addEventListener("click", () => {
//   sidebar.classList.contains("open") ? closeSidebar() : openSidebar();
// });

const burger = document.querySelector(".burger");
const navList = document.querySelector(".nav-list");

burger.addEventListener("click", () => {
  // if div doesn't have class "open" then add it, or if it does, then remove it
  const isOpen = navList.classList.toggle("open");
  burger.setAttribute("aria-expanded", isOpen);
});

// Close when link clicked
document.querySelectorAll(".nav-list a").forEach((link) => {
  link.addEventListener("click", () => {
    navList.classList.remove("open");
    burger.setAttribute("aria-expanded", false);
  });
});

// Escape key to close the sidebar
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    navList.classList.remove("open");
    burger.setAttribute("aria-expanded", false);
  }
});
