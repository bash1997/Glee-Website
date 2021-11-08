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

footerDivivder.style.height = (footerHeight - footerPadHeight)/1.5 + "px";

//VIDEO OBJECT
//ORDERED FROM NEWEST TO OLDEST
const video = [
  {
    name: "Don't Walk By Your Blessings<span> | Hidden Blessings</span>",
    src: "./video/sermons/watch725.mp4",
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
    name: "Who Is Your Neighbor?<span> | Love Your Neighbor As Yourself</span>",
    src: "./video/sermons/watch718.mp4",
    series: "Neighborhood Watch",
    part: "1",
    id: "watch1",
    date: {
      month: "July",
      day: "18",
      year: "2021"
    },
    playlist: "All Videos",
    description:
      "In part 1 of our series, neighborhood watch , we learn that we must expand our community and love our neighbors.",
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
    name: "This is Your Season!<span> | Be Intentional</span>",
    src: "./video/sermons/baggage711.mp4",
    series: "Baggage",
    part: "3",
    id: "bag3",
    date: {
      month: "July",
      day: "11",
      year: "2021"
    },
    playlist: "All Videos",
    description:
      "In the finale of our series, Baggage , we learn about being intentional. We learn that we must trust God and prepare for our season!",
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
    name: "The Door is Open<span> | Trust God's Process</span>",
    src: "./video/sermons/baggage74.mp4",
    series: "Baggage",
    part: "2",
    id: "bag2",
    date: {
      month: "July",
      day: "4",
      year: "2021"
    },
    playlist: "All Videos",
    description:
      "In our series, Baggage , we learn about the various ways to stop carrying baggage. We learn to trust God and his Process.",
    scripture: [
      {
        book: "Gensis",
        chapter: "15",
        verse: {
          start: "13", 
          end: ""
        }
      },
      {
        book: "Numbers",
        chapter: "14",
        verse: {
          start: "1", 
          end: ""
        }
      }
    ],
    speaker: "Pastor Lorenzo A. Moseley"
  },
  //JUNE 27TH IS MISSING
  {
    name: "How Should We Worship?",
    src: "./video/sermons/worship620.mp4",
    series: "Our Heart For The House",
    part: "3",
    id: "home3",
    date: {
      month: "June",
      day: "20",
      year: "2021"
    },
    playlist: "All Videos",
    description:
      "In Part 3 of our series, Our Heart For The House , we learn about the various ways we can worship the Lord.",
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
    name: "You Can't Cancel What You Didn't Create",
    src: "./video/sermons/relationships613.mp4",
    series: "Our Heart For The House",
    part: "2",
    id: "home2",
    date: {
      month: "June",
      day: "13",
      year: "2021"
    },
    playlist: "All Videos",
    description:
      "In Part 2 of our series, Our Heart For The House , we talk about relationships and loving all of those around us.",
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
    name: "Faithfulness In Serving<span> | Service is Mindset</span>",
    src: "./video/sermons/service66.mp4",
    series: "Our Heart For The House",
    part: "1",
    id: "home1",
    date: {
      month: "June",
      day: "6",
      year: "2021"
    },
    playlist: "All Videos",
    description:
      "In Part 1 of our series, Our Heart For The House , we learn about the beauty in serving.",
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
    name: "Pride Is A Dangerous Thing",
    src: "./video/sermons/limitations530.mp4",
    series: "Limitations",
    part: "2",
    id: "limit2",
    date: {
      month: "May",
      day: "30",
      year: "2021"
    },
    playlist: "All Videos",
    description:
      "In Week 2 of our series, Limitations, we learned about how pride can be a hindrance in our lives. We should put our pride aside and come humbly before God.",
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
    name: "It Stops Here",
    src: "./video/sermons/limitations523.mp4",
    series: "Limitations",
    part: "1",
    id: "limit1",
    date: {
      month: "May",
      day: "23",
      year: "2021"
    },
    playlist: "All Videos",
    description:
      "In Week 1 of our series, Limitations, we learned about how we must not let fear block our blessings. We must have faith over fear.",
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
    src: "./video/sermons/heart516.mp4",
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
    name: "Don't Walk Away From Your Destiny",
    src: "./video/sermons/destiny59.mp4",
    series: "Destiny",
    part: "1",
    id: "destiny1",
    date: {
      month: "May",
      day: "9",
      year: "2021"
    },
    playlist: "All Videos",
    description: "In this message, we learn about how to walk in our destiny.",
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
    name: "Stop Hiding Your Struggles",
    src: "./video/sermons/mind52.mp4",
    series: "The Mind",
    part: "4",
    id: "mind4",
    date: {
      month: "May",
      day: "2",
      year: "2021"
    },
    playlist: "All Videos",
    description:
      "Be part of something great. You belong here! At Glee Church, our mission is to share the love of Jesus Christ and to reach the unchurched.",
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
    src: "./video/sermons/heart425.mp4",
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
    src:"./video/sermons/heart418.mp4",
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
  },

  {
    name: "A Life Without Meaning",
    src:"./video/sermons/enviroment411.mp4",
    series: "Your Environment Matters",
    part: "1",
    id: "matters1",
    date: {
      month: "April",
      day: "11",
      year: "2021"
    },
    playlist: "All Videos",
    description:
      "Be part of something great. You belong here! At Glee Church, our mission is to share the love of Jesus Christ and to reach the unchurched.",
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
    name: "What's So Special About Him",
    src:"./video/sermons/jesus44.mp4",
    series: "Why Jesus?",
    part: "1",
    id: "jesus1",
    date: {
      month: "April",
      day: "4",
      year: "2021"
    },
    playlist: "All Videos",
    description:
      "In this message we learn about why Jesus is so special. There is none like him.",
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
    name: "Passion",
    src: "./video/sermons/passion328.mp4",
    series: "Passion",
    part: "1",
    id: "passion1",
    date: {
      month: "March",
      day: "28",
      year: "2021"
    },
    playlist: "All Videos",
    description:
      "Be part of something great. You belong here! At Glee Church, our mission is to share the love of Jesus Christ and to reach the unchurched.",
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

  // {//BRIAAA
  //   name: "Self Sabotage",
  //   src:
  //     new URL('https://www.youtube.com/embed/Kp1cCvFMQZM?modestbranding=1&amp;controls=0&amp;rel=0&amp;showinfo=0'),
  //   series: "The Mind",
  //   part: "3",
  //   id: "mind3",
  //   date: {
  //     month: "March",
  //     day: "21",
  //     year: "2021"
  //   },
  //   playlist: "All Videos",
  //   description:
  //     "In Part 3 of our series, The Mind, we learned about how our actions can block our blessings.",
  //   scripture: {
    //   book: "",
    //   chapter: "",
    //   verse: {
    //     start: "", 
    //     end: ""
    //   }
    // },
  //   speaker: "Pastor Lorenzo A. Moseley"
  // },

  {
    name: "Self Esteem",
    src: "./video/sermons/mind314.mp4",
    series: "The Mind",
    part: "2",
    id: "mind2",
    date: {
      month: "March",
      day: "14",
      year: "2021"
    },
    playlist: "All Videos",
    description:
      "In Part 2 of our series, The Mind, we learn about self esteem.",
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
  //MARCH 7 IS MISSING
  {
    name: "Disconnected",
    src: "./video/sermons/mind221.mp4",
    series: "The Mind",
    part: "1",
    id: "mind1",
    date: {
      month: "February",
      day: "21",
      year: "2021"
    },
    playlist: "All Videos",
    description:
      "Be part of something great. You belong here! At Glee Church, our mission is to share the love of Jesus Christ and to reach the unchurched.",
    scripture: {
      book: "Luke",
      chapter: "11",
      verse: {
        start: "9", 
        end: "10"
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
    img: "./img/sermons.png",
    id: "allTab"
  },
  {
    series: "Habits",
    img: "./img/habits.png",
    id: "habitsTab"
  },
  {
    series: "Next is Now",
    img: "./img/nextIsNow.png",
    id: "nextTab"
  },
  {
    series: "Neighborhood Watch",
    img: "./img/neighborhood.png",
    id: "neighborhoodTab"
  },
  {
    series: "Your Part Matters",
    img: "./img/yourPart.png",
    id: "yourPartTab"
  },
  {
    series: "Baggage",
    img: "./img/baggage.png",
    id: "baggageTab"
  },
  {
    series: "Limitations",
    img: "./img/limits.png",
    id: "limitsTab"
  },
  {
    series: "The Heart",
    img: "./img/heart.png",
    id: "heartTab"
  },
  {
    series: "The Mind",
    img: "./img/mind.png",
    id: "mindTab"
  },
  {
    series: "Our Heart For The House",
    img: "./img/home.png",
    id: "homeTab"
  }
];

//HTML VARIABLES
const feat = document.querySelector("#feat");
const mostRecent = document.querySelector("#most-recent");
const mostPop = document.querySelector("#most-pop");
const seriesTab = document.querySelector("#series")
const all = document.querySelector("#all");

//PLAY VIDEO
//ONCLICK CHANGES TO FEATURED VIDEO
const playVideo = (id) => {
  const idSrc = document.querySelector(`#${id} VIDEO`).src;
  for (let i = 0; i < video.length; i++) {
    let src = video[i]["src"];
    webSrc = src.replace('.', '');
    
    if (idSrc.includes(webSrc)){
      document.querySelector("#feat DIV").remove();
      displayFeat(video[i]);
      if(i != 0) {
        document.querySelector("#feat h5").remove();
        //0 = NEWEST VIDEO; PRINTS "LASTEST MESSAGE"
      }
      document.querySelector("main").scrollIntoView(true);
      document.querySelector("#feat VIDEO").play();
      let series = video[i]["series"];
      displaySuggestion(series);//SIDEBARS VIDEOS OF SAME SERIE
    }
  }
}

//CREATE DIV
const createDiv = (addClassName, elementId, src, nombre, series, part, selection) => {
  //CREATES CONTAINER DIV WITH VIDEO & VIDEO INFO DIV
  let sermonDiv = document.createElement("DIV");
  sermonDiv.classList.add(addClassName, "flex");
  sermonDiv.setAttribute("id", elementId);

  let divVideo = document.createElement("VIDEO");
  divVideo.setAttribute("onclick", `playVideo("${elementId}")`);
  divVideo.poster = poster[0].img; //for sermons without a major series
    for (let i = 0; i < poster.length; i++) {
      if (poster[i].series === series) {
        divVideo.poster = poster[i].img;
      }
    }
  divVideo.src = src;
  sermonDiv.append(divVideo);

  let inDiv = document.createElement("DIV");
  inDiv.classList.add("video-info", "flex");
  inDiv.setAttribute("onclick", `playVideo("${elementId}")`);
  inDiv.innerHTML = `<h6>${nombre}</h6><p>${series} pt. ${part}</p>`;

  sermonDiv.append(inDiv);
  selection.append(sermonDiv); //ADDS TO SELECTION
}

//DISPLAY VIDEOS

//DISPLAY FEATURED
const displayFeat = function(video) {
  let element = video; //LASTEST VIDEO
  let nombre = element["name"];
  let src = element["src"];
  let series = element["series"];
  let part = element["part"];
  let id = "feat" + element["id"];
  let addClassName = "feat-video";
  createDiv(addClassName, id, src, nombre, series, part, feat);
  //FEATURE ONLY CHANGES
  document.querySelector("#feat VIDEO").removeAttribute("onclick", `playVideo("${id}")`);
  document.querySelector(".video-info").removeAttribute("onclick", `playVideo("${id}")`);
  document.querySelector("#feat VIDEO").controls = true;

  let speaker = element["speaker"];
  let description = element["description"];
  document.querySelector("#feat .video-info").innerHTML = `<h5>Lastest Message</h5><h6>${nombre}</h6><h6>${speaker}</h6><h6>Series: ${series} pt. ${part}</h6><p>${description}`;
}

//DISPLAY MOST RECENT GALLERY
const displayMostRecent = function() {
  for (let index = 1; index < 4; index++) {
    let element = video[index];
    let nombre = element["name"];
    let src = element["src"];
    let series = element["series"];
    let part = element["part"];
    let id = "recent" + element["id"];
    let addClassName = "sermon-video";
    createDiv(addClassName, id, src, nombre, series, part, mostRecent);
  }
}

//DISPLAY POPULAR GALLERY
const displayPop = function() {
  for (let index = 0; index < video.length; index++) {
    let element = video[index];
    let nombre = element["name"];
    let src = element["src"];
    let series = element["series"];
    let part = element["part"];
    let id = "pop" + element["id"];

    //CHECK YOUTUBE FOR MOST POPULAR VIDEOS
    if (series == "The Heart") {
      let addClassName = "sermon-video";
      createDiv(addClassName, id, src, nombre, series, part, mostPop);
    }
  }
}

//DISPLAY VIEW NEXT
const displaySuggestion = (serie) => {
  let title = document.querySelector("#recent h3");
  title.innerText = "Also in This Series";

  let removeDiv = document.querySelectorAll("#most-recent DIV");
  for (let i = 0; i < removeDiv.length; i++) {
    removeDiv[i].remove();
  }

  for (let index = video.length - 1; index > -1; index--) { 
    let element = video[index];
    let series = element["series"];

    if (series == serie) {
      let nombre = element["name"];
      let src = element["src"];
      let part = element["part"];
      let id = element["id"];
      let addClassName = "sermon-video";
      createDiv(addClassName, id, src, nombre, series, part, mostRecent);
    }
  }
}

//DISPLAY BY SERIES GALLERY
const displayBySeries = function(serie) {
  document.querySelector("#general H3").innerText = serie;

  let removeDiv = document.querySelectorAll("#all DIV");
  for (i = 0; i < removeDiv.length; i++){
    removeDiv[i].remove();
  }

  if (serie == "All Sermons") {
    let videoSeries = [];
    for (let index = 0; index < video.length; index++) { 
      let element = video[index];
      let series = element["series"];

      if (videoSeries.includes(series) == false) {
        videoSeries.push(series);
      }
    }

    for (let x = 0; x < videoSeries.length; x++) {
      let group = videoSeries[x];
      let id = 'series' + x;

      let seriesH5 = document.createElement("H5");
      seriesH5.innerText = group;

      let seriesDiv = document.createElement("DIV");
      seriesDiv.classList.add("series-gallery", "flex");
      seriesDiv.setAttribute("id", id);

      seriesDiv.append(seriesH5);

      for (let index = video.length - 1; index > -1; index--) { 
        let element = video[index];
        let series = element["series"];
        let nombre = element["name"];
        let src = element["src"];
        let part = element["part"];
        let id = element["id"];
        let addClassName = "sermon-video";

        if (series == group) {
          createDiv(addClassName, id, src, nombre, series, part, seriesDiv);
        }
      }
      all.append(seriesDiv);
    }
  } 
  
  else {
    for (let index = video.length - 1; index > -1; index--) { 
      let element = video[index];
      let series = element["series"];

      if (series == serie) {
        let nombre = element["name"];
        let src = element["src"];
        let part = element["part"];
        let id = element["id"];
        let addClassName = "sermon-video";
        createDiv(addClassName, id, src, nombre, series, part, all);
      }
    }
  }
}

//DISPLAY Series Tab
const displaySeries = function() {
  for (let index = 0; index < poster.length; index++) {
    let element = poster[index];
    let src = element["img"];
    let series = element["series"];
    let id = element["id"];

    let tabDiv = document.createElement("DIV");
    tabDiv.classList.add("tab", "flex");
    tabDiv.setAttribute("id", id);
    tabDiv.setAttribute("onclick", `displayBySeries("${series}")`);
  
    let tabImg = document.createElement("IMG");
    tabImg.src = src;
    tabImg.alt = series;
    tabDiv.append(tabImg);
   
    seriesTab.append(tabDiv);
  }
}

//DISPLAY ALL GALLERY
const displayAll = function() {
  for (let index = 0; index < video.length; index++) {
    let element = video[index];
    let nombre = element["name"];
    let src = element["src"];
    let series = element["series"];
    let part = element["part"];
    let id = element["id"];
    let addClassName = "sermon-video";
    createDiv(addClassName, id, src, nombre, series, part, all);
  }
}

displayFeat(video[0]);//LASTEST SERMON
displayMostRecent()//VIDEOS FROM THE PAST 3 WEEKS
displayPop();
displaySeries();
displayAll();