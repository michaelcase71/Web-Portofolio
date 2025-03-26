
document.querySelectorAll(".menu a").forEach((anchor) => {
  anchor.addEventListener("click", function (event) {
    event.preventDefault();
    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(
    ".section, .section-card, .menu-container, .container"
  );
  const cards = document.querySelectorAll(".menu-card, .card");

  const observerOptions = { threshold: 0.2 };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      } else {
        entry.target.classList.remove("active");
      }
    });
  }, observerOptions);

  sections.forEach((section) => observer.observe(section));

  const cardObserverOptions = { threshold: 0.1 };

  const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active-scale");
      } else {
        entry.target.classList.remove("active-scale");
      }
    });
  }, cardObserverOptions);

  cards.forEach((card) => cardObserver.observe(card));
});

const slider = document.querySelector(".slider");
  const images = document.querySelectorAll(".img-item");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  let currentIndex = 0;
  const visibleImages = 5;
  const totalImages = images.length;
  const imgWidth = images[0].offsetWidth + -5;

  function updateSlider() {
      slider.style.transform = `translateX(${-currentIndex * imgWidth}px)`;
      prevBtn.disabled = currentIndex === 0;
      nextBtn.disabled = currentIndex >= totalImages - visibleImages;
  }

  prevBtn.addEventListener("click", () => {
      if (!prevBtn.disabled) {
          currentIndex--;
          updateSlider();
      }
  });

  nextBtn.addEventListener("click", () => {
      if (!nextBtn.disabled) {
          currentIndex++;
          updateSlider();
      }
  });

  images.forEach((img, index) => {
      img.addEventListener("click", () => {
          document.getElementById("image-modal").style.display = "flex";
          document.getElementById("modal-img").src = img.src;
      });
  });

  document.querySelector(".close").addEventListener("click", () => {
      document.getElementById("image-modal").style.display = "none";
  });
