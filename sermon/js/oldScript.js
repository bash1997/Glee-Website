import video from "./sermon/js/video.js";
import { $video1 } from "./sermon/js/hoverPlay.js";

const fullList = document.querySelector("#fullList");
const favList = document.querySelector("#most-pop");
const featured = document.querySelector("#featVid");
let sermonDiv = null;
// function hoverPlay(vid) {
//   const name = vid;
//   name.play();
// }

const displayVideos = function () {
  for (let index = 0; index < video.length; index++) {
    const vidObj = video[index];

    const name = vidObj["name"];
    const src = vidObj["src"];
    const series = vidObj["series"];
    const desc = vidObj["description"];
    const part = vidObj["part"];

    let createId = "video" + [index + 1];

    if (index == 16) {
      let sermonDiv = document.createElement("DIV");
      sermonDiv.innerHTML = `<iframe width="100%" height="auto" src=${src} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen preload></iframe><div class="video-info"><h5>${series}</h5><h6>${name}</h6></div>`;
      sermonDiv.classList.add("feat-video");
      sermonDiv.setAttribute("id", "heroVideo");
      featured.append(sermonDiv);
    }

    if (series == "The Heart") {
      let createId = "heart" + part;

      sermonDiv = document.createElement("DIV");
      sermonDiv.innerHTML = `<iframe width="100%" height="auto" src="${src}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen preload></iframe><div class="video-info"><h5>${series}</h5><h6>${name}</h6></div>`;
      sermonDiv.classList.add("sermon-video");
      sermonDiv.setAttribute("id", createId);
      favList.append(sermonDiv);
    }

    sermonDiv = document.createElement("DIV");
    sermonDiv.innerHTML = `<iframe width="100%" height="auto" src=${src} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen preload></iframe>`;
    sermonDiv.classList.add("sermon-video");
    sermonDiv.setAttribute("id", createId);
    fullList.append(sermonDiv);
  }
};

displayVideos();
