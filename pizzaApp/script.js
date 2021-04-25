let start = alert(`Be aware this game can be addicting  (especially for ages under 5 and over 70)`);



const dropZone = document.getElementById("dropZone");

console.log(dropZone);

let sideDiv = document.getElementsByClassName("pizzaIngredients")[0];

const dragStart = () => {
    console.log("start");
};

const dragEnd = () => {
    console.log("end");
};

const dragOver = (e) => {
    e.preventDefault(); //necessary for the drop, otherwise drop doesn't run
    console.log("over");
};

const dragEnter = (e) => {
    e.preventDefault();
    console.log("enter");
};

const dragLeave = () => {
    console.log("leave");
};

const dragDrop = (e) => {
    dropZone.append(curEl);
    console.log("dropped");
};

//drop zone event listeners
dropZone.addEventListener("dragover", dragOver);
dropZone.addEventListener("dragenter", dragEnter);
dropZone.addEventListener("dragleave", dragLeave);
dropZone.addEventListener("drop", dragDrop);

//creating pictures

const createPictures = () => {
    for (let i = 1; i < 10; i++) {
        let newImage = document.createElement("img");
        newImage.setAttribute("src", "images/" + [i] + ".jpg", newImage);
        newImage.classList.add("toppings");
        newImage.setAttribute("draggable", "true");
        newImage.addEventListener("dragstart", () => {
            newImage.classList.add("dragging");
            curEl = newImage;
            dragStart();
        });
        newImage.addEventListener("dragend", () => {
            newImage.classList.remove("dragging");
            dragEnd();
        });
        sideDiv.appendChild(newImage);
    }
}; //bit of an overcomplicated function, could split this up into two

createPictures();

//have to write two new functions, one for dragend, one for dragstart

//drag functions

const rollingPizza = document.getElementById("rollingPizza");
let pos = 0;

const frame = () => {
    if (pos == 350) {
        clearInterval(pizzaID);
    } else {
        pos++;

        rollingPizza.style.left = `
        $ { pos }
        px `;
    }
};

let pizzaID = setInterval(frame, 10);

//banner stuff

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

const fadeOut = () => {
    intervalID = setInterval(hide, 500);
};

fadeOut();
hide();

const makeBannerAppear = () => {
    banner.style.display = "block";
};

setTimeout(function() {
    makeBannerAppear();
}, 1000);