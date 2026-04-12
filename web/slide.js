const menuItems = document.querySelectorAll(".menu ul li");
const groups = document.querySelectorAll(".slideGroup");
const dotsContainer = document.querySelector(".dots");

let currentSlide = 0;
let currentGroup = null;

menuItems.forEach(item => {
  item.addEventListener("click", () => {
    const id = item.id;

    groups.forEach(g => {
      g.classList.remove("active");

      if (g.dataset.group === id) {
        g.classList.add("active");
        currentGroup = g;
        currentSlide = 0;
        updateSlides();
      }
    });
  });
});

function updateSlides() {
  if (!currentGroup) return;

  const slides = currentGroup.querySelectorAll(".slide");

  slides.forEach(s => s.classList.remove("active"));

  if (slides[currentSlide]) {
    slides[currentSlide].classList.add("active");
  }

  renderDots();
}

function renderDots() {
  if (!currentGroup) return;

  const slides = currentGroup.querySelectorAll(".slide");
  dotsContainer.innerHTML = "";

  slides.forEach((_, index) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");

    if (index === currentSlide) {
      dot.classList.add("active");
    }

    dot.addEventListener("click", () => {
      currentSlide = index;
      updateSlides();
    });

    dotsContainer.appendChild(dot);
  });
}

document.getElementById("next").onclick = () => {
  if (!currentGroup) return;

  const slides = currentGroup.querySelectorAll(".slide");

  if (currentSlide < slides.length - 1) {
    currentSlide++;
    updateSlides();
  }
};

document.getElementById("prev").onclick = () => {
  if (!currentGroup) return;

  if (currentSlide > 0) {
    currentSlide--;
    updateSlides();
  }
};

menuItems.forEach(item => {
  item.addEventListener("click", () => {
    const id = item.id;

    // odstraní active ze všech
    menuItems.forEach(i => i.classList.remove("active"));

    // nastaví active na kliknutý
    item.classList.add("active");

    // přepnutí slideru
    groups.forEach(g => {
      g.classList.remove("active");

      if (g.dataset.group === id) {
        g.classList.add("active");
        currentGroup = g;
        currentSlide = 0;
        updateSlides();
      }
    });
  });
});

document.getElementById("showPolSys").addEventListener("click", () => {
    document.getElementById("politcSys").classList.add("active");
});

document.getElementById("buttonClose").addEventListener("click", () => {
    document.getElementById("politcSys").classList.remove("active");
});