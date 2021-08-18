import video from "./sermon/js/video.js";

const popular = document.querySelector("#popular");

const displayPop = function () {
    for (let index = 0; index < video.length; index++) {
      const vidObj = video[index];
  
      const name = vidObj["name"];
      const src = vidObj["src"];
      const series = vidObj["series"];
      const desc = vidObj["description"];
      const part = vidObj["part"];

      popular.innerHTML="";
  
      if (series == "The Heart") {
        let createId = "heart" + part;
  
        sermonDiv = document.createElement("DIV");
        sermonDiv.innerHTML = `<iframe width="100% height="auto" src="${src}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen preload></iframe><div class="video-info"><h5>${series}</h5><h6>${name}</h6></div>`;
        sermonDiv.classList.add("sermon-video");
        sermonDiv.setAttribute("id", createId);
        popular.append(sermonDiv);
      }
    }
  };

displayPop();