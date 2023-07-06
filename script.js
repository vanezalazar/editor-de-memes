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

/*___________________________CHANGE MODE_______________________*/
//Guardo el elemento body para cambiarle el modo a claro
const body = document.getElementById("body");
//change mode event
modeButton.addEventListener("click", () => changeMode());

//change mode function
//agrego transición al cambiar el modo
const changeMode = () => {
    body.classList.toggle("light-body");
    body.classList.add("transition");
    if (body.classList.contains("light-body")) {
        modeButton.innerHTML = `<i class="fa-solid fa-moon"></i>Modo oscuro`;
    } else {
        modeButton.innerHTML = `<i class="fa-regular fa-sun"></i>Modo claro`;
    }
};
