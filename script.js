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

/*___________________________IMAGE PANEL SETTINGS_______________________*/

//MEME URL IMAGE
const urlInput = document.getElementById("image-url");
const memeImage = document.getElementById("meme-img-container");

urlInput.addEventListener("input", () => changeBackground());

const changeBackground = () => {
    memeImage.style.backgroundImage = `url('${urlInput.value}')`;
};

//change image background color & color name
const backgroundColorImage = document.getElementById("background-color-img");
console.log(backgroundColorImage);
const colorName = document.getElementById("color-name");
console.log(colorName);

backgroundColorImage.addEventListener("input", () => changeBackgroundColor());

const changeBackgroundColor = () => {
    let color = backgroundColorImage.value;
    colorName.innerHTML = `${color}`;
    memeImage.style.backgroundColor = backgroundColorImage.value;
    console.log(backgroundColorImage.value);
};

//select background blend mode
const filtersSelector = document.getElementById("background-filters-options");
console.log(filtersSelector);

const changeBackgroundBlendMode = () => {
    memeImage.style.backgroundBlendMode = filtersSelector.value;
};

filtersSelector.addEventListener("change", () => changeBackgroundBlendMode());

//Image filters sliders
const imageBackgroundColor = document.getElementById("background-color-img");
const imageFilters = document.getElementById("background-filters-options");
const brightnessImage = document.getElementById("brightness");
const opacityImage = document.getElementById("opacity");
const contrastImage = document.getElementById("contrast");
const blurImage = document.getElementById("blur");
const grayscale = document.getElementById("grayscale");
const sepiaImage = document.getElementById("sepia");
const hueImage = document.getElementById("hue");
const saturateImage = document.getElementById("saturate");
const negativeImage = document.getElementById("negative");

const filters = () => {
    memeImage.style.filter = `brightness(${brightnessImage.value}) opacity(${opacityImage.value}) contrast(${contrastImage.value}%) blur(${blurImage.value}px) grayscale(${grayscale.value}%) sepia(${sepiaImage.value}%) hue-rotate(${hueImage.value}deg) saturate(${saturateImage.value}%) invert(${negativeImage.value})`;
};

console.log(filters);
brightnessImage.addEventListener("input", () => filters());
opacityImage.addEventListener("input", () => filters());
contrastImage.addEventListener("input", () => filters());
blurImage.addEventListener("input", () => filters());
grayscale.addEventListener("input", () => filters());
sepiaImage.addEventListener("input", () => filters());
hueImage.addEventListener("input", () => filters());
saturateImage.addEventListener("input", () => filters());
negativeImage.addEventListener("input", () => filters());
