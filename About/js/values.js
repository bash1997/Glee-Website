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
var selectedImg = document.getElementById("bullet-display");
var selectedValue = document.getElementById("selected-value");
var valueInfo = document.getElementById("value-info");

// Image Sources
const ImgPartnerships = "./Img/values/partnerships.jpg";
const ImgCreativity = "./Img/values/creativity.jpg";
const ImgGenerosity = "./Img/values/generosity.jpg";
const ImgExcellence = "./Img/values/excellence.jpg";
const ImgFriendliness = "./Img/values/friendliness.jpg";

// Value Titles
const TitlePartnerships = "Partnerships";
const TitleCreativity = "Creativity";
const TitleGenerosity = "Generosity";
const TitleExcellence = "Excellence";
const TitleFriendliness = "Friendliness";

// Value Info
const InfoPartnerships = "Glee Church values its many partnerships with the community.";
const InfoCreativity = "We at Glee Church strive to be imaginative in all we do.";
const InfoGenerosity = "Giving back to our community is what Glee Church strives to achieve.";
const InfoExcellence = "We at Glee Church seek to be the best version of ourselves.";
const InfoFriendliness = "Friendship is what makes the Glee Church Community.";

// ---------------------------------------- //
// BUTTON FUNCTIONS
// ---------------------------------------- //

// Partnerships
// -----------------
function partnershipsClick() { swap(ImgPartnerships, TitlePartnerships, InfoPartnerships); }

// Creativity
// -----------------
function creativityClick() { swap(ImgCreativity, TitleCreativity, InfoCreativity); }

// Generosity
// -----------------
function generosityClick() { swap(ImgGenerosity, TitleGenerosity, InfoGenerosity); }

// Excellence
// -----------------
function excellenceClick() { swap(ImgExcellence, TitleExcellence, InfoExcellence); }

// Friendliness
// -----------------
function friendlinessClick() { swap(ImgFriendliness, TitleFriendliness, InfoFriendliness); }

// ---------------------------------------- //
// HELPER FUNCTIONS
// ---------------------------------------- //

function swap(imgSrc, value, info) {
   selectedImg.style.backgroundImage = linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)); // <------ Fix Error Here
   selectedValue.innerText = value;
   valueInfo.innerText = info;
}
