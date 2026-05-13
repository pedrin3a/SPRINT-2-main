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

    scannerFrame.style.display = "none";

    cameraImage.style.filter = "none";

    cameraImage.src =
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop";



// DIGITALIZAR

scanBtn.addEventListener("click", () => {

    scannerFrame.style.display = "block";

    cameraImage.style.filter = "none";

    cameraImage.src =
    "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop";

});

// FILTRO

let filtro = false;

filterBtn.addEventListener("click", () => {

    scannerFrame.style.display = "none";

    if(filtro === false){

        cameraImage.style.filter = "sepia(100%)";

        filtro = true;
    }

    else{

        cameraImage.style.filter = "none";

        filtro = false;
    }

});

// GALERIA

galleryBtn.addEventListener("click", () => {

    const nome = prompt("Digite seu nome:");

    alert("Bem-vindo à galeria, " + nome + "!");

});