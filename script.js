const fruitBtn = document.querySelector(".fruit-btn");
const vegBtn = document.querySelector(".veg-btn");
const incModal = document.querySelector(".incorrect-modal")
const corModal = document.querySelector(".correct-modal")
const incNextBtn = document.querySelector(".incNext")
const corNextBtn = document.querySelector(".corNext")

fruitBtn.addEventListener("click", () => {
    corModal.style.display = "flex";
    corNextBtn.addEventListener("click", () => {
        corModal.style.display = "none";
    })
})

vegBtn.addEventListener("click", () => {
    incModal.style.display = "flex";
    incNextBtn.addEventListener("click", () => {
        incModal.style.display = "none";
    })
})