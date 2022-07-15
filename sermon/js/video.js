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
    name: "Are You Solid?<span> | Vision Sunday</span>",
    src: "./video/placeholder.mp4",
    series: "I'm Solid",
    part: "1",
    id: "solid1",
    date: {
      month: "January",
      day: "30",
      year: "2022"
    },
    playlist: ["All Videos", "Pastor Lorenzo A. Moseley"],
    description:
      "Welcome to Glee Church! In this message we learn that all words have meaning. What we declare out of our mouth, God is getting ready to manifest.",
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
    name: "You Were Born To Win",
    src: "./video/placeholder.mp4",
    series: "Abundantly Broken Down",
    part: "2",
    id: "abundant2",
    date: {
      month: "January",
      day: "23",
      year: "2022"
    },
    playlist: ["All Videos", "Pastor Phyliseccea Owens"],
    description:
      "Welcome to Glee Church! In this message we learn that we were born to be victorious. As long as we surrender to God he will continuously give us unspeakable favors, joy, grace, and mercy.",
    scripture: {
      book: "John",
      chapter: "15",
      verse: {
        start: "1", 
        end: "4"
      }
    },
    speaker: "Pastor Phyliseccea Owens"
  },

  {
    name: "Living An Anbudant Life",
    src: "./video/placeholder.mp4",
    series: "Abundantly Broken Down",
    part: "1",
    id: "abundant1",
    date: {
      month: "January",
      day: "17",
      year: "2022"
    },
    playlist: ["All Videos", "Pastor Phyliseccea Owens"],
    description:
      "In this message we learn how to live an abundant life. We must makes sacrifices so the Lord can fill our lives with peace, love , mercy, and grace.",
    scripture: {
      book: "John",
      chapter: "10",
      verse: {
        start: "7", 
        end: "10"
      }
    },
    speaker: "Pastor Phyliseccea Owens"
  },

  {
    name: "God is Saving While You are Praising",
    src: "./video/placeholder.mp4",
    series: "God is Saving",
    part: "1",
    id: "saving1",
    date: {
      month: "January",
      day: "9",
      year: "2022"
    },
    playlist: ["All Videos", "Pastor Courtney Thorpe"],
    description:
      "Be part of something great. You belong here! At Glee Church, our mission is to share the love of Jesus Christ and to reach the unchurched.",
    scripture: {
      book: "Isaiah",
      chapter: "61",
      verse: {
        start: "3"
      }
    },
    speaker: "Pastor Courtney Thorpe"
  },

  {
    name: "Living in the Now<span> | Live By Faith</span>",
    src: "./video/placeholder.mp4",
    series: "Next Is Now",
    part: "2",
    id: "next2",
    date: {
      month: "October",
      day: "10",
      year: "2021"
    },
    playlist: ["All Videos", "Pastor Lorenzo A. Moseley", "Rebuild", "Faith", "New Beginning"],
    description:
      "Welcome to Glee Church! In Part 2 of our series Next Is Now, we learn to that we should start living in the now. We need to let go of thing of the past and trust that God has a plan for us.",
    scripture: {
      book: "Joshua",
      chapter: "1",
      verse: {
        start: "1", 
        end: ""
      }
    },
    speaker: "Pastor Lorenzo A. Moseley"
  },

  {
    name: "What's Next Is Now",
    src: "./video/placeholder.mp4",
    series: "Next Is Now",
    part: "1",
    id: "next1",
    date: {
      month: "October",
      day: "3",
      year: "2021"
    },
    playlist: ["All Videos", "Pastor Lorenzo A. Moseley", "Rebuild"],
    description:
      "Welcome to Glee Church! In this message we start a new series, Next Is Now.",
    scripture: {
      book: "Nehemiah",
      chapter: "6",
      verse: {
        start: "2", 
        end: ""
      }
    },
    speaker: "Pastor Lorenzo A. Moseley"
  },

  {
    name: "There Will Be Results",
    src: "./video/placeholder.mp4",
    series: "Let Jesus In",
    part: "1",
    id: "letJesus1",
    date: {
      month: "September",
      day: "26",
      year: "2021"
    },
    playlist: ["All Videos", "Pastor Lorenzo A. Moseley"],
    description:
    "Welcome to Glee Church! In this message we learn about how God yields results in the time of need. It is up to us to let him in.",
    scripture: {
      book: "Luke",
      chapter: "5",
      verse: {
        start: "1", 
        end: ""
      }
    },
    speaker: "Pastor Lorenzo A. Moseley"
  },

  {
    name: "Get Ready For Your Harvest<span> | Transitions Are Happening </span>",
    src: "./video/placeholder.mp4",
    series: "Transitions",
    part: "1",
    id: "transitions1",
    date: {
      month: "September",
      day: "19",
      year: "2021"
    },
    playlist: ["All Videos", "Pastor Phyliseccea Owens"],
    description:
      "Welcome to Glee Church! Enjoy a special word from guest speaker, Phyliscecea Owens. Watch as Phyliscecea delves into the various transitions we may go through, and how we can prepare for our harvest.",
    scripture: {
      book: "Mark",
      chapter: "8",
      verse: {
        start: "27", 
        end: "38"
      }
    },
    speaker: "Pastor Phyliseccea Owens"
  },

  {
    name: "How to Find God<span> | He Occupies All of Us </span>",
    src: "./video/placeholder.mp4",
    series: "Dr. Robert F. Cheeks Jr.",
    part: "1",
    id: "cheeks1",
    date: {
      month: "September",
      day: "12",
      year: "2021"
    },
    playlist: [ "All Videos", "Guest Pastors" ],
    description:
      "Welcome to Glee Church! Enjoy a special word from guest speaker, Dr. Robert F. Cheeks Jr.",
    scripture: {
      book: "",
      chapter: "",
      verse: {
        start: "", 
        end: ""
      }
    },
    speaker: "Dr. Robert F. Cheeks Jr."
  },

  {
    name: "His Love is Unconditional<span> | Walk by Faith </span>",
    src: "./video/placeholder.mp4",
    series: "Your Part Matters",
    part: "3",
    id: "yourPart3",
    date: {
      month: "August",
      day: "30",
      year: "2021"
    },
    playlist: ["All Videos", "Pastor Lorenzo A. Moseley", "Faith"],
    description:
      "In this message  we recap the past two series, Neighborhood Watch and Your Part Matters. We learn that we must love people unconditionally. We must lead by example. We were created to multiply. Don't wait to bear fruit, trust in God.",
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
    name: "You Are Fully Loaded with Potential<span> | Do Your Part </span>",
    src: "./video/placeholder.mp4",
    series: "Your Part Matters",
    part: "2",
    id: "yourPart2",
    date: {
      month: "August",
      day: "15",
      year: "2021"
    },
    playlist: ["All Videos", "Pastor Lorenzo A. Moseley"],
    description:
      "In part 2 of our series, Your Part Matters , we learn that we are the people that should yield results. We were created to multiply. Don't wait to bear fruit, trust in God.",
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
    name: "Are You Doing Enough?",
    src: "./video/placeholder.mp4",
    series: "Your Part Matters",
    part: "1",
    id: "yourPart1",
    date: {
      month: "August",
      day: "8",
      year: "2021"
    },
    playlist: ["All Videos", "Pastor Lorenzo A. Moseley"],
    description:
      "In part 1 of our series, Your Part Matters , we learn that in order to grow with God we must do our part. We must ask ourselves are we doing enough.",
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
    name: "Don't Walk By Your Blessings<span> | Hidden Blessings</span>",
    src: "./video/placeholder.mp4",
    series: "Neighborhood Watch",
    part: "2",
    id: "watch2",
    date: {
      month: "July",
      day: "25",
      year: "2021"
    },
    playlist: ["All Videos", "Pastor Lorenzo A. Moseley"],
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
    src: "./video/placeholder.mp4",
    series: "Neighborhood Watch",
    part: "1",
    id: "watch1",
    date: {
      month: "July",
      day: "18",
      year: "2021"
    },
    playlist: ["All Videos", "Pastor Lorenzo A. Moseley"],
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
    src: "./video/placeholder.mp4",
    series: "Baggage",
    part: "3",
    id: "bag3",
    date: {
      month: "July",
      day: "11",
      year: "2021"
    },
    playlist: ["All Videos", "Pastor Lorenzo A. Moseley"],
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
    src: "./video/placeholder.mp4",
    series: "Baggage",
    part: "2",
    id: "bag2",
    date: {
      month: "July",
      day: "4",
      year: "2021"
    },
    playlist: ["All Videos", "Pastor Lorenzo A. Moseley"],
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
    src: "./video/placeholder.mp4",
    series: "Our Heart For The House",
    part: "3",
    id: "home3",
    date: {
      month: "June",
      day: "20",
      year: "2021"
    },
    playlist: ["All Videos", "Pastor Lorenzo A. Moseley"],
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
    src: "./video/placeholder.mp4",
    series: "Our Heart For The House",
    part: "2",
    id: "home2",
    date: {
      month: "June",
      day: "13",
      year: "2021"
    },
    playlist: ["All Videos", "Pastor Lorenzo A. Moseley"],
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
    src: "./video/placeholder.mp4",
    series: "Our Heart For The House",
    part: "1",
    id: "home1",
    date: {
      month: "June",
      day: "6",
      year: "2021"
    },
    playlist: ["All Videos", "Pastor Lorenzo A. Moseley", "Faith", "Serving"],
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
    src: "./video/placeholder.mp4",
    series: "Limitations",
    part: "2",
    id: "limit2",
    date: {
      month: "May",
      day: "30",
      year: "2021"
    },
    playlist: ["All Videos", "Pastor Lorenzo A. Moseley"],
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
    src: "./video/placeholder.mp4",
    series: "Limitations",
    part: "1",
    id: "limit1",
    date: {
      month: "May",
      day: "23",
      year: "2021"
    },
    playlist: ["All Videos", "Pastor Lorenzo A. Moseley", "Faith"],
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
    src: "./video/placeholder.mp4",
    series: "The Heart",
    part: "3",
    id: "heart3",
    date: {
      month: "May",
      day: "16",
      year: "2021"
    },
    playlist: ["All Videos", "Pastor Lorenzo A. Moseley"],
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
    src: "./video/placeholder.mp4",
    series: "Destiny",
    part: "1",
    id: "destiny1",
    date: {
      month: "May",
      day: "9",
      year: "2021"
    },
    playlist: ["All Videos", "Pastor Lorenzo A. Moseley"],
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
    src: "./video/placeholder.mp4",
    series: "The Mind",
    part: "4",
    id: "mind4",
    date: {
      month: "May",
      day: "2",
      year: "2021"
    },
    playlist: ["All Videos", "Pastor Lorenzo A. Moseley"],
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
    src: "./video/placeholder.mp4",
    series: "The Heart",
    part: "2",
    id: "heart2",
    date: {
      month: "April",
      day: "25",
      year: "2021"
    },
    playlist: ["All Videos", "Pastor Lorenzo A. Moseley"],
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
    src:"./video/placeholder.mp4",
    series: "The Heart",
    part: "1",
    id: "heart1",
    date: {
      month: "April",
      day: "18",
      year: "2021"
    },
    playlist: ["All Videos", "Pastor Lorenzo A. Moseley"],
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
    src:"./video/placeholder.mp4",
    series: "Your Environment Matters",
    part: "1",
    id: "matters1",
    date: {
      month: "April",
      day: "11",
      year: "2021"
    },
    playlist: ["All Videos", "Pastor Lorenzo A. Moseley"],
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
    src:"./video/placeholder.mp4",
    series: "Why Jesus?",
    part: "1",
    id: "jesus1",
    date: {
      month: "April",
      day: "4",
      year: "2021"
    },
    playlist: ["All Videos", "Pastor Lorenzo A. Moseley"],
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
    src: "./video/placeholder.mp4",
    series: "Passion",
    part: "1",
    id: "passion1",
    date: {
      month: "March",
      day: "28",
      year: "2021"
    },
    playlist: ["All Videos", "Pastor Lorenzo A. Moseley"],
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
  //   playlist: ["All Videos", "Pastor Lorenzo A. Moseley"],
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
    src: "./video/placeholder.mp4",
    series: "The Mind",
    part: "2",
    id: "mind2",
    date: {
      month: "March",
      day: "14",
      year: "2021"
    },
    playlist: ["All Videos", "Pastor Lorenzo A. Moseley"],
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
    src: "./video/placeholder.mp4",
    series: "The Mind",
    part: "1",
    id: "mind1",
    date: {
      month: "February",
      day: "21",
      year: "2021"
    },
    playlist: ["All Videos", "Pastor Lorenzo A. Moseley"],
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
//  {
//     series: "I'm Solid",
//     img: "./img/solid.png",
//     id: "solidTab"
//   },
//   {
//     series: "Abundantly Broken Down",
//     img: "./img/abundant.png",
//     id: "abundantTab"
//   },
//   {
//     series: "God is Saving",
//     img: "./img/saving.png",
//     id: "savingTab"
//   },
  //don't be a grinch
  //why them
  //five years from now
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
    series: "Your Part Matters",
    img: "./img/yourPart.png",
    id: "yourPartTab"
  },
  {
    series: "Neighborhood Watch",
    img: "./img/neighborhood.png",
    id: "neighborhoodTab"
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
  const idName = document.querySelector(`#${id}`).id;
  for (let i = 0; i < video.length; i++) {
    let id = video[i]["id"];
    
    if (idName.includes(id)){
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
      if (poster[i].series.toLowerCase() === series.toLowerCase()) {
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

//CREATE DIV WITH IMG
const createImg = (addClassName, elementId, src, nombre, series, part, selection) => {
  //CREATES CONTAINER DIV WITH VIDEO & VIDEO INFO DIV
  let sermonDiv = document.createElement("DIV");
  sermonDiv.classList.add(addClassName, "flex");
  sermonDiv.setAttribute("id", elementId);

  let divVideo = document.createElement("IMG");
  divVideo.setAttribute("onclick", `playVideo("${elementId}")`);
  divVideo.src = poster[0].img; //for sermons without a major series
    for (let i = 0; i < poster.length; i++) {
      if (poster[i].series.toLowerCase() === series.toLowerCase()) {
        divVideo.src = poster[i].img;
      }
    }
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
    createImg(addClassName, id, src, nombre, series, part, mostRecent);
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
      createImg(addClassName, id, src, nombre, series, part, mostPop);
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
      createImg(addClassName, id, src, nombre, series, part, mostRecent);
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
          createImg(addClassName, id, src, nombre, series, part, seriesDiv);
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
        createImg(addClassName, id, src, nombre, series, part, all);
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
    createImg(addClassName, id, src, nombre, series, part, all);
  }
}

displayFeat(video[0]);//LASTEST SERMON
displayMostRecent()//VIDEOS FROM THE PAST 3 WEEKS
displayPop();
displaySeries();
displayAll();
