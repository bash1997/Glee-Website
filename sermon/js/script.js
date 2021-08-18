//VIDEO OBJECT
const video = [
  {
    name: "Disconnected",
    src: "../video/sermons/mind221.mp4",
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
      },
    },
    speaker: "Pastor Lorenzo A. Moseley"
  },

  {
    name: "Self Esteem",
    src: "../video/sermons/mind314.mp4",
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
    scripture:"",
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
  //   scripture:"",
  //   speaker: "Pastor Lorenzo A. Moseley"
  // },

  {
    name: "Passion",
    src: "../video/sermons/passion328.mp4",
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
    scripture:"",
    speaker: "Pastor Lorenzo A. Moseley"
  },

  {
    name: "What's So Special About Him",
    src:"../video/sermons/jesus44.mp4",
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
    scripture:"",
    speaker: "Pastor Lorenzo A. Moseley"
  },

  {
    name: "A Life Without Meaning",
    src:"../video/sermons/enviroment411.mp4",
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
    scripture:"",
    speaker: "Pastor Lorenzo A. Moseley"
  },

  {
    name: "There's Beauty in Giving",
    src:"../video/sermons/heart418.mp4",
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
    scripture:"",
    speaker: "Pastor Lorenzo A. Moseley"
  },

  {
    name: "Living a Generous Life",
    src: "../video/sermons/heart425.mp4",
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
    scripture:"",
    speaker: "Pastor Lorenzo A. Moseley"
  },

  {
    name: "Stop Hiding Your Struggles",
    src: "../video/sermons/mind52.mp4",
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
    scripture:"",
    speaker: "Pastor Lorenzo A. Moseley"
  },

  {
    name: "Don't Walk Away From Your Destiny",
    src: "../video/sermons/destiny59.mp4",
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
    scripture:"",
    speaker: "Pastor Lorenzo A. Moseley"
  },

  {
    name: "God Wants You",
    src: "../video/sermons/heart516.mp4",
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
    scripture:"",
    speaker: "Pastor Lorenzo A. Moseley"
  },

  {
    name: "It Stops Here",
    src: "../video/sermons/limitations523.mp4",
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
    scripture:"",
    speaker: "Pastor Lorenzo A. Moseley"
  },

  {
    name: "Pride Is A Dangerous Thing",
    src: "../video/sermons/limitations530.mp4",
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
    scripture:"",
    speaker: "Pastor Lorenzo A. Moseley"
  },

  {
    name: "Faithfulness In Serving | Service is Mindset",
    src: "../video/sermons/service66.mp4",
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
    scripture:"",
    speaker: "Pastor Lorenzo A. Moseley"
  },

  {
    name: "You Can't Cancel Wat You Didn't Create",
    src: "../video/sermons/relationships613.mp4",
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
    scripture:"",
    speaker: "Pastor Lorenzo A. Moseley"
  },

  {
    name: "How Should We Worship?",
    src: "../video/sermons/worship620.mp4",
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
    scripture:"",
    speaker: "Pastor Lorenzo A. Moseley"
  },

  // {//BRIAAA
  //   name: "The Door is Open | Trust God's Process",
  //   src: "../video/sermons/baggage_2-7_4.mp4",
  //   series: "Baggage",
  //   part: "1",
  //   id: "bag1",
  //   date: {
  //     month: "July",
  //     day: "4",
  //     year: "2021"
  //   },
  //   playlist: "All Videos",
  //   description:
  //     "In our series, Baggage , we learn about the various ways to stop carrying baggage. We learn to trust God and his Process.",
  //   scripture:"",
  //   speaker: "Pastor Lorenzo A. Moseley"
  // },

  {//BRIAAA
    name: "This is Your Season! | Be Intentional",
    src: "../video/sermons/baggage711.mp4",
    series: "Baggage",
    part: "2",
    id: "bag2",
    date: {
      month: "July",
      day: "11",
      year: "2021"
    },
    playlist: "All Videos",
    description:
      "In the finale of our series, Baggage , we learn about being intentional. We learn that we must trust God and prepare for our season!",
    scripture:"",
    speaker: "Pastor Lorenzo A. Moseley"
  },

  {
    name: "Who Is Your Neighbor? | Love Your Neighbor As Yourself",
    src: "../video/sermons/watch718.mp4",
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
    scripture:"",
    speaker: "Pastor Lorenzo A. Moseley"
  },

  {
    name: "Don't Walk By Your Blessings | Hidden Blessings",
    src: "../video/sermons/watch725.mp4",
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
    scripture:"",
    speaker: "Pastor Lorenzo A. Moseley"
  }
];

//HTML VARIABLES
const feat = document.querySelector("#feat");
const mostPop = document.querySelector("#most-pop");
const all = document.querySelector("#all");
// let nombre = element["name"];
// let src = element["src"];
// let desc = element["desc"];
// let part = element["part"];
// let series = element["series"];


//CREATE DIV
const createDiv = (addClassName, elementId, src, nombre, series, part, selection) => {
  
  let sermonDiv = document.createElement("DIV");
  sermonDiv.classList.add(addClassName, "flex");
  sermonDiv.setAttribute("id", elementId);

  let divVideo = document.createElement("VIDEO");
  
  if (window.innerWidth >= "800px") {
    divVideo.controls = "";
  } else {
    divVideo.controls = "controls";
  }
  divVideo.src = src;
  sermonDiv.append(divVideo);

  let inDiv = document.createElement("DIV");
  inDiv.classList.add("video-info");
  inDiv.innerHTML = `<h5>${nombre}</h5><h6>Series: ${series}</h6><h6>Part: ${part}</h6>`;
  sermonDiv.append(inDiv);



  selection.append(sermonDiv);
}

//DISPLAY VIDEOS

//DISPLAY FEATURED
const displayFeat = function() {
    for (let index = 0; index < video.length; index++) {
      let element = video[index];
      let nombre = element["name"];
      let src = element["src"];
      let series = element["series"];
      let part = element["part"];
      let id = element["id"];

      if (index == 2) {
        let addClassName = "feat-video";
        createDiv(addClassName, id, src, nombre, series, part, feat);
      }
    }
}

//DISPLAY POPULAR
const displayPop = function() {
  for (let index = 0; index < video.length; index++) {
    let element = video[index];
    let nombre = element["name"];
    let src = element["src"];
    let series = element["series"];
    let part = element["part"];
    let id = element["id"];
    
    if (series == "The Heart") {
      let addClassName = "sermon-video";
      createDiv(addClassName, id, src, nombre, series, part, mostPop);
    }
  }
}


//DISPLAY ALL
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

displayFeat();
displayPop();
displayAll();