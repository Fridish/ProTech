// Script för att lösa språkalternativet i sidebaren i headern.

document
  .getElementById("btn-language-mobile")
  .addEventListener("click", function (event) {
    event.preventDefault(); // prevent the default action
    var languageOptions = document.getElementById("languages");
    if (languageOptions.style.display === "none") {
      languageOptions.style.display = "block";
    } else {
      languageOptions.style.display = "none";
    }
  });

const glide = new Glide(".glide", {
  type: "carousel",
  breakpoints: {
    1800: {
      perView: 3,
    },
    1300: {
      perView: 3,
    },
    1024: {
      autoplay: 3000,
      perView: 2,
      rewind: true,
    },
    768: {
      autoplay: 3000,
      perView: 1,
      rewind: true,
    },
  },
});

// Funktion för att ändra paginationsglidern till orange vid aktivt läge.

const glideBullets = document.querySelectorAll(".glidebullet");
glide.on("run", function () {
  const activeIndex = glide.index;

  glideBullets.forEach(function (bullet, index) {
    if (index === activeIndex) {
      bullet.classList.add("glidebullet-active");
    } else {
      bullet.classList.remove("glidebullet-active");
    }
  });
});

glide.mount();

//Footer Collapse börjar här

let collapseButton = document.getElementsByClassName("footerButton");

//expandera och kollapsa footer
function toggleVisibility() {
  this.classList.toggle("visible");
  let buttonContent = this.nextElementSibling;
  if (this.classList.contains("visible")) {
    buttonContent.style.maxHeight = buttonContent.scrollHeight + "px";
  } else {
    buttonContent.style.maxHeight = null;
  }
}
//Ser till att footerknappen inte funkar, utan allt content syns, när fönstret är större än 768px
function updateButtonListeners() {
  for (let i = 0; i < collapseButton.length; i++) {
    let buttonContent = collapseButton[i].nextElementSibling;
    if (window.innerWidth <= 768) {
      collapseButton[i].addEventListener("click", toggleVisibility);
      buttonContent.style.maxHeight = null;
    } else {
      collapseButton[i].removeEventListener("click", toggleVisibility);
      buttonContent.style.maxHeight = buttonContent.scrollHeight + "px";
    }
  }
}
updateButtonListeners();
//Ser till att footern uppdateras när fönstret ändrar storlek
window.addEventListener("resize", updateButtonListeners);

//info section swiper
const swiper = new Swiper("#swiper1", {
  loop: true,
  pagination: {
    el: "#swiper1 .swiper-pagination",
  },
  breakpoints: {
    645: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    950: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
  },
});
