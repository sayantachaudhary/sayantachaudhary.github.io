const hljsTheme = document.querySelector(".hljs-theme");

function updateHljsTheme() {
  if (document.documentElement.classList.contains("dark")) {
    hljsTheme.href =
      "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/styles/atom-one-dark.css";
  } else {
    hljsTheme.href =
      "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/styles/atom-one-light.css";
  }
}

updateHljsTheme();

document.querySelector(".theme").addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
  updateHljsTheme();
});
