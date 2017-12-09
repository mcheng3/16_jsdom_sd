var addElement = function(){
	var list = document.getElementById('thelist');
	var newElement = document.createElement('li');
	newElement.innerHTML = 'item 10';
	list.appendChild(newElement);
	
};

var changeHeading = function(h){
	var heading = document.getElementById('h');
	heading.innerHTML = h;
}
	

var b = document.getElementById('b');
b.addEventListener( 'click', addElement);

var listItems = document.getElementsByTagName('li');
for (i = 0; i < listItems.length; 
