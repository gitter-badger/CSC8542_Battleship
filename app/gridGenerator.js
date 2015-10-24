// Creates a game grid
var gameGrid = function(){};

gameGrid.prototype.createGrid = function(){
	console.log('Creating Grid');
	
	aircraft_carrier = Ship("Aircraft Carrier",5);
	battleship = Ship("Battleship",4);
	cruiser = Ship("Cruiser",3);
	submarine = Ship("Submarine",3);
	patrol_boat = Ship("Patrol Boat",2);
	
	return {};
};

var Ship = function(name,length){
	this.name = name;
	this.length = length;
	this.pos_x = Math.floor((Math.random() * 10) + 1);
	this.pos_y = Math.floor((Math.random() * 10) + 1);
	
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
	
	this.direction = possibleDirections[Math.floor(Math.random()*possibleDirections.length)];
	
	console.log(name+": length: "+length+" ("+pos_x+","+pos_y+"), "+direction);
}

module.exports = new gameGrid();