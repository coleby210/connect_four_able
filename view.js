$(document).ready(function(){
  newGame = new Game;
  $("#board").on("click", '.board-column', function(){
    $("#player2").toggle();
    $("#player1").toggle();
  })


  $("#board").on("click", '.cell', function(event){
    // debugger;

    if($("#player1").is(":visible")){
      var column_id = $(event.target).parent().attr('id');
      newGame.drop(column_id, 'red');
      // newGame.drop(column_id, 'black');
      console.log(newGame.board);
      // $(event.target).html('');
      var index = 1;
      newGame.board[column_id].forEach(function(cell){
        if (cell === 'red') {
          $('#'+ column_id + ' .cell:nth-child(' + (7 - index) +')').css('background-color', 'red');
          index++;
        } else {
          $('#'+ column_id + ' .cell:nth-child(' + (7 - index) +')').css('background-color', 'black');
          index++;
        }
      });
    } else {
      var column_id = $(event.target).parent().attr('id');
      newGame.drop(column_id, 'black');
      console.log(newGame.board);
      var index = 1;
      newGame.board[column_id].forEach(function(cell){
        if (cell === 'red') {
          $('#'+ column_id + ' .cell:nth-child(' + (7 - index) +')').css('background-color', 'red');
          index++;
        } else {
          $('#'+ column_id + ' .cell:nth-child(' + (7 - index) +')').css('background-color', 'black');
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
