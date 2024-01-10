// add hovered class to selected list item
let list = document.querySelectorAll(".navigation li");

function activeLink() {
  list.forEach((item) => {
    item.classList.remove("hovered");
  });
  this.classList.add("hovered");
}

list.forEach((item) => item.addEventListener("mouseover", activeLink));

// Menu Toggle
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let assets = document.querySelector(".assets");
let fancy = document.querySelector(".fancy-form");
let fancy1 = document.querySelector(".fancy-form1");
let main = document.querySelector(".main");

toggle.onclick = function () {
  navigation.classList.toggle("active");
  assets.classList.toggle("active");
  main.classList.toggle("active");
  fancy.classList.toggle("active");
  fancy1.classList.toggle("active");
};
