// Likes
const SUPABASE_URL = "https://odwkgteyeycunqqrukkh.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9kd2tndGV5ZXljdW5xcXJ1a2toIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQzNzM1MTMsImV4cCI6MjA4OTk0OTUxM30.XvzWKgakd7S5kfCzJm0RC_80vWwVA2vkLZgzvYPHKMg";

async function getLikes(pid) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/likes?post_id=eq.${pid}`, {
    headers: { apikey: SUPABASE_KEY },
  });
  const data = await res.json();
  return data[0]?.count ?? 0;
}

async function addLike(pid) {
  await fetch(`${SUPABASE_URL}/rest/v1/rpc/increment_like`, {
    method: "POST",
    headers: {
      apikey: SUPABASE_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ post_id: pid }),
  });
}

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
