const openBtn = document.getElementById("openModal");
const overlay = document.getElementById("overlay");
const closeBtn = document.querySelector(".close");

openBtn.addEventListener("click", () => {
    overlay.classList.add("active");
});

closeBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeModal();
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
});

function closeModal() {
    overlay.classList.remove("active");
}
