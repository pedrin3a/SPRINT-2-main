const homeScreen = document.getElementById("homeScreen");
const cameraScreen = document.getElementById("cameraScreen");

const cameraApp = document.getElementById("cameraApp");
const backBtn = document.getElementById("backBtn");

const captureBtn = document.getElementById("captureBtn");
const scanBtn = document.getElementById("scanBtn");
const filterBtn = document.getElementById("filterBtn");
const galleryBtn = document.getElementById("galleryBtn");

const cameraImage = document.getElementById("cameraImage");
const slide = document.getElementById("slide");
const scannerFrame = document.querySelector(".scanner-frame");

// ABRIR CAMERA

cameraApp.addEventListener("click", () => {

    homeScreen.style.display = "none";
    cameraScreen.style.display = "flex";

});

// VOLTAR

backBtn.addEventListener("click", () => {

    cameraScreen.style.display = "none";
    homeScreen.style.display = "block";

});
