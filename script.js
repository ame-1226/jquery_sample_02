// Fade Sample ////////////
$( function() {

  $(".fade").fadeTo(0,0.2); // 初期状態 20%

  $(".fade").hover(
    function(){
      $(this).fadeTo("slow", 0.5); // マウスが載ったら100%までフェードする
    },
    function(){
      $(this).fadeTo("slow", 0.2); // マウスが離れたら20%に戻す
    }
  );

});

// Animate Sample //////////
$( function(){
  $("#left").click( function(){
    $('#move').animate( { 'left': '-=500px' } , { 'duration': 1000 } );
  });
  $("#right").click( function(){
    $('#move').animate( { 'left': '+=500px' } , { 'duration': 1000 } );
  });
  $("#center").click( function(){
    var optionObj = new Object();
    optionObj.left = $('body').outerWidth() / 2 - 100;
    $('#move').animate( optionObj , { 'duration': 1000 } );
  });
});
