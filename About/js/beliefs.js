// ---------------------------------------- //
// VARIABLES
// ---------------------------------------- //

// Buttons
var trinityButton = document.getElementById("trinity");
var bibleButton = document.getElementById("bible");
var jesusButton = document.getElementById("jesus");
var salvationButton = document.getElementById("salvation");
var sacramentsButton = document.getElementById("sacraments");
var holySpiritButton = document.getElementById("holy-spirit");
var churchButton = document.getElementById("church");

// Display Properties
var selectedImg = document.getElementById("display");
var selectedValue = document.getElementById("selected-belief");
var valueInfo = document.getElementById("belief-info");

// Image Sources
const ImgTrinity = "";
const ImgBible = "";
const ImgJesus = "";
const ImgSalvation = "";
const ImgSacraments = "";
const ImgHolySpirit = "";
const ImgChurch = "";

// Belief Titles
const TitleTrinity = "The Trinity";
const TitleBible = "The Bible";
const TitleJesus = "Jesus";
const TitleSalvation = "Salvation";
const TitleSacraments = "Sacraments";
const TitleHolySpirit = "The Holy Spirit";
const TitleChurch = "The Church";

// Belief Info
const InfoTrinity = "1";
const InfoBible = "2";
const InfoJesus = "3";
const InfoSalvation = "4";
const InfoSacraments = "5";
const InfoHolySpirit = "6";
const InfoChurch = "7";

// ---------------------------------------- //
// FUNCTIONS
// ---------------------------------------- //

function trinityClick() {
    swap(ImgTrinity,TitleTrinity,InfoTrinity);
}

function bibleClick() {
    swap(ImgBible,TitleBible,InfoBible);
}

function jesusClick() {
    swap(ImgJesus,TitleJesus,InfoJesus);
}

function salvationClick() {
    swap(ImgSalvation,TitleSalvation,InfoSalvation);
}

function sacramentsClick() {
    swap(ImgSacraments,TitleSacraments,InfoSacraments);
}

function holySpiritClick() {
    swap(ImgHolySpirit,TitleHolySpirit,InfoHolySpirit);
}

function churchClick() {
    swap(ImgChurch,TitleChurch,InfoChurch);
}

// ---------------------------------------- //
// HELPER FUNCTIONS
// ---------------------------------------- //

function swap(imgSrc, value, info) {
    selectedImg.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)) , url('${imgSrc}')`;
    selectedValue.innerText = value;
    valueInfo.innerText = info;
 }
