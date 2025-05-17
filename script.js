const menuBar = document.getElementById("bar");
const menuBarList = document.querySelector(".toggle-menu");
const exitBtn = document.getElementById("exit");

menuBar.addEventListener("click", () => {
    menuBarList.style.display = "flex";
});

exitBtn.addEventListener("click", () => {
    menuBarList.style.display = "none";
})