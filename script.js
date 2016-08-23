function myFunction() {
	var y = document.getElementById("letter").value;
	var x = document.getElementById("word").value;
	var split = x.split("");
	var i = 0,
	    count = 0;
	while (split[i] != null) {
		if (split[i] === y) {
			count++;
		}
		i++;
	}
	document.getElementById("demo").innerHTML = count;
}