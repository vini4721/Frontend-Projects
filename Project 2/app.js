const inputs = document.querySelectorAll("input");
const container = document.querySelector(".content-container");

inputs.forEach((input) => {
    input.addEventListener("click", () => {
        container.style.backgroundColor = input.value;
    })
})