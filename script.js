const menuToggle = document.getElementById("menuToggle");
const sidebar = document.getElementById("sidebar");
const board = document.getElementById("board");
const editPanel = document.getElementById("editPanel");

menuToggle.addEventListener("click", () => {
  const isOpen = sidebar.classList.toggle("open");
  menuToggle.classList.toggle("hide", isOpen);
});

document.addEventListener("click", (event) => {
  const isClickInsideSidebar = sidebar.contains(event.target);
  const isClickOnToggle = menuToggle.contains(event.target);
  const isClickOnBoard = board.contains(event.target);
  const isClickOnPanel = editPanel.contains(event.target);

  if (!isClickInsideSidebar && !isClickOnToggle && !isClickOnBoard && !isClickOnPanel) {
    sidebar.classList.remove("open");
    menuToggle.classList.remove("hide");
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    sidebar.classList.remove("open");
    menuToggle.classList.remove("hide");
  }
});