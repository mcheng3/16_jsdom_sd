


// -------------------------PART 1-----------------------------------
var x = 8

var addElement = function(e){
	var list = document.getElementById('thelist');
	var newElement = document.createElement('li');
	newElement.innerHTML = 'item ' + x;
	x++;
	list.appendChild(newElement);
	newElement.addEventListener('mouseover', changeHeading);
	newElement.addEventListener('mouseout', removeHeading);
	newElement.addEventListener('click', removeItem);

};

var changeHeading = function(e){
	// console.log(this);
	var heading = document.getElementById('h');
	heading.innerHTML = this.innerHTML;
};

var removeHeading = function(e){
	// console.log(this);
	var heading = document.getElementById('h');
	heading.innerHTML = 'Hello World!';
};


var removeItem = function(e){
	this.remove();
};

// loop through the list and add events for each item
var listItems = document.getElementsByClassName('orig_list');
var i;
for(i = 0; i < listItems.length; i++){
	listItems[i].addEventListener('mouseover', changeHeading);
	listItems[i].addEventListener('mouseout', removeHeading);
	listItems[i].addEventListener('click', removeItem);
}

var b = document.getElementById('b');
b.addEventListener( 'click', addElement);


// -------------------------PART 2-----------------------------------
var fibList = document.getElementById('fibList');
var fibnum = 1;

var fibonacci = function(n){
    if(n<=2){
        return 1;
    }
    else{
        return fibonacci(n-1)+fibonacci(n-2);
    }
}

var addFib = function(e){
	var newElement = document.createElement('li');
	newElement.innerHTML = fibonacci(fibnum);
	fibList.appendChild(newElement);
	fibnum++;
}

var fibButton = document.getElementById('fibButton');
fibButton.addEventListener( 'click', addFib);
