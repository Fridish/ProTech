// footer buttons collapsable, WIP
let collapseButton = document.getElementsByClassName("footerButton");
let i;
//kollar om knappen är tryckt, är den det blir + = - och tvärtom. Allt content syns då även.
for (i = 0; i < collapseButton.length; i++) {
  collapseButton[i].addEventListener("click", function () {
    this.classList.toggle("visible");
    let buttonContent = this.nextElementSibling;
    if (buttonContent.style.maxHeight) {
      buttonContent.style.maxHeight = null;
    } else {
      buttonContent.style.maxHeight = buttonContent.scrollHeight + "px";
    }
  });
}

const carousel = new Glide(".glide", {
  type: "carousel",
  autoplay: 4000,
  breakpoints: {
    1440: {
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
