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

//meme url image
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
console.log(filtersSelector.value);

filtersSelector.addEventListener("change", () => changeBackgroundBlendMode());

//Image filters sliders
//const imageBackgroundColor = document.getElementById("background-color-img");
//const imageFilters = document.getElementById("background-filters-options");
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
console.log(negativeImage.value);

//restart button
const restartButton = document.getElementById("restart-btn");
restartButton.addEventListener("click", () => restartFilters());

const restartFilters = () => {
    brightnessImage.value = 1;
    opacityImage.value = 1;
    contrastImage.value = 100;
    blurImage.value = 0;
    grayscale.value = 0;
    sepiaImage.value = 0;
    hueImage.value = 0;
    saturateImage.value = 100;
    negativeImage.value = 0;
    memeImage.style.filter = "none";
};

/*___________________________TEXT PANEL SETTINGS_______________________*/
//top text & bottom text meme
const topText = document.getElementById("top-text");
const bottomText = document.getElementById("bottom-text");
const topTextInput = document.getElementById("top-text-input");
const bottomTextInput = document.getElementById("bottom-text-input");

topTextInput.addEventListener("input", () => changeTopText());

const changeTopText = () => {
    let text = topTextInput.value;
    topText.innerHTML = `${text}`;
};

bottomTextInput.addEventListener("input", () => changeBottomText());

const changeBottomText = () => {
    let text = bottomTextInput.value;
    bottomText.innerHTML = `${text}`;
};
console.log(changeBottomText);

//hide top & bottom text
const topCheckbox = document.getElementById("top-text-checkbox");
console.log(topCheckbox);
const bottomCheckbox = document.getElementById("bottom-text-checkbox");
console.log(bottomCheckbox);
topCheckbox.addEventListener("change", () => hideTopText());
bottomCheckbox.addEventListener("change", () => hideBottomText());

const hideTopText = () => {
    if (topCheckbox.checked) {
        topText.classList.add("hidden");
    } else {
        topText.classList.remove("hidden");
    }
};
const hideBottomText = () => {
    if (bottomCheckbox.checked) {
        bottomText.classList.add("hidden");
    } else {
        bottomText.classList.remove("hidden");
    }
};
