//CONTROL VIDEO
const controlVideo = (x) => {
  const other = document.querySelectorAll("VIDEO");
  const id = document.querySelector(`#${x} VIDEO`);
  
  for (i = 0; i < other.length; i++) {
    if (!other[i].paused && other[i] != id) {
      other[i].load(); //reloads video
      other[i].controls = false;
    }
  }
  if (id.paused && id.currentTime >= 0 && !id.ended) {
    id.play();
  } else {
      id.pause();
  }
}