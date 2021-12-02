// ---------------------------------------- //
// OBJECTS
// ---------------------------------------- //

class Leader {
    constructor(icon,title,name,description) {
        this.icon = icon;
        this.title = title;
        this.name = name;
        this.description = description;
    }
}

const gleeLeaders = [
    {
        image: "../about/img/leaders/pastor.jpeg",
        title :"Lead Pastor",
        name: "Pastor Lorenzo",
        info: "Lorenzo Moseley, Jr. is the Lead Pastor of Glee Church in Bowie, Maryland. He is a native of the Washington, DC Metropolitan area. He is passionate about seeing people operate in their authentic gifting."
    },
    {
        image: "../about/img/leaders/kevin.jpeg",
        title: "Executive Assistant to Lead Pastor",
        name: "Kevin Guzman",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi est sit amet facilisis magna etiam tempor. Ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a."
    },
    {
        image: "../about/img/leaders/phyliseccea.jpeg",
        title: "Connections Pastor",
        name: "Phyliseccea Owens",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi est sit amet facilisis magna etiam tempor. Ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a."
    },
    {
        image: "../about/img/leaders/courtney.png",
        title: "Worship Pastor",
        name: "Courtney Thorpe",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi est sit amet facilisis magna etiam tempor. Ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a."
    },
    {
        image: "../about/img/leaders/luis.jpeg",
        title: "Band Leader",
        name: "Luis Cabrera",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi est sit amet facilisis magna etiam tempor. Ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a."
    },
    {
        image: "../about/img/leaders/kaylin.jpeg",
        title: "Creative Arts Pastor",
        name: "Kaylin Smith",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi est sit amet facilisis magna etiam tempor. Ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a."
    },
    {
        image: "../about/img/leaders/deontrae.jpeg",
        title: "Communications Leader",
        name: "Deontrae Callaham",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi est sit amet facilisis magna etiam tempor. Ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a."
    },
    {
        image: "../about/img/leaders/trinity.jpeg",
        title: "Production Leader",
        name: "Trinity Coleman",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi est sit amet facilisis magna etiam tempor. Ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a."
    }
]

// ---------------------------------------- //
// VARIABLES
// ---------------------------------------- //

// HTML Elements
const btnPrev = document.getElementById("previous");
const btnCurr = document.getElementById("current");
const ledTitle = document.getElementById("title");
const ledName = document.getElementById("name");
const ledDescr = document.getElementById("description");
const ledIcon = document.getElementById("image");
const createIcon = document.createElement("IMG");

// Array variables
var leadersArray = [];
var index = 0;

// Assigning Leaders
for (let i = 0; i < gleeLeaders.length; i++) {
    let element = gleeLeaders[i];
    leadersArray.push(new Leader(element["image"],element["title"],element["name"],element["info"]));
    
}
console.log(leadersArray);

// ---------------------------------------- //
// BUTTON FUNCTIONS
// ---------------------------------------- //

function clickPrev() {
    index--;
    indexCheck();
    getLeaderInfo();
}

function clickCurr() {
    index++;
    indexCheck();
    getLeaderInfo();
}

// ---------------------------------------- //
// HELPER FUNCTIONS
// ---------------------------------------- //

// Ensures that the index stays inbound
function indexCheck() {
    // Array length
    const max = leadersArray.length-1;
    
    // If the index goes further than the length of array
    if(index > max) {index = 0;}

    // If the index goes below 0
    else if(index < 0) {index = max;}
}

// Swap out current leader info from the array
function async await getLeaderInfo() {

    //createIcon.src = leadersArray[index].icon;
    createIcon.src = "./img/icons/profile.png";
    createIcon.alt = leadersArray[index].name;
    ledIcon.append(createIcon);
    ledTitle.innerText = leadersArray[index].title;
    ledName.innerText = leadersArray[index].name;
    ledDescr.innerText = leadersArray[index].description;
}

getLeaderInfo();