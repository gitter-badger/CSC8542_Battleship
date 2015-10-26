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
		"aircraft_carrier" : _aircraft_carrier,
		"battleship" : _battleship,
		"cruiser" : _cruiser,
		"submarine" : _submarine,
		"patrol_boat" : _patrol_boat
		};
	
	return result;
};

function Ship(name,length){
	name = name;
	length = length;
	pos_x = Math.floor((Math.random() * 10) + 1);
	pos_y = Math.floor((Math.random() * 10) + 1);
	
	var possibleDirections = [];
	if(!((pos_x - length) < 0))
	{
		possibleDirections.push("left");
	}
	if(!((pos_x + length) > 10))
	{
		possibleDirections.push("right");
	}
	if(!((pos_y - length) < 0))
	{
		possibleDirections.push("up");
	}
	if(!((pos_y + length) > 10))
	{
		possibleDirections.push("down");
	}
	
	direction = possibleDirections[Math.floor(Math.random()*possibleDirections.length)];
	
	console.log(name+": length: "+length+" ("+pos_x+","+pos_y+"), "+direction);
	
	return {"name":name,"length":length,"pos_x":pos_x,"pos_y":pos_y,"direction":direction};
}

module.exports = new gameGrid();