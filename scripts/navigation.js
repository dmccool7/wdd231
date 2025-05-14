const navigation = document.querySelector(".navigation");
const hamburger = document.querySelector("#hamburger");

hamburger.addEventListener("click", () => {
    navigation.classList.toggle("show");
    hamburger.classList.toggle("show");
});