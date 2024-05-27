const extendHex = (shortHex) => {
  let longHex = "#";
	for(let i = 0; i < shortHex.length; i++){
		if(shortHex[i] === "#"){
			continue;
		}
		longHex += shortHex[i] + shortHex[i];
	}
	return longHex;
}; 

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
