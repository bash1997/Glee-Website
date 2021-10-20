class Leader {
    constructor(icon,title,name,description) {
        this.icon = icon;
        this.title = title;
        this.name = name;
        this.description = description;
    }
}

// HTML Elements
const btnPrev = document.getElementById("previous");
const btnCurr = document.getElementById("current");
const ledTitle = document.getElementById("title");
const ledName = document.getElementById("name");
const ledDescr = document.getElementById("description");

// Leaders
const testLeader1 = new Leader("icon1","title1","name1","description1");
const testLeader2 = new Leader("icon2","title2","name2","description2");
const testLeader3 = new Leader("icon3","title3","name3","description3");
const testLeader4 = new Leader("icon4","title4","name4","description4");

// Array variables
var leadersArray = [testLeader1,testLeader2,testLeader3,testLeader4];
var index = 0;

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

function indexCheck() {
    const max = leadersArray.length-1;
    if(index > max) {index = 0;}
    else if(index < 0) {index = max;}
}

function getLeaderInfo() {
    console.log(leadersArray[index].icon + " \n" +
                leadersArray[index].title + " \n" +
                leadersArray[index].name + " \n" +
                leadersArray[index].description);
    
    ledTitle.innerText = leadersArray[index].title;
    ledName.innerText = leadersArray[index].name;
    ledDescr.innerText = leadersArray[index].description;
}
