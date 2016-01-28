$(document).ready(function(){
  // $(document).on('click', function(){
  //   for (var i=0; i<6; i++) {
  //     $('#column-0').append('<div class="cell"></div>');
  //   };

  // })
  $("#board").children().on("click", function(){
    $("#player2").toggle();
    $("#player1").toggle();
  })
  $("#board").children().on("click", function(event){
    if($("#player1").is(":visible")){
      if( $(event.target).hasClass("cell")) $(event.target).parent().children().css("background-color", "red");
      else {
        $(event.target).children().css("background-color", "red");
      };
    }
    else{
      if( $(event.target).hasClass("cell")) $(event.target).parent().children().css("background-color", "black");
      else {
        $(event.target).children().css("background-color", "black");
      };
    };
  });
});
