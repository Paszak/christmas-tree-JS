function drawTree (heightTree) {
	var star;
	for (var i = 0 ; i < heightTree ; i++) {
		star = "";
		
		for (var j = 0 ; j < i ; j++) {
			star += "* ";
		}

		console.log(star);
	}
}