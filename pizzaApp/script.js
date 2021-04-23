//Eitan will look for pictures, and loop through them, append them
const banner = document.getElementById("banner");
let bannerOpacity = 0;
let intervalID = 0;

const dropZone = document.getElementById("dropZone");
console.log(dropZone);

let sideDiv = document.getElementsByClassName("pizzaIngredients")[0];

dropZone.addEventListener("dragover", (e) => {
  e.preventDefault();
  const ingredient = document.querySelector(".dragging");
  dropZone.appendChild(ingredient);
  console.log("drag over");
});
const createPictures = () => {
  for (let i = 1; i < 10; i++) {
    let newImage = document.createElement("img");
    newImage.setAttribute("src", "images/" + [i] + ".jpg", newImage);
    newImage.classList.add("toppings");
    newImage.setAttribute("draggable", "true");
    newImage.addEventListener("dragstart", () => {
      newImage.classList.add("dragging");
      console.log(document.getElementsByClassName("dragging"));
      console.log("drag started");
    });
    newImage.addEventListener("dragend", () => {
      newImage.classList.remove("dragging");
      console.log("drag ended");
    });
    sideDiv.appendChild(newImage);
  }
};

createPictures();

//have to write two new functions, one for dragend, one for dragstart

//eitan ^^

const rollingPizza = document.getElementById("rollingPizza");
let pos = 0;

const frame = () => {
  if (pos == 350) {
    clearInterval(pizzaID);
  } else {
    pos++;

    rollingPizza.style.left = `${pos}px`;
  }
};

let pizzaID = setInterval(frame, 10);

const hide = () => {
  bannerOpacity = Number(
    window.getComputedStyle(banner).getPropertyValue("opacity")
  );
  if (bannerOpacity > 0) {
    bannerOpacity = bannerOpacity - 0.1;
    banner.style.opacity = bannerOpacity;
  } else if (bannerOpacity == 0) {
    {
      banner.style.display = "none";
    }
    clearInterval(intervalID);
  }
};

const show = () => {
  if (bannerOpacity == 0) {
    banner.style.display = "none";
  }
};
const fadeOut = () => {
  intervalID = setInterval(hide, 500);
};

fadeOut();
hide();

const makeBannerAppear = () => {
  banner.style.display = "block";
};

setTimeout(function () {
  makeBannerAppear();
}, 1000);
