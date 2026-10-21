const slides = document.getElementById("slides");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let currentIndex = 0;

function moveSlider() {
    const cards = slides.querySelectorAll(".slide");

    if (cards.length === 0) return;

    const gap = parseFloat(getComputedStyle(slides).gap) || 0;
    const cardWidth = cards[0].getBoundingClientRect().width;
    const step = cardWidth + gap;

    const visibleWidth = slides.clientWidth;

    const visibleCards = Math.max(
        1,
        Math.floor((visibleWidth + gap) / step)
    );

    const maxIndex = Math.max(
        0,
        cards.length - visibleCards
    );

    currentIndex = Math.max(
        0,
        Math.min(currentIndex, maxIndex)
    );

    slides.style.transform =
        `translateX(-${currentIndex * step}px)`;
}

next.addEventListener("click", function () {
    const cards = slides.querySelectorAll(".slide");

    const gap = parseFloat(getComputedStyle(slides).gap) || 0;
    const step = cards[0].getBoundingClientRect().width + gap;

    const visibleCards = Math.max(
        1,
        Math.floor((slides.clientWidth + gap) / step)
    );

    const maxIndex = Math.max(
        0,
        cards.length - visibleCards
    );

    currentIndex = currentIndex >= maxIndex
        ? 0
        : currentIndex + 1;

    moveSlider();
});

prev.addEventListener("click", function () {
    const cards = slides.querySelectorAll(".slide");

    const gap = parseFloat(getComputedStyle(slides).gap) || 0;
    const step = cards[0].getBoundingClientRect().width + gap;

    const visibleCards = Math.max(
        1,
        Math.floor((slides.clientWidth + gap) / step)
    );

    const maxIndex = Math.max(
        0,
        cards.length - visibleCards
    );

    currentIndex = currentIndex <= 0
        ? maxIndex
        : currentIndex - 1;

    moveSlider();
});

window.addEventListener("resize", moveSlider);

moveSlider();
