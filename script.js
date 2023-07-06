/*___________________________HIDE ASIDES_______________________*/
//Guardo el elemento html en una variable llamandolo por id
//Header buttons
const imageButton = document.getElementById("image-panel-btn");
const textButton = document.getElementById("text-panel-btn");
const modeButton = document.getElementById("mode-btn");

//Asides
const imagePanel = document.getElementById("image-panel");
const textPanel = document.getElementById("text-panel");
//const bothAsides = document.getElementsByClassName("aside");

//Capturo el evento y lo paso a la funcion
//Hide aside events:
imageButton.addEventListener("click", () => hideTextPanel());
textButton.addEventListener("click", () => hideImagePanel());

//Hide aside functions:
const hideImagePanel = () => {
    imagePanel.classList.add("hidden");
    textPanel.classList.remove("hidden");
};

const hideTextPanel = () => {
    textPanel.classList.add("hidden");
    imagePanel.classList.remove("hidden");
};
