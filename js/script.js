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
    "https://st.depositphotos.com/1777193/3260/i/950/depositphotos_32603753-stock-photo-documents-on-the-table.jpg";

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

// MINI GALERIA

const images = [

    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1493246318656-5bfd4cfb29b5?q=80&w=1200&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"

];

let current = 0;

setInterval(() => {

    current++;

    if(current >= images.length){

        current = 0;
    }

    slide.src = images[current];

}, 3000);