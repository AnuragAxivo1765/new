
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

console.log("Menu buttons found:", {
    openButton: !!menuOpenButton,
    closeButton: !!menuCloseButton
});

if (menuOpenButton && menuCloseButton) {
    menuOpenButton.addEventListener("click", () => {
        console.log("Opening menu");
        document.body.classList.add("show-mobile-menu");
    });
    menuCloseButton.addEventListener("click", () => {
        console.log("Closing menu");
        document.body.classList.remove("show-mobile-menu");
    });
} else {
    console.error("Menu buttons not found!");
}
