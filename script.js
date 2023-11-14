// footer buttons collapsable, WIP
let collapseButton = document.getElementsByClassName("footerButton");
let i;
let plusMinus = (document.getElementById("plus").innerText = "");
for (i = 0; i < collapseButton.length; i++) {
  collapseButton[i].addEventListener("click", function () {
    this.classList.toggle("visible");
    let buttonContent = this.nextElementSibling;
    if (buttonContent.style.maxHeight) {
      buttonContent.style.maxHeight = null;
    } else {
      buttonContent.style.maxHeight = buttonContent.scrollHeight + "px";
      plusMinus = "-";
    }
  });
}
