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
  