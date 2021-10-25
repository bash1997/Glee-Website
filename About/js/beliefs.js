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

// Belief Titles
const TitleTrinity = "The Trinity";
const TitleBible = "The Bible";
const TitleJesus = "Jesus";
const TitleSalvation = "Salvation";
const TitleSacraments = "Sacraments";
const TitleHolySpirit = "The Holy Spirit";
const TitleChurch = "The Church";

// Belief Info
const InfoTrinity = "Trinity info goes here.";
const InfoBible = "Bible info goes here.";
const InfoJesus = "Jesus info goes here.";
const InfoSalvation = "Salvation info goes here.";
const InfoSacraments = "Sacraments info goes here.";
const InfoHolySpirit = "Holy Spirit info goes here.";
const InfoChurch = "Church info goes here.";

// ---------------------------------------- //
// FUNCTIONS
// ---------------------------------------- //

function trinityClick() {swap(TitleTrinity,InfoTrinity);}

function bibleClick() {swap(TitleBible,InfoBible);}

function jesusClick() {swap(TitleJesus,InfoJesus);}

function salvationClick() {swap(TitleSalvation,InfoSalvation);}

function sacramentsClick() {swap(TitleSacraments,InfoSacraments);}

function holySpiritClick() {swap(TitleHolySpirit,InfoHolySpirit);}

function churchClick() {swap(TitleChurch,InfoChurch);}

// ---------------------------------------- //
// HELPER FUNCTIONS
// ---------------------------------------- //

function swap(value, info) {
    selectedValue.innerText = value;
    valueInfo.innerText = info;
 }
