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
var selectedImg = document.getElementById("display");
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
const InfoPartnerships = "We Love Community.\n We don’t allow our ego or personal agenda to get in the way of doing what’s best for our community. We are committed to each other and always willing to form new partnerships or help volunteer when that’s what’s needed for success. Partnerships are always worth the effort. We win and lose as a community.";
const InfoCreativity = "We Aim to be Relevant.\n We demonstrate a relentless solution focus. Together we share our experiences and differences to learn and think more efficiently. We aim to remain relevant by sharing an unconventional approach to minister the Gospel of Jesus Christ!";
const InfoGenerosity = "We inspire to Give More.\n We make no excuses for why something can't be done! We strongly believe where there is a will there is away. We regularly seek opportunities to assist those in need, to give to our church and community. Demonstrating a tangible approach to giving back, we put the needs of others ahead of our own.";
const InfoExcellence = "We Purse Excellence.\n Everything speaks. Details matter. We hold ourselves to the high standard to produce excellence in everything we do. First impressions only happen once. Every interaction that people have with Glee Church has the opportunity to influence how they relate to God. The goal is to get things “right”, not simply to get things “done”. For us, that means sweating the small stuff in pursuit of excellence";
const InfoFriendliness = "We Choose to be Happy.\n Smile. Laugh every day. While our passion for excellence is real, sometimes that’s easy and sometimes it’s hard. We consider the work we do a “privilege” and not an “obligation”. First impressions only happen once. No matter the role we play, we choose to show up with the right spirit and right attitude to be an enjoyable breath of life.";

// ---------------------------------------- //
// BUTTON FUNCTIONS
// ---------------------------------------- //

// Partnerships
// -----------------
function partnershipsClick() { swap(ImgPartnerships, TitlePartnerships, InfoPartnerships); }

// Creativity
// -----------------
function creativityClick() { 
   swap(ImgCreativity, TitleCreativity, InfoCreativity); 
   // colorChange(creativityButton);
}

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
   selectedImg.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)) , url('${imgSrc}')`;
   selectedValue.innerText = value;
   valueInfo.innerText = info;
}

// function colorChange(button) {
//    button.style.backgroundColor = "#fff";
// }
