let marker = document.querySelector("#indicator");
let nav = document.querySelector("nav");
let item = document.querySelectorAll("nav a");

nav.onclick = function () {
  marker.classList.toggle("change");
};

function indicator(e) {
  marker.style.left = e.offsetLeft + "px";
  marker.style.width = e.offsetWidth + "px";
  marker.style.display = "block";
  marker.style.filter = "hue-rotate(" + Math.random() * 360 + "deg)";
}

item.forEach((link) => {
  link.addEventListener("click", (e) => {
    indicator(e.target);
  });
});

function addActiveClass() {
  item.forEach((i) => i.classList.remove("active"));
  this.classList.add("active");
}

item.forEach((i) => i.addEventListener("click", addActiveClass));

let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let box = document.querySelector(".box");

let degrees = 0;

prev.addEventListener("click", function () {
  degrees += 60;
  box.style = `transform: perspective(1000px) rotateY(${degrees}deg);`;
});

next.addEventListener("click", function () {
  degrees -= 60;
  box.style = `transform: perspective(1000px) rotateY(${degrees}deg);`;
});



VanillaTilt.init(document.querySelectorAll(".slide")),
  {
    max: 25,
    speed: 41,
  };
