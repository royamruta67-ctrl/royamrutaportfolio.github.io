function toggleMode() {
  const body = document.body;
  const btn = document.querySelector(".toggle-btn");

  body.classList.toggle("dark");
  body.classList.toggle("light");

  if (body.classList.contains("dark")) {
    btn.innerText = "☀ Light Mode";
  } else {
    btn.innerText = "🌙 Dark Mode";
  }
}
