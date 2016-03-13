$(document).ready(function(){
  newGame = new Game;
  $("#board").on("click", '.board-column', function(){
    $("#player2").toggle();
    $("#player1").toggle();
  })


  $("#board").on("click", '.cell', function(event){
    // debugger;
      var player_1_color = "red"
      var player_2_color = "black"

    if($("#player1").is(":visible")){
      var column_id = $(event.target).parent().attr('id');
      newGame.drop(column_id, player_1_color);
      // newGame.drop(column_id, player_2_color);
      // console.log(newGame.board);
      // $(event.target).html('');
      var index = 1;
      newGame.board[column_id].forEach(function(cell){
        if (cell === player_1_color) {
          $('#'+ column_id + ' .cell:nth-child(' + (7 - index) +')').css('background-color', player_1_color);
          index++;
        } else {
          $('#'+ column_id + ' .cell:nth-child(' + (7 - index) +')').css('background-color', player_2_color);
          index++;
        }
      });
    } else {
      var column_id = $(event.target).parent().attr('id');
      newGame.drop(column_id, player_2_color);
      console.log(newGame.board);
      var index = 1;
      newGame.board[column_id].forEach(function(cell){
        if (cell === player_1_color) {
          $('#'+ column_id + ' .cell:nth-child(' + (7 - index) +')').css('background-color', player_1_color);
          index++;
        } else {
          $('#'+ column_id + ' .cell:nth-child(' + (7 - index) +')').css('background-color', player_2_color);
          index++;
        }
      });


    }

    if (newGame.checkWin() === true) {
      alert('You Win!!!!!!!!!!');
      location.reload();
    };



  });

});
