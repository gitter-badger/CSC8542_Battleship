// Creates a game grid
var gameGrid = function(){};

gameGrid.prototype.createGrid = function(){
	console.log('Creating Grid');
	
	return {};
};

class Ship
{
	constructor(name,length)
	{
		this.name = name;
		this.length = length;
		this.pos_x = Math.floor((Math.random() * 10) + 1);
		this.pos_y = Math.floor((Math.random() * 10) + 1);
		
		var possibleDirections = [];
		if(!((pos_x - length) < 0))
		{
			console.log("Adding left to "+name);
			possibleDirections.push("left");
		}
		if(!((pos_x + length) > 10))
		{
			console.log("Adding right to "+name);
			possibleDirections.push("right");
		}
		if(!((pos_y - length) < 0))
		{
			console.log("Adding up to "+name);
			possibleDirections.push("up");
		}
		if(!((pos_y + length) > 10))
		{
			console.log("Adding down to "+name);
			possibleDirections.push("down");
		}
	}
}

module.exports = new gameGrid();