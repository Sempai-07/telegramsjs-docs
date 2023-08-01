const themeToggle = document.getElementById("themeToggle");
const body = document.body;
const savedTheme = localStorage.getItem("theme");

function updatePrismTheme(theme) {
  const prismThemeLink = document.getElementById("style");
  prismThemeLink.href = `../css/prism-${theme}.css`;
}

if (savedTheme === "dark") {
  body.classList.add("dark-theme");
  updatePrismTheme("darcula");
} else {
  body.classList.add("light-theme");
  updatePrismTheme("vs");
}

document.addEventListener("DOMContentLoaded", function () {
  Prism.highlightAll();
});

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-theme");
  body.classList.toggle("light-theme");

  if (body.classList.contains("dark-theme")) {
    localStorage.setItem("theme", "dark");
    updatePrismTheme("darcula");
  } else {
    localStorage.setItem("theme", "light");
    updatePrismTheme("vs");
  }
});