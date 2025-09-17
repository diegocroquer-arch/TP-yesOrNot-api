const url = "https://yesno.wtf/api";

const giftImg = document.querySelector("img");
const text = document.querySelector("p");

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    giftImg.src = data.image;
    text.textContent = data.answer;
  });

const button = document.getElementById("random");

button.addEventListener("click", () => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      giftImg.src = data.image;
      text.textContent = data.answer;
    });
});

const button_yes = document.getElementById("yes");
const button_no = document.getElementById("no");
const button_maybe = document.getElementById("maybe");

button_yes.addEventListener("click", () => {
  fetch(url + "?force=yes")
    .then((response) => response.json())
    .then((data) => {
      giftImg.src = data.image;
      text.textContent = data.answer;
    });
});
button_no.addEventListener("click", () => {
  fetch(url + "?force=no")
    .then((response) => response.json())
    .then((data) => {
      giftImg.src = data.image;
      text.textContent = data.answer;
    });
});
button_maybe.addEventListener("click", () => {
  fetch(url + "?force=no")
    .then((response) => response.json())
    .then((data) => {
      giftImg.src = data.image;
      text.textContent = data.answer;
    });
});
