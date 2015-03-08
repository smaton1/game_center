//Arrary of the cards
var memory_array = ['A','A','B','B','C','C','D','D','E','E','F','F','G','G','H','H','I','I','J','J','K','K','L','L',];

var memory_value = [];

var memory_tile_ids = [];

//store the number of tiles that have been flipped
var tiles_flipped = 0;

//A shuffle method that will be used to shuffle the board
Array.prototype.memory_tile_shuffle = function(){
  var i = this.length, j, temp;
  while(--i > 0){
    j = Math.floor(Math.random() * (i+1));
    temp = this[j];
    this[j] = this[i];
    this[i] = temp;
  };
};


function newBoard(){
  tiles_flipped = 0;
  var output = '';
  memory_array.memory_tile_shuffle();
  for(var i = 0; i <memory_array.length; i++) {
    output += '<div id="tile_'+i+'" onclick="memoryFlipTile(this,\''+memory_array[i]+'\')"></div>';
  };
  document.getElementById('memory_board').innerHTML = output;

  
};
