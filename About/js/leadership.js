class Leader {
    constructor(title,name,description) {
        this.title = title;
        this.name = name;
        this.description = description;
    }

    get title() {
        return this.title;
    }

    get name() {
        return this.name;
    }

    get description() {
        return this.description;
    }
}

const btnPrev = document.getElementById("previous");
const btnCurr = document.getElementById("current");

var testArray = ['e1','e2','e3','e4','e5','e6','e7'];
var index = 0;
const max = testArray.length-1;

function clickPrev() {
    index--;
    indexCheck();
    console.log(testArray[index]);
}

function clickCurr() {
    index++;
    indexCheck();
    console.log(testArray[index]);
}

function indexCheck() {
    if(index > max) {index = 0;}
    else if(index <= 0) {index = max;}
}
