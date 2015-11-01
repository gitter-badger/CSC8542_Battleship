// Check a shot against a list of ships
// Return true if shot hit something, false otherwise
function CheckForHit(shot_x, shot_y, ship_list)
{
	for(idx = 0; idx < ship_list.length; idx++)
	{
		var ship = ship_list[idx];
		var ship_pos_x = ship.pos_x;
		var ship_pos_y = ship.pos_y;
		
		for(ship_idx = 0; ship_idx < ship.length; ship_idx++)
		{
			if(ship_pos_x == shot_x && ship_pos_y == shot_y)
			{
				return true;
			}
			
			if(ship.direction == "up")
			{
				ship_pos_y--;
			}
			if(ship.direction == "down")
			{
				ship_pos_y++;
			}
			if(ship.direction == "left")
			{
				ship_pos_x--;
			}
			if(ship.direction == "right")
			{
				ship_pos_x++;
			}
		}
	}
	
	return false;
}