// Creates a game grid
var gameGrid = function(){};

// Ship positions is a 2-d array of the current status of the grid
// It is used to keep track of where ships have been placed and reject
// any ship locations that would intersect. 
// "false" = there are no ships in this square
// "true" = there is a ship in this square
var shipPositions = new Array(10);
for (var x = 0; x < 10; x++) 
{
  shipPositions[x] = new Array(10);
  for (var y = 0; y < 10; y++)
  {
	  shipPositions[x][y] = false;
  }
}

gameGrid.prototype.createGrid = function(){
	console.log('Creating Grid');
	
	_aircraft_carrier = Ship("Aircraft Carrier",5);
	_battleship = Ship("Battleship",4);
	_cruiser = Ship("Cruiser",3);
	_submarine = Ship("Submarine",3);
	_patrol_boat = Ship("Patrol Boat",2);
	
	var result = {
			shiplist: [
				_aircraft_carrier,
				_battleship,
				_cruiser,
				_submarine,
				_patrol_boat
			]
		};
	
	return result;
};

function Ship(name,length){
	_name = name;
	_length = length;
	_pos_x = Math.floor((Math.random() * 10) + 1);
	_pos_y = Math.floor((Math.random() * 10) + 1);
	
	var possibleDirections = [];
	if(!((_pos_x - length) < 0) && isValidLocation(_pos_x,_pos_y,_pos_x-length,_pos_y))
	{
		possibleDirections.push({dir:"left",end_x:_pos_x-length,end_y:_pos_y});
	}
	if(!((_pos_x + length) > 10) && isValidLocation(_pos_x,_pos_y,_pos_x+length,_pos_y))
	{
		possibleDirections.push({dir:"right",end_x:_pos_x+length,end_y:_pos_y});
	}
	if(!((_pos_y - length) < 0) && isValidLocation(_pos_x,_pos_y,_pos_x,_pos_y-length))
	{
		possibleDirections.push({dir:"up",end_x:_pos_x,end_y:_pos_y-length});
	}
	if(!((_pos_y + length) > 10) && isValidLocation(_pos_x,_pos_y,_pos_x,_pos_y+length))
	{
		possibleDirections.push({dir:"down",end_x:_pos_x,end_y:_pos_y+length});
	}
	
	_direction = possibleDirections[Math.floor(Math.random()*possibleDirections.length)];
	
	console.log(_name+": length: "+_length+" ("+_pos_x+","+_pos_y+"), "+_direction.dir);
	fillLocation(_pos_x,_pos_y,_direction.end_x,_direction.end_y);
	
	return {name:_name,
			length:_length,
			pos_x:_pos_x,
			pos_y:_pos_y,
			direction:_direction};
}

// Fill a ship's location in the shipGrid
function fillLocation(start_x, start_y, end_x, end_y)
{
	curr_x = start_x;
	curr_y = start_y;
	while(curr_x != end_x && curr_y != end_y)
	{
		shipPositions[curr_x][curr_y] = true
		
		// Change the grid location we are checking against
		if(curr_x < end_x)
		{
			curr_x++;
		}
		if(curr_x > end_x)
		{
			curr_x--;
		}
		if(curr_y < end_y)
		{
			curr_y++;
		}
		if(curr_y < end_y)
		{
			curr_y--;
		}
	}
}

// Checks a ship's start and end locations against the game grid
function isValidLocation(start_x, start_y, end_x, end_y)
{
	curr_x = start_x;
	curr_y = start_y;
	while(curr_x != end_x && curr_y != end_y)
	{
		if(shipPositions[curr_x][curr_y]==true)
		{
			return false;
		}
		
		// Change the grid location we are checking against
		if(curr_x < end_x)
		{
			curr_x++;
		}
		if(curr_x > end_x)
		{
			curr_x--;
		}
		if(curr_y < end_y)
		{
			curr_y++;
		}
		if(curr_y < end_y)
		{
			curr_y--;
		}
	}
	return true;
}

module.exports = new gameGrid();