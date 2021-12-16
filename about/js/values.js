// ---------------------------------------- //
// VARIABLES
// ---------------------------------------- //

// Buttons
var partnershipsButton = document.getElementById("partnerships");
var creativityButton = document.getElementById("creativity");
var generosityButton = document.getElementById("generosity");
var excellenceButton = document.getElementById("excellence");
var friendlinessButton = document.getElementById("friendliness");
const menu = document.querySelector("#value-menu");

// Display Properties
var selectedImg = document.getElementById("display");
var selectedValue = document.getElementById("selected-value");
var valueInfo = document.getElementById("value-info");
const buttons = document.querySelectorAll(".button-orange");

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
const InfoPartnerships = "<strong>We Love Community.</strong></br> We don’t allow our ego or personal agenda to get in the way of doing what’s best for our community. We are committed to each other and always willing to form new partnerships or help volunteer when that’s what’s needed for success. Partnerships are always worth the effort. We win and lose as a community.";
const InfoCreativity = "<strong>We Aim to be Relevant.</strong></br> We demonstrate a relentless solution focus. Together we share our experiences and differences to learn and think more efficiently. We aim to remain relevant by sharing an unconventional approach to minister the Gospel of Jesus Christ!";
const InfoGenerosity = "<strong>We inspire to Give More.</strong></br> We make no excuses for why something can't be done! We strongly believe where there is a will there is away. We regularly seek opportunities to assist those in need, to give to our church and community. Demonstrating a tangible approach to giving back, we put the needs of others ahead of our own.";
const InfoExcellence = "<strong>We Purse Excellence.</strong></br> Everything speaks. Details matter. We hold ourselves to the high standard to produce excellence in everything we do. First impressions only happen once. Every interaction that people have with Glee Church has the opportunity to influence how they relate to God. The goal is to get things “right”, not simply to get things “done”. For us, that means sweating the small stuff in pursuit of excellence";
const InfoFriendliness = "<strong>We Choose to be Happy.</strong></br> Smile. Laugh every day. While our passion for excellence is real, sometimes that’s easy and sometimes it’s hard. We consider the work we do a “privilege” and not an “obligation”. First impressions only happen once. No matter the role we play, we choose to show up with the right spirit and right attitude to be an enjoyable breath of life.";

// ---------------------------------------- //
// BUTTON FUNCTIONS
// ---------------------------------------- //

const menuToggle = () => {
   if (window.getComputedStyle(menu).display !== "none"){
       let valueInfo = document.getElementById("value-info");
       let select = document.querySelector(".bullet-select.flex");
       
       if (window.getComputedStyle(select).display == "none"){
           valueInfo.style.display = "none";
           select.style.display = "flex";

           menu.innerText = "Close";
           menu.style.fontSize = "1.45rem";
           menu.style.background = "none";
           menu.style.color = "white";
           menu.style.letterSpacing = "6px";
       } else {
           valueInfo.style.display = "block";
           select.style.display = "none";
           
           menu.innerText = "More Values";
           menu.style.fontSize = "1.125rem";
           menu.style.background = "white";
           menu.style.color = "rgb(246, 87, 34)";
           menu.style.letterSpacing = "0";
       }
   }
}

// Partnerships
// -----------------
function partnershipsClick() { swap(ImgPartnerships, TitlePartnerships, InfoPartnerships); active("partnerships");}

// Creativity
// -----------------
function creativityClick() { swap(ImgCreativity, TitleCreativity, InfoCreativity); active("creativity"); }

// Generosity
// -----------------
function generosityClick() { swap(ImgGenerosity, TitleGenerosity, InfoGenerosity); active("generosity");}

// Excellence
// -----------------
function excellenceClick() { swap(ImgExcellence, TitleExcellence, InfoExcellence); active("excellence"); }

// Friendliness
// -----------------
function friendlinessClick() { swap(ImgFriendliness, TitleFriendliness, InfoFriendliness); active("friendliness"); }

// ---------------------------------------- //
// HELPER FUNCTIONS
// ---------------------------------------- //

function swap(imgSrc, value, info) {
   selectedImg.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)) , url('${imgSrc}')`;
   selectedValue.innerText = value;
   valueInfo.innerHTML = info;
}

function active(idname) {
   let id = document.querySelector(`#${idname}`);
   let buttons = document.querySelectorAll(".bullet-select BUTTON");

   for (let i = 0; i < buttons.length; i++) {
       const element = buttons[i];
       if (element.getAttribute('class') == "button-white") {
           element.removeAttribute("class", "button-white");
           element.setAttribute("class", "button-orange");
       }
       
   }

   if (id.getAttribute('class') == "button-orange"){
       id.removeAttribute("class", "button-orange");
       id.setAttribute("class", "button-white");
   }
}