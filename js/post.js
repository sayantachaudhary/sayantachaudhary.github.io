const hljsTheme = document.querySelector(".hljs-theme");

function updateHljsTheme() {
  if (!hljsTheme) return;

  if (document.documentElement.classList.contains("dark")) {
    hljsTheme.href =
      "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/styles/atom-one-dark.css";
  } else {
    hljsTheme.href =
      "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/styles/atom-one-light.css";
  }
}

updateHljsTheme();

// Lightbox effect
document.querySelectorAll(".post img").forEach((img) => {
  img.onclick = () => {
    img.classList.toggle("fullscreen");
    if (img.classList.contains("fullscreen")) {
      window.addEventListener(
        "scroll",
        () => img.classList.remove("fullscreen"),
        { once: true },
      );
    }
  };
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    document.querySelectorAll(".post img.fullscreen").forEach((img) => {
      img.classList.remove("fullscreen");
    });
  }
});
