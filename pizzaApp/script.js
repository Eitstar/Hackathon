//Eitan will look for pictures, and loop through them, append them
const banner = document.getElementById("banner");
console.log(banner);
let bannerOpacity = 0;
let intervalID = 0;

let sideDiv = document.getElementsByClassName("pizzaIngredients")[0];
console.log(sideDiv);
for (let i = 1; i < 10; i++) {
  //     let newImage = document.createElement('img');
  let newImage = document.createElement("img");
  newImage.setAttribute("src", "images/" + [i] + ".jpg", newImage);
  newImage.classList.add("toppings");
  sideDiv.appendChild(newImage);
  newImage.onclick = function (e) {};
}

//eitan ^^

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
      console.log("fired");
    }
    clearInterval(intervalID);
  }
};

const show = () => {
  if (bannerOpacity == 0) {
    banner.style.display = "none";
    console.log("fired");
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
