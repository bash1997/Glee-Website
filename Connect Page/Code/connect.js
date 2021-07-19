//needs chat rooms(https://code.tutsplus.com/tutorials/how-to-create-a-simple-web-based-chat-application--net-5931)
//hideSocialFeed(document.getElementById(\"toFeeds\"))  <-- onclick function for fourth button not working
function showSocialFeed (obj) {
    obj.innerHTML ="<div><button><a class='gleeBtn' href=''>Common</a></button></div>\
    <div><button><a class='gleeBtn' href=''>Prayer Requests</a></button></div>\
    <div><button><a class='gleeBtn' href=''>Bible Study</a></button></div>\
    <div><button><a class='gleeBtn' onclick=''>Hide</a></button></div>";
}


function hideSocialFeed (obj){
    obj.innerHTML = 'See the Social Feed'
}

//needs storage/ process for accepting input
function showConnectCard(obj){
    obj.innerHTML = '<label for="fullName">Enter Name: </label>\
    <input type="text" id="fullName" name="fullName" placeholder="Full Name!">\
    <br/>\
    <label for="email">Enter Email: </label>\
    <input type="text" id="email" name="email" placeholder="Email!">\
    </br>\
    <label for="gender">Gender: </label>\
    <input type="text" id="gender" name="gender" placeholder="Gender!">\
    </br>\
    <label for="dob">Enter Your Birthday: </label>\
    <input type="text" id="dob" name="dob" placeholder="Birthday!"></input>';
}

function hideConnectCard(obj){
    obj.innerHTML = 'Fill Out Our Connection Card'
}

function toggleMobileMenu() {
    var x = document.getElementById('menuLinks');
    if (x.style.display === "flex") {
    x.style.display = "none";
    } else {
    x.style.display = "flex";
    }
}