var Game = function(){
  this.board = [[],[],[],[],[],[],[]];
  this.lastPosition = new Array;
};

Game.prototype.checkFull = function(num){
  return (this.board[num].length === 6) ? true: false;
}

Game.prototype.drop = function(num, color){
  if (!this.checkFull(num)) {
    var column = this.board[num];
    column.push(color);
  };
  this.lastPosition = [parseInt(num), this.board[num].length-1];
}

Game.prototype.checkWin = function(){
  var x = this.lastPosition[0];
  var y = this.lastPosition[1];

  //calculate south
  var south = 0;
  for (var i = 1; i < (y + 1); i++ ) {
    if (this.board[x][y-i] !== this.board[x][y]) {
      break;
    }
    south++;
  };

  //calculate west
  var west = 0;
  for (var i = 1; i < (x + 1); i++ ) {
    if (this.board[x-i][y] !== this.board[x][y]) {
      break;
    }
    west++;
  };

  //calculate east
  var east = 0;
  for (var i = 1; i < (7 - x); i++ ) {
    if (this.board[x+i][y] !== this.board[x][y]) {
      break;
    }
    east++;
  };

  //calculate northWest
  var northWest = 0;
  for (var i = 1; i < (x + 1); i++ ) {
    if (this.board[x-i][y+i] !== this.board[x][y]) {
      break;
    }
    northWest++;
  };

  //calculate northEast
  var northEast = 0;
  for (var i = 1; i < (7 - x); i++ ) {
    if (this.board[x+i][y+i] !== this.board[x][y]) {
      break;
    }
    northEast++;
  };


  //calculate southEast
  var southEast = 0;
  for (var i = 1; i < (y + 1); i++ ) {
    if (this.board[x+i][y-i] !== this.board[x][y]) {
      break;
    }
    southEast++;
  };

  //calculate southWest
  var southWest = 0;
  for (var i = 1; i < (y + 1); i++ ) {
    if (this.board[x-i][y-i] !== this.board[x][y]) {
      break;
    }
    southWest++;
  };

  //check south
  if (south >= 3){
    return true;
  };

  //check east + west
if (east + west >= 3){
    return true;
  };

  //check northWest + southEast
if (northWest + southEast >= 3){
    return true;
  };

  //check northEast + southWest
if (northEast + southWest >= 3){
    return true;
  };

  //return false because no winner
  return false;
};

// game.drop(1, 'black');
// game.drop(2, 'red');
// game.drop(2, 'black');
// game.drop(3, 'red');
// game.drop(3, 'red');
// game.drop(3, 'black');
// game.drop(4, 'red');
// game.drop(4, 'red');
// game.drop(4, 'red');
// console.log(game.board);
// console.log(game.checkWin())
// game.drop(4, 'black');
// console.log(game.board);
// console.log(game.checkWin())

// game.drop(1, 'black');
// game.drop(2, 'black');
// console.log(game.checkWin())
// game.drop(3, 'black');
//console.log(game.lastPosition);
