// Array of image URLs
const images = [
    "https://stax.organicthemes.com/wp-content/uploads/2020/02/post-01.jpg",
    "https://stax.organicthemes.com/wp-content/uploads/2020/02/post-02.jpg",
    "https://stax.organicthemes.com/wp-content/uploads/2020/02/post-03.jpg",
    "https://stax.organicthemes.com/wp-content/uploads/2020/02/post-04.jpg",
    "https://stax.organicthemes.com/wp-content/uploads/2020/02/post-05.jpg",
    "https://stax.organicthemes.com/wp-content/uploads/2020/02/post-06.jpg",
    "https://stax.organicthemes.com/wp-content/uploads/2020/02/designer-01.jpg"
];

// Array of captions
const captions = [
    "How To Sell Services As Products Online",
    "Our New Office Downtown",
    "Refreshing Our Brand",
    "Agency Launches A New VR Experience",
    "An Interview With Our Lead Designer",
    "12 Alternative Lifestyle Brands We Love",
    "The Power Of One"
];

const carousel = document.querySelector(".carousel");
const dotsContainer = document.querySelector(".dots-container");

let currentIndex = 0;

// Generate slides dynamically
images.forEach((img, index) => {
    let slide = document.createElement("div");
    slide.classList.add("slide");

    let imageElement = document.createElement("img");
    imageElement.src = img;

    let captionElement = document.createElement("div");
    captionElement.classList.add("caption");
    captionElement.textContent = captions[index];

    slide.appendChild(imageElement);
    slide.appendChild(captionElement);
    carousel.appendChild(slide);

    // Create navigation dots
    let dot = document.createElement("span");
    dot.classList.add("dot");
    dot.addEventListener("click", () => goToSlide(index));
    dotsContainer.appendChild(dot);
});

// Show the first slide
showSlide(currentIndex);

function showSlide(index) {
    let slides = document.querySelectorAll(".slide");
    let dots = document.querySelectorAll(".dot");

    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }

    slides.forEach((slide, i) => {
        slide.style.display = i === currentIndex ? "block" : "none";
    });

    dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === currentIndex);
    });
}

function changeSlide(step) {
    showSlide(currentIndex + step);
}

function goToSlide(index) {
    showSlide(index);
}

// Auto-slide every 5 seconds
setInterval(() => {
    changeSlide(1);
}, 10000);

// Reset auto-slide timer when user manually clicks
function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
}
