function drawTree (heightTree) {
	var star;
	for (var i = 1 ; i <= heightTree ; i++) {
		star = "";
		
		for (var j = i ; j < heightTree ; j++) {
			star += " ";
		}

		for(k=0;k<(i*2)-1;k++) {
   			 star += "*";
  		}
		console.log(star);
	}
}

drawTree(15);