const cards = document.querySelectorAll(".card");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

let currentIndex = 0;

/* Scroll to Gallery */
function scrollToGallery() {
    document.getElementById("gallery-section")
        .scrollIntoView({ behavior: "smooth" });
}

/* Open Lightbox */
function openLightbox(index) {
    currentIndex = index;
    lightbox.style.display = "flex";
    lightboxImg.src = cards[index].querySelector("img").src;
}

/* Close Lightbox */
function closeLightbox() {
    lightbox.style.display = "none";
}

/* Next */
function nextImage() {
    currentIndex = (currentIndex + 1) % cards.length;
    lightboxImg.src = cards[currentIndex].querySelector("img").src;
}

/* Previous */
function prevImage() {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    lightboxImg.src = cards[currentIndex].querySelector("img").src;
}

/* Filters */
function filterImages(category) {
    cards.forEach(card => {
        if (category === "all" || card.classList.contains(category)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });

    document.querySelectorAll(".filters button")
        .forEach(btn => btn.classList.remove("active"));

    event.target.classList.add("active");
}

/* Keyboard Support */
document.addEventListener("keydown", e => {
    if (lightbox.style.display === "flex") {
        if (e.key === "ArrowRight") nextImage();
        if (e.key === "ArrowLeft") prevImage();
        if (e.key === "Escape") closeLightbox();
    }
});
