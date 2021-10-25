let reload;
let width;
const overylayCard = () => {
    const base = document.getElementById("newHere");
    const connection = document.getElementsByClassName("connection");
    const img = document.getElementsByClassName("card-img");
    const cardInfo = document.getElementsByClassName("card-info");
    //alert(base.offsetWidth);
    if (screen.width <= 800 && screen.width >= 600 ) {
        for (let i = 0; i < connection.length; i++) {
            let height = base.offsetHeight + "px";
            connection[i].style.height = height;

            if (cardInfo.length === img.length) {
                for (let n = 0; n < cardInfo.length; n++) {
                    cardInfo[n].style.height = height;
                    img[n].style.height = height;
                }
            } else {
                for (let n = 0; n < cardInfo.length; n++) {
                    cardInfo[n].style.height = height;
                    
                    for (let x = 0; x < img.length; x++) {
                        img[x].style.height = height;
                    }
                }
            }

            

        }
        
    }

    if (screen.width >= 800) {
        let newheight;
        width = width;
        function changeheight(){
            if (cardInfo[cardInfo.length - cardInfo.length].offsetHeight > cardInfo[cardInfo.length - 1].offsetHeight){ //&& cardInfo[a].offsetHeight <= connection[a].offsetHeight){
                newheight = cardInfo[cardInfo.length - cardInfo.length].offsetHeight;
            } else {
                newheight = cardInfo[cardInfo.length - 1].offsetHeight;
            }
            for (let a = 0; a < cardInfo.length; a++) {
                cardInfo[a].style.height = newheight + "px";
                
            }
            
            
        }

        for (let a = 0; a < cardInfo.length - 1; a++) {
            if (cardInfo[a].offsetWidth !== width) {
                cardInfo[a].style.height = "unset";
                cardInfo[a++].style.height = "unset";
                width = cardInfo[a].offsetWidth;
                changeheight(a);

            } else {
                changeheight(a);
            }
    
        }
    }
    reload = setTimeout(overylayCard, 1000);
};

overylayCard();