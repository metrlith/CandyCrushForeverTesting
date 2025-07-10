document.getElementById("menuToggle").addEventListener("click", () => {
  const sidebar = document.getElementById("sidebar");
  const toggle = document.getElementById("menuToggle");

  sidebar.classList.toggle("open");
  toggle.classList.toggle("hide");
});