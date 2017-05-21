var pictures = ["assets/img/a1.jpg",
				"assets/img/a2.jpg", 
				"assets/img/a3.jpg", 
				"assets/img/a4.jpg"];
var imagenes = document.getElementById("imagenes");
pictures.forEach(function(url) {
	var li = document.createElement("li");
	var img = document.createElement("img");
	li.appendChild(img);
	img.setAttribute("src", url);
	imagenes.appendChild(li);
})
