//Arrary of the cards
var memory_array = ['A','A','B','B','C','C','D','D','E','E','F','F','G','G','H','H','I','I','J','J','K','K','L','L',];

var memory_values = [];

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

//The function to create the new board. sets tiles flipped to 0 and makes the output empty. Then the cards (memory array) are shuffled and a new div is created for each card or tile.
function newBoard(){
  tiles_flipped = 0;
  var output = '';
  memory_array.memory_tile_shuffle();
  for(var i = 0; i <memory_array.length; i++) {
    output += '<div id="tile_'+i+'" onclick="memoryFlipTile(this,\''+memory_array[i]+'\')"></div>';
  };
  document.getElementById('memory_board').innerHTML = output;  
};

function memoryFlipTile(tile,val){
  if(tile.innerHTML == "" && memory_values.length < 2){
    tile.style.background = '#FFF';
    tile.innerHTML = val;
    if(memory_values.length == 0){
      memory_values.push(val);
      memory_tile_ids.push(tile.id);
    } else if(memory_values.length == 1) {
      memory_values.push(val);
      memory_tile_ids.push(tile.id);
      if(memory_values[0] == memory_values[1]) {
        tiles_flipped += 2;
        // clear both of the arrays
        memory_values = [];
        memory_tile_ids = [];
        // Check to see if the whole board has been cleared
        if(tiles_flipped == memory_array.length) {
          alert("Complete");
          document.getElementById('memory_board').innerHTML = "";
          newBoard();
        }
      } else {
        function flip2Back(){
          //Flip the two tiles back over if they are not a match
          var tile_1 = document.getElementById(memory_tile_ids[0]);
          var tile_2 = document.getElementById(memory_tile_ids[1]);
          tile_1.style.background = 'black'
          tile_1.innerHTML = "";
          tile_2.style.background = 'black'
          tile_2.innerHTML = "";
          memory_values = [];
          memory_tile_ids = [];
        }
        setTimeout(flip2Back, 700)
      }
    }
  }
}

