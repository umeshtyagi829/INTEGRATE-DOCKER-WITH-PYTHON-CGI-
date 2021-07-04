function myfun() { 
	var data = document.getElementById("in1").value
	if ((((data.includes("how"))) && ((data.includes("are")))) == false) {
		var xhr = new XMLHttpRequest();

		// launch container
		if (((data.includes("container")) || (data.includes("containers")))&& ((data.includes("create")) || (data.includes("execute")))) {
			var conName = prompt("Enter Container Name : ")
			var imageName = prompt("Enter Image Name : ")
			xhr.open("GET", "http://192.168.43.56/cgi-bin/cgi.py?imageName=" + imageName +"&conName=" + conName + "&data=" + data, true)
		}

		// pull image
		else if (((data.includes("image"))) && ((data.includes("download")) || (data.includes("pull")))) {
			var imageName = prompt("Enter Image Name : ")
			xhr.open("GET", "http://192.168.43.56/cgi-bin/docker.py?imageName=" + imageName + "&data=" + data, true)
		}

		// for delete container
		else if (((data.includes("delete")) || (data.includes("remove"))) && ((data.includes("container")))) {
			var conName = prompt("Enter Container Name : ")
			xhr.open("GET", "http://192.168.43.56/cgi-bin/docker.py?conName=" + conName + "&data=" + data, true)
		}

		// for delete image
		else if (((data.includes("delete")) || (data.includes("remove"))) && ((data.includes("image")))) {
			var imageName = prompt("Enter Image Name : ")
			xhr.open("GET", "http://192.168.43.56/cgi-bin/docker.py?imageName=" + imageName + "&data=" + data, true)
		}

		else {
			xhr.open("GET", "http://192.168.43.56/cgi-bin/docker.py?data=" + data, true)
		}

		xhr.send();
		xhr.onload = function () {
			var output = xhr.responseText;

			document.getElementById("d1").innerHTML = output;
		}
		document.getElementById('in1').value = "";

	}
	else {
		document.getElementById("d1").innerHTML = "Fine, Tell me ...!!, What can I do for you... ";
	}
}
