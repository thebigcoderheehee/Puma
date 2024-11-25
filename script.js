const texts = ["FREE SHIPPING ON ORDERS $60+", "SEE DETAILS", "FREE AND EASY RETURNS", "SEE DETAILS"];
let index = 0;
const flashingText = document.getElementById("flashing-text");

function flashText() {
  flashingText.style.opacity = "0";
  setTimeout(() => {
    flashingText.innerText = texts[index];
    flashingText.style.opacity = "1";
    index = (index + 1) % texts.length;
  }, 500);
}

setInterval(flashText, 4000);

// hover effect

document.querySelector('.modal-hover').addEventListener('mouseenter', function () {
  let myModal = new bootstrap.Modal(document.getElementById('modalExample'), {});
  myModal.show();
});