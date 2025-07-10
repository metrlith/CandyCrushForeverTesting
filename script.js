const menuToggle = document.getElementById("menuToggle");
const sidebar = document.getElementById("sidebar");
const board = document.getElementById("board");
const editPanel = document.getElementById("editPanel");

menuToggle.addEventListener("click", () => {
  sidebar.classList.add("open");
  menuToggle.classList.add("hide");
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