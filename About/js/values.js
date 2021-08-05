// ---------------------------------------- //
// VARIABLES
// ---------------------------------------- //

// Buttons
var partnershipsButton = document.getElementById("partnerships");
var creativityButton = document.getElementById("creativity");
var generosityButton = document.getElementById("generosity");
var excellenceButton = document.getElementById("excellence");
var friendlinessButton = document.getElementById("friendliness");

// Display Properties
var selectedImg = document.getElementById("main-img");
var selectedValue = document.getElementById("selected-value");
var valueInfo = document.getElementById("value-info");

// ---------------------------------------- //
// FUNCTIONS
// ---------------------------------------- //

function partnershipsClick() {
   console.log("partnership button works");
   selectedImg.src = "./Img/values/partnerships.jpg";
   selectedValue.innerText = "Partnerships";
   valueInfo.innerText = "Glee Church values its many partnerships with the community."
}

function creativityClick() {
    console.log("creativity button works");
    selectedImg.src = "./Img/values/creativity.jpg";
    selectedValue.innerText = "Creativity";
    valueInfo.innerText = "We at Glee Church strive to be imaginative in all we do."
}

function generosityClick() {
    console.log("generosity button works");
}

function excellenceClick() {
    console.log("excellence button works");
}

function friendlinessClick() {
    console.log("friendliness button works");
}
