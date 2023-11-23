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

const carousel = new Glide(".glide", {
  type: "carousel",
  autoplay: 4000,
  breakpoints: {
    1800: {
      perView: 4,
    },
    1440: {
      perView: 4,
    },
    1300: {
      perView: 3,
    },
    1024: {
      perView: 2,
    },
    768: {
      perView: 1,
    },
  },
});

carousel.mount();

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
//Ser till att knappen inte funkar, utan allt content syns, när fönstret är större än 768px
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
