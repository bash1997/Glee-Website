
//Social Feeds JS
//all in html React



// //needs chat rooms(https://code.tutsplus.com/tutorials/how-to-create-a-simple-web-based-chat-application--net-5931)

// function showSocialFeed (obj) {
//     obj.innerHTML ="<div'><button onclick=\"showCommonFeed(document.getElementById('tofeeds'))\">Common</button></div>\
//     <div><button><a class='gleeBtn' href=''>Prayer Requests</a></button></div>\
//     <div><button><a class='gleeBtn' href=''>Bible Study</a></button></div>\
//     <!--<div><button><a class='gleeBtn' onclick=''>Hide</a></button></div>-->"
//     ;
// }
// function showCommonFeed(obj){
//     obj.innerHTML ="<div id=\"commmonFeed\">oh hi</div>"
// }


// function hideSocialFeed (obj){
//     obj.innerHTML = 'See the Social Feed'
// }



//Connection Card JS


// //needs storage/ process for accepting input
// function showConnectCard(obj){
//     obj.innerHTML = '\
//     <div style="position: relative; width: 100%; height: 0; padding-top: 242.8571%;\
//     padding-bottom: 48px; box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16); margin-top: 1.6em; margin-bottom: 0.9em; overflow: hidden;\
//     border-radius: 8px; will-change: transform;">\
//     <iframe loading="lazy" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0;margin: 0;"\
//     src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAEkNe3r58g&#x2F;view?embed">\
//     </iframe>\
//     </div>\
//     <a href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAEkNe3r58g&#x2F;view?utm_content=DAEkNe3r58g&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link" target="_blank" rel="noopener">(New) Connection Card Design Not Approved </a> by Glee Church\
//     ';
// }

// function hideConnectCard(obj){
//     obj.innerHTML = 'Fill Out Our Connection Card'
// }

// function submitForm(){
//     let values = document.getElementById('input').value;
//     console.log(values);
    
// }

//Header JS


function toggleMobileMenu() {
    var x = document.getElementById('menuLinks');
    if (x.style.display === "flex") {
    x.style.display = "none";
    } else {
    x.style.display = "flex";
    }
}

let headerWidth;
window.onresize = window.onload = function(){
    headerWidth = this.innerWidth;
    //console.log(headerWidth);
    
    if(headerWidth>425){
        document.getElementById('menuLinks').style.display = 'flex'
    };
}

//Internship JS


let InternTestimonials = [
    'Glee Church is a great place that fosters an amazing community. Its been great being with like-minded people. <br></br>-Brad',
    'My time at Glee church has been a great one. I\'ve learned a lot about working within a team and about myself. <br></br>-Curtis',
    'Glee Church has given me an awesome opprotunity to explore my passion in a welcoming and encouraging enviorment. <br></br>-Joshua'
];

window.onload = pickTestimonials(document.getElementById('InternTest'), InternTestimonials)



//Volunteer JS

let VolTestimonials = [
    'Test 1',
    'Test 2',
    'Test 3'
];
window.onload = pickTestimonials(document.getElementById('VolTest'), VolTestimonials)




//Intern and Volunteer JS

//commented out posting two quotes need to decide on 1 or 2 for styling
function pickTestimonials(obj, Testimonials){
    let pick = Math.floor(Math.random()*Testimonials.length);
    //console.log(pick, 'first pick');

    
    //let pick2 = Math.floor(Math.random()*Testimonials.length);
    //console.log(pick2,'second pick')
    
    // if(pick == pick2){
    //     //alert('picks equal')
    //     while(pick == pick2){
    //         pick2 = Math.floor(Math.random()*Testimonials.length);
    //         //console.log(pick2, 'attempt Change')
    //     }
    //     //console.log(pick2, ' not equal to ', pick)
    // }
    
    obj.innerHTML = Testimonials[pick];
    
    //obj.innerHTML += '<br></br>'
    //obj.innerHTML += Testimonials[pick2]
    
}

//timer for testimonials changing

function Counter(test, elem, delay){
    let value = parseInt(elem.getAttribute("value"), 10)
    let interval;

    let list = test;

    function updateDisplay(quote){
        elem.innerHTML = quote;
    }

    function run(){
        value += 1;
        if(value == list.length) {
            value = 0;
        }

        elem.setAttribute("value", value);
        updateDisplay(list[value])
    }

    function start(){
        interval = window.setInterval(run, delay)
    }

    this.start = start;
}

let elem = document.getElementById("VolTest");

counter = new Counter(VolTestimonials, elem, 7000);
counter.start();

let elem2 = document.getElementById("InternTest");
counter2 = new Counter(InternTestimonials, elem2, 7000);
counter2.start();