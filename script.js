const BASE_URL = "https://yesno.wtf/api";

const giftImg = document.querySelector("img");
const text = document.querySelector("p");

function getData(force) {
  const url = force ? `${BASE_URL}?force=${force}` : BASE_URL;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      giftImg.src = data.image;
      text.textContent = data.answer;
    });
}

const button = document.getElementById("random");

getData();
button.addEventListener("click", () => getData("random"));

const button_yes = document.getElementById("yes");
const button_no = document.getElementById("no");
const button_maybe = document.getElementById("maybe");

button_yes.addEventListener("click", () => getData("yes"));

button_no.addEventListener("click", () => getData("no"));

button_maybe.addEventListener("click", () => getData("maybe"));
