
let darkMode = localStorage.getItem("darkMode") === "true";

function applyTheme() {
  if (darkMode) {
    document.body.classList.add("dark-mode");
    document.getElementById("theme-toggle").innerText = "☀️";
  } else {
    document.body.classList.remove("dark-mode");
    document.getElementById("theme-toggle").innerText = "🌙";
  }
}

document.getElementById("theme-toggle").addEventListener("click", () => {
  darkMode = !darkMode;
  localStorage.setItem("darkMode", darkMode);
  applyTheme();
});


applyTheme();
