document.querySelector("#year").innerHTML = new Date().getFullYear();

document.addEventListener("DOMContentLoaded", function () {
    const filters = document.querySelectorAll(".filter");
    const carousels = document.querySelectorAll(".carousel-container");

    function filterCarousels(category) {
        document.startViewTransition(() => {
            carousels.forEach(carousel => {
                if (category === "all" || carousel.getAttribute("data-category") === category) {
                    carousel.style.display = "block";
                } else {
                    carousel.style.display = "none";
                }
            });
        });
    }

    filters.forEach(filter => {
        filter.addEventListener("click", function () {
            // Remove active class from all filters
            filters.forEach(f => f.classList.remove("active"));
            this.classList.add("active");

            const category = this.getAttribute("data-filter");
            filterCarousels(category);
        });
    });

    // Show all carousels initially
    filterCarousels("all");
});

document.querySelectorAll('.carousel-container').forEach(carouselContainer => {
    const carousel = carouselContainer.querySelector('.carousel');
    const prevButton = carouselContainer.querySelector('.prev');
    const nextButton = carouselContainer.querySelector('.next');
    // const progressBar = carouselContainer.querySelector('.progress');
    const slides = carousel.querySelectorAll('.slide');
    let index = 0;
    let startX = 0;

    function moveSlide(step) {
        index += step;
        if (index < 0) {
            index = slides.length - 1;
        } else if (index >= slides.length) {
            index = 0;
        }
        carousel.style.transform = `translateX(${-index * 100}%)`;
        // updateProgress();
    }

    // function updateProgress() {
    //     let progressWidth = ((index + 1) / slides.length) * 100;
    //     progressBar.style.width = `${progressWidth}%`;
    // }

    prevButton.addEventListener('click', () => moveSlide(-1));
    nextButton.addEventListener('click', () => moveSlide(1));

    carousel.addEventListener("touchstart", (e) => {
        startX = e.touches[0].clientX;
    });

    carousel.addEventListener("touchend", (e) => {
        let endX = e.changedTouches[0].clientX;
        let diff = startX - endX;
        if (diff > 50) {
            moveSlide(1);
        } else if (diff < -50) {
            moveSlide(-1);
        }
    });

    // updateProgress(); // Initialize the progress bar
});