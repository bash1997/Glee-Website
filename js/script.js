//HEADER
function toggleMobileMenu() {
  var x = document.getElementById('menuLinks');
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

//FOOTER 
const footerBio = document.getElementById("bio");
const footerDivivder = document.getElementById("bio-divider");

let footerStyle = getComputedStyle(footerBio);
let footerHeight = footerBio.clientHeight;
let footerPadHeight = parseInt(footerStyle.paddingTop) + parseInt(footerStyle.paddingBottom);

footerDivivder.style.height = (footerHeight - footerPadHeight) / 1.5 + "px";

//VIDEO OBJECT
const homevideo = [
  {
    name: "Don't Walk By Your Blessings<span> | Hidden Blessings</span>",
    src: "./sermon/video/sermons/watch725.mp4",
    series: "Neighborhood Watch",
    part: "2",
    id: "watch2",
    date: {
      month: "July",
      day: "25",
      year: "2021"
    },
    playlist: "All Videos",
    description:
      "In part 2 of our series, neighborhood watch , we learn that many times we walk right by our blessings. We must sometimes step out of our comfort zone to reach the blessing that God has for us.",
    scripture: {
      book: "",
      chapter: "",
      verse: {
        start: "",
        end: ""
      }
    },
    speaker: "Pastor Lorenzo A. Moseley"
  },

  {
    name: "God Wants You",
    src: "./sermon/video/sermons/heart516.mp4",
    series: "The Heart",
    part: "3",
    id: "heart3",
    date: {
      month: "May",
      day: "16",
      year: "2021"
    },
    playlist: "All Videos",
    description:
      "In the final part of our series, The Heart, we continue to learn about how to be generous and giving of ourselves.",
    scripture: {
      book: "",
      chapter: "",
      verse: {
        start: "",
        end: ""
      }
    },
    speaker: "Pastor Lorenzo A. Moseley"
  },

  {
    name: "Living a Generous Life",
    src: "./sermon/video/sermons/heart425.mp4",
    series: "The Heart",
    part: "2",
    id: "heart2",
    date: {
      month: "April",
      day: "25",
      year: "2021"
    },
    playlist: "All Videos",
    description:
      "In Part 2 of our series, The Heart, we continue to learn about how to be generous and giving of ourselves.",
    scripture: {
      book: "",
      chapter: "",
      verse: {
        start: "",
        end: ""
      }
    },
    speaker: "Pastor Lorenzo A. Moseley"
  },

  {
    name: "There's Beauty in Giving",
    src: "./sermon/video/sermons/heart418.mp4",
    series: "The Heart",
    part: "1",
    id: "heart1",
    date: {
      month: "April",
      day: "18",
      year: "2021"
    },
    playlist: "All Videos",
    description:
      "In Part 1 of our series, The Heart, we learn that there's beauty in giving.",
    scripture: {
      book: "",
      chapter: "",
      verse: {
        start: "",
        end: ""
      }
    },
    speaker: "Pastor Lorenzo A. Moseley"
  }
];

//SERMON ILLUSTRATIONS
//ORDERED FROM NEWEST TO OLDEST EXPECT FIRST POSTER
//FIRST POSTER SHOULD STAY "ALL SERMONS"
const poster = [
  {
    series: "All Sermons",
    img: "./sermon/img/sermons.png",
    id: "allTab"
  },
  {
    series: "Habits",
    img: "./sermon/img/habits.png",
    id: "habitsTab"
  },
  {
    series: "Next is Now",
    img: "./sermon/img/nextIsNow.png",
    id: "nextTab"
  },
  {
    series: "Neighborhood Watch",
    img: "./sermon/img/neighborhood.png",
    id: "neighborhoodTab"
  },
  {
    series: "Your Part Matters",
    img: "./sermon/img/yourPart.png",
    id: "yourPartTab"
  },
  {
    series: "Baggage",
    img: "./sermon/img/baggage.png",
    id: "baggageTab"
  },
  {
    series: "Limitations",
    img: "./sermon/img/limits.png",
    id: "limitsTab"
  },
  {
    series: "The Heart",
    img: "./sermon/img/heart.png",
    id: "heartTab"
  },
  {
    series: "The Mind",
    img: "./sermon/img/mind.png",
    id: "mindTab"
  },
  {
    series: "Our Heart For The House",
    img: "./sermon/img/home.png",
    id: "homeTab"
  }
];

const feat = document.querySelector("#feat-video");
const homePop = document.querySelector("#popular");
const promo = document.querySelector("#promo-video");
const promoSrc = "./sermon/video/promovideo.mp4";

//CONTROL VIDEO
const controlVideo = (x) => {
  const other = document.querySelectorAll("VIDEO");
  const id = document.querySelector(`#${x} VIDEO`);

  for (i = 0; i < other.length; i++) {
    if (!other[i].paused && other[i] != id) {
      other[i].load(); //reloads video
      //other[i].controls = false;
    }
  }
  if (id.paused && id.currentTime >= 0 && !id.ended) {
    id.play();
    id.controls = true;
  } else {
    id.pause();
  }
}

//CREATE DIV
const createDiv = (addClassName, elementId, src, nombre, series, part, selection) => {
  //CREATES CONTAINER DIV WITH VIDEO & VIDEO INFO DIV
  let sermonDiv = document.createElement("DIV");
  sermonDiv.classList.add(addClassName, "flex");
  sermonDiv.setAttribute("id", elementId);

  let divVideo = "";
  if (selection !== feat) {
    divVideo = document.createElement("VIDEO");
    divVideo.setAttribute("onclick", `controlVideo("${elementId}")`);
    divVideo.poster = poster[0].img; //for sermons without a major series

    for (let i = 0; i < poster.length; i++) {
      if (poster[i].series === series) {
        divVideo.poster = poster[i].img;
      }
    }
    divVideo.src = src;

    let inDiv = document.createElement("DIV");
    inDiv.classList.add("video-info", "flex");
    // inDiv.setAttribute("onclick", `playVideo("${elementId}")`);
    inDiv.innerHTML = `<h6>${nombre}</h6><p>${series} pt. ${part}</p>`;
    sermonDiv.append(divVideo);
    sermonDiv.append(inDiv);

  } else {
    divVideo = document.createElement("IMG");
    divVideo.src = poster[0].img; //for sermons without a major series
    divVideo.alt = poster[0].series;

    for (let i = 0; i < poster.length; i++) {
      if (poster[i].series === series) {
        divVideo.src = poster[i].img;
        divVideo.alt = poster[i].series;
      }
    }
    divVideo.alt = poster[0].series;
    sermonDiv.append(divVideo);
  }


  selection.append(sermonDiv); //ADDS TO SELECTION
}

//POSTER FOR PROMO VIDEO
function displayPromo(src, selection) {
  //CREATES CONTAINER DIV WITH VIDEO & VIDEO INFO DIV
  let sermonDiv = document.createElement("DIV");
  sermonDiv.classList.add("promo-video", "flex");
  sermonDiv.setAttribute("id", "promo");

  let divVideo = document.createElement("VIDEO");
  divVideo.setAttribute("onclick", `controlVideo("promo")`);
  divVideo.poster = poster[0].img;
  divVideo.src = src;
  sermonDiv.append(divVideo);
  selection.append(sermonDiv);
};

//DISPLAY FEATURED
const displayFeat = function () {
  let element = homevideo[0];
  let nombre = element["name"];
  let src = element["src"];
  let series = element["series"];
  let part = element["part"];
  let id = element["id"];
  let addClassName = "feat-video";
  createDiv(addClassName, id, src, nombre, series, part, feat);

  let infoH5 = document.querySelector("#message-info h5");
  infoH5.innerHTML = `${nombre} | <span class="feat-series">${series}</span>`;

}

//DISPLAY POPULAR
const displayHomePop = function () {
  for (let index = 0; index < homevideo.length; index++) {
    let element = homevideo[index];
    let nombre = element["name"];
    let src = element["src"];
    let series = element["series"];
    let part = element["part"];
    let id = element["id"];

    if (series == "The Heart") {
      let addClassName = "sermon-video";
      createDiv(addClassName, id, src, nombre, series, part, homePop);
    }
  }
}

displayFeat();
displayHomePop();
displayPromo(promoSrc, promo);