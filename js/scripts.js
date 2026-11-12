document.querySelector("#year").textContent = new Date().getFullYear();

document.addEventListener("DOMContentLoaded", function () {
  const filters = document.querySelectorAll(".filter");
  const carousels = document.querySelectorAll(".carousel-container");

  function filterCarousels(category) {
    const apply = () => {
      carousels.forEach((carousel) => {
        if (
          category === "all" ||
          carousel.getAttribute("data-category") === category
        ) {
          carousel.style.display = "block";
        } else {
          carousel.style.display = "none";
        }
      });
    };
    // Older Safari and Firefox have no view transitions: filter without the animation.
    if (document.startViewTransition) {
      document.startViewTransition(apply);
    } else {
      apply();
    }
  }

  filters.forEach((filter) => {
    filter.addEventListener("click", function () {
      filters.forEach((f) => {
        f.classList.toggle("active", f === this);
        f.setAttribute("aria-pressed", f === this);
      });

      const category = this.getAttribute("data-filter");
      filterCarousels(category);
    });
  });
});

document
  .querySelectorAll(".carousel-container")
  .forEach((carouselContainer) => {
    const carousel = carouselContainer.querySelector(".carousel");
    const prevButton = carouselContainer.querySelector(".prev");
    const nextButton = carouselContainer.querySelector(".next");
    const slides = carousel.querySelectorAll(".slide");
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
      // Off its first slide the title is clipped out of view. Unnamed, it stays in the card's snapshot instead of flying in from off-screen.
      const title = slides[0]?.querySelector('[id^="project-title"]');
      if (title) title.style.viewTransitionName = index ? "none" : "";
    }

    prevButton?.addEventListener("click", () => moveSlide(-1));
    nextButton?.addEventListener("click", () => moveSlide(1));

    // Cards without arrows (about and project pages) have nothing to swipe to.
    if (!nextButton) return;

    // Listen on the container: the link overlay sits on top of .carousel and takes the touches.
    carouselContainer.addEventListener("touchstart", (e) => {
      startX = e.touches[0].clientX;
    });

    carouselContainer.addEventListener("touchend", (e) => {
      let endX = e.changedTouches[0].clientX;
      let diff = startX - endX;
      if (diff > 50) {
        moveSlide(1);
      } else if (diff < -50) {
        moveSlide(-1);
      }
    });
  });
