// Creates a game grid
var gameGrid = function(){};

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
	if(!((_pos_x - length) < 0))
	{
		possibleDirections.push("left");
	}
	if(!((_pos_x + length) > 10))
	{
		possibleDirections.push("right");
	}
	if(!((_pos_y - length) < 0))
	{
		possibleDirections.push("up");
	}
	if(!((_pos_y + length) > 10))
	{
		possibleDirections.push("down");
	}
	
	_direction = possibleDirections[Math.floor(Math.random()*possibleDirections.length)];
	
	console.log(_name+": length: "+_length+" ("+_pos_x+","+_pos_y+"), "+_direction);
	
	return {name:_name,
			length:_length,
			pos_x:_pos_x,
			pos_y:_pos_y,
			direction:_direction};
}

module.exports = new gameGrid();