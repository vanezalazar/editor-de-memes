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
const colorName = document.getElementById("color-name");
backgroundColorImage.addEventListener("input", () => changeBackgroundColor());

const changeBackgroundColor = () => {
    let color = backgroundColorImage.value;
    colorName.innerHTML = `${color}`;
    memeImage.style.backgroundColor = backgroundColorImage.value;
};

//select background blend mode
const filtersSelector = document.getElementById("background-filters-options");
const changeBackgroundBlendMode = () => {
    memeImage.style.backgroundBlendMode = filtersSelector.value;
};
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

brightnessImage.addEventListener("input", () => filters());
opacityImage.addEventListener("input", () => filters());
contrastImage.addEventListener("input", () => filters());
blurImage.addEventListener("input", () => filters());
grayscale.addEventListener("input", () => filters());
sepiaImage.addEventListener("input", () => filters());
hueImage.addEventListener("input", () => filters());
saturateImage.addEventListener("input", () => filters());
negativeImage.addEventListener("input", () => filters());

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

const changeTopText = () => {
    let text = topTextInput.value;
    topText.innerHTML = `${text}`;
};

topTextInput.addEventListener("input", () => changeTopText());

const changeBottomText = () => {
    let text = bottomTextInput.value;
    bottomText.innerHTML = `${text}`;
};
bottomTextInput.addEventListener("input", () => changeBottomText());

//hide top & bottom text
const topCheckbox = document.getElementById("top-text-checkbox");
const bottomCheckbox = document.getElementById("bottom-text-checkbox");
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
//select font family
const fontSelect = document.getElementById("fonts");
const changeFontFamily = () => {
    topText.style.fontFamily = `${fontSelect.value}`;
    bottomText.style.fontFamily = `${fontSelect.value}`;
};
fontSelect.addEventListener("change", () => changeFontFamily());

//change font size
const inputFontSize = document.getElementById("input-font-size");

const changeFontSize = () => {
    topText.style.fontSize = `${inputFontSize.value}px`;
    bottomText.style.fontSize = `${inputFontSize.value}px`;
};
inputFontSize.addEventListener("input", () => changeFontSize());

// Text alignment buttons
const leftButton = document.getElementById("left-btn");
const centerButton = document.getElementById("center-btn");
const rightButton = document.getElementById("right-btn");

const textAlignLeft = () => {
    topText.style.textAlign = "left";
    bottomText.style.textAlign = "left";
};

leftButton.addEventListener("click", () => textAlignLeft());
const textAlignCenter = () => {
    topText.style.textAlign = "center";
    bottomText.style.textAlign = "center";
};
centerButton.addEventListener("click", () => textAlignCenter());

const textAlignRight = () => {
    topText.style.textAlign = "right";
    bottomText.style.textAlign = "right";
};
rightButton.addEventListener("click", () => textAlignRight());

//change text color
const textColorInput = document.getElementById("text-color-input");
const textColorName = document.getElementById("text-color-name");

const changeTextColor = () => {
    let color = textColorInput.value;
    textColorName.innerHTML = `${color}`;
    topText.style.color = `${textColorInput.value}`;
    bottomText.style.color = `${textColorInput.value}`;
};

textColorInput.addEventListener("input", () => changeTextColor());

//change text background color
const topTextBackground = document.getElementById("top-text-container");
const bottomTextBackground = document.getElementById("bottom-text-container");
const textBackgroundInput = document.getElementById("text-background-color");
const textBackgroundName = document.getElementById("text-background-name");

const changeTextBackground = () => {
    let color = textBackgroundInput.value;
    textBackgroundName.innerHTML = `${color}`;
    topTextBackground.style.backgroundColor = `${textBackgroundInput.value}`;
    bottomTextBackground.style.backgroundColor = `${textBackgroundInput.value}`;
};
textBackgroundInput.addEventListener("input", () => changeTextBackground());

//Text background transparent checkbox

const backgroundCheckbox = document.getElementById("background-checkbox");

const hideTextBackground = () => {
    if (backgroundCheckbox.checked) {
        topTextBackground.style.backgroundColor = "transparent";
        bottomTextBackground.style.backgroundColor = "transparent";
    } else {
        topTextBackground.style.backgroundColor = `${textBackgroundInput.value}`;
        bottomTextBackground.style.backgroundColor = `${textBackgroundInput.value}`;
    }
};

backgroundCheckbox.addEventListener("change", () => hideTextBackground());

//Text outline buttons
const outlineButtonNone = document.getElementById("text-outline-none");
const outlineButtonDark = document.getElementById("text-outline-dark");
const outlineButtonlight = document.getElementById("text-outline-light");

const hideTextOutline = () => {
    topText.classList.remove("light-outline");
    bottomText.classList.remove("light-outline");
    topText.classList.remove("dark-outline");
    bottomText.classList.remove("dark-outline");
};
outlineButtonNone.addEventListener("click", () => hideTextOutline());

const lightTextOutline = () => {
    topText.classList.add("light-outline");
    bottomText.classList.add("light-outline");
};

outlineButtonlight.addEventListener("click", () => lightTextOutline());
const darkTextOutline = () => {
    topText.classList.add("dark-outline");
    bottomText.classList.add("dark-outline");
};
outlineButtonDark.addEventListener("click", () => darkTextOutline());

//Text spacing input
const textSpacingInput = document.getElementById("spacing");

const changeTextSpacing = () => {
    topTextBackground.style.padding = `${textSpacingInput.value}px`;
    bottomTextBackground.style.padding = `${textSpacingInput.value}px`;
};
textSpacingInput.addEventListener("input", () => changeTextSpacing());

// Select text line height
const textLeadingInput = document.getElementById("leading");
const changeTextLeading = () => {
    topText.style.lineHeight = `${textLeadingInput.value}px`;
    bottomText.style.lineHeight = `${textLeadingInput.value}px`;
};
textLeadingInput.addEventListener("change", () => changeTextLeading());

/*___________________________DOWNLOAD MEME BUTTON _______________________*/

const downloadButton = document.getElementById("download-btn");
const meme = document.getElementById("meme-container");

downloadButton.addEventListener("click", () => downloadMeme());
const downloadMeme = () => {
    domtoimage.toBlob(meme).then(function (blob) {
        window.saveAs(blob, "my-meme.png");
    });
};
const transparentCheckbox = document.getElementById("transparentBackgroud");
const transparentBg = () => {
    topText.classList.toggle("transparent-top");
    bottomText.classList.toggle("transparent-bottom");
};
transparentCheckbox.addEventListener("click", transparentBg);
