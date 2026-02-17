const helloText = "Hello World, I'm...";
const nameText = "Ochego Goddie";

let helloIndex = 0;
let nameIndex = 0;

const helloElement = document.getElementById("typing-hello");
const nameElement = document.getElementById("typing-name");

/* Role Changing */
const roles = [
  "Web Developer",
  "Problem Solver",
  "Android Developer",
  "Tech Enthusiast"
];

let roleIndex = 0;
const roleElement = document.getElementById("changing-role");

/* Typing Effect */
function typeHello() {
  if (helloIndex < helloText.length) {
    helloElement.innerHTML += helloText.charAt(helloIndex);
    helloIndex++;
    setTimeout(typeHello, 60);
  } else {
    setTimeout(typeName, 400);
  }
}

function typeName() {
  if (nameIndex < nameText.length) {
    nameElement.innerHTML += nameText.charAt(nameIndex);
    nameIndex++;
    setTimeout(typeName, 80);
  }
}

/* Role Animation */
function changeRole() {
  roleElement.textContent = roles[roleIndex];
  roleIndex = (roleIndex + 1) % roles.length;
}

setInterval(changeRole, 2000);

/* Start */
typeHello();
changeRole();
/* ================= NAVBAR HIDE ON SCROLL ================= */
let lastScrollY = window.scrollY;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > lastScrollY) {
    // Scrolling Down → Hide Navbar
    navbar.classList.add("hide");
  } else {
    // Scrolling Up → Show Navbar
    navbar.classList.remove("hide");
  }

  lastScrollY = window.scrollY;
});
