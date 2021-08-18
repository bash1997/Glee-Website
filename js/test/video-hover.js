$( document ).ready(function() {
  import { video } from "./js/modules/video.js";

  const sermonDiv = document.querySelector(".sermon-gallery");

  const structureDta = function () {
    //grab name, src, pastor, series, description, date
    for (let index = 0; index < video.length; index++) {
      const videoObj = video[index];
      console.log(videoObj);
      
    }
  };
  const displayVideos = async function (series, page) {
    //iFrame
    
    sermonDiv.innerHTML = `<div class="sermon-video">
        <iframe width="560" height="315" src={$...video.src} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>`;
    //from loop
    //Hover play
  
    $heart1.on('mouseenter', function (){
      $heart1.get(0).play();
    });

    $heart1.on('mouseout', function (){
      $heart1.get(0).pause();
    });

  };

  structureDta();

});