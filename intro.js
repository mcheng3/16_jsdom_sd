var x = 8

var addElement = function(){
	var list = document.getElementById('thelist');
	var newElement = document.createElement('li');
	newElement.innerHTML = 'item ' + x;
	x++;
	list.appendChild(newElement);
	newElement.addEventListener('mouseover', changeHeading);
	newElement.addEventListener('mouseout', removeHeading);
	newElement.addEventListener('click', removeItem);
	
};

var changeHeading = function(){
	//console.log(this);
	var heading = document.getElementById('h');
	heading.innerHTML = this.innerHTML;
};

var removeHeading = function(){
	//console.log(this);
	var heading = document.getElementById('h');
	heading.innerHTML = 'Hello World!';
};


var removeItem = function(){
	this.remove();
};
	
var listItems = document.getElementsByTagName('li');
var i;
for(i = 0; i < listItems.length; i++){
	listItems[i].addEventListener('mouseover', changeHeading);
	listItems[i].addEventListener('mouseout', removeHeading);
	listItems[i].addEventListener('click', removeItem);
}

var b = document.getElementById('b');
b.addEventListener( 'click', addElement);




