const share = document.querySelector(".share");
const social = document.querySelector(".social");

share.addEventListener("click", () => {
    share.classList.toggle("active-share");
    social.classList.toggle("active-social");
});