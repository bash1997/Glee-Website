$( document ).ready(function() {
  //HEART 1 VIDEO
  var $heart1 = $("#heart1");

  $heart1.on('mouseenter', function (){
    $heart1.get(0).play();
  });

  $heart1.on('mouseout', function (){
    $heart1.get(0).pause();
  });

  //HEART 2 VIDEO
  var $heart2 = $("#heart2");

  $heart2.on('mouseenter', function (){
    $heart2.get(0).play();
  });

  $heart2.on('mouseout', function (){
    $heart2.get(0).pause();
  });

  //HEART3 VIDEO
  var $heart3 = $(".heart3");

  $heart3.on('mouseenter', function (){
    $heart3.get(0).play();
  });

  $heart3.on('mouseout', function (){
    $heart3.get(0).pause();
  });

//PROMO VIDEO
var $promo = $(".promo");

$promo.on('mouseenter', function (){
  $promo.get(0).play();
});

$promo.on('mouseout', function (){
  $promo.get(0).pause();
});

});
