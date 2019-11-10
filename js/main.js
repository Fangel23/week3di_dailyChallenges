let heading = document.createElement("h1");
heading.innerText = "Shopping List: ";
let body = document.querySelector("body");
body.appendChild(heading);



let user_input = document.createElement("input");
body.appendChild(user_input);

let list = document.createElement("ul");
body.appendChild(list);


let button = document.createElement("button");
body.appendChild(button);
button.innerText = "Add item";

let button1 = document.createElement("button");
body.appendChild(button1);
button1.innerText = "Reset";


button.addEventListener("click", add_list_items);
button1.addEventListener("click", clear_list);



function add_list_items(){
	
	let element = document.createElement("li");
	list.appendChild(element);
	element.innerText = user_input.value;
	clear_input_field();
}
function clear_input_field(){
	user_input.value = "";
}

function clear_list(){
	var item_in_list = document.getElementsByTagName("li");
	var len = item_in_list.length;
	for (let i = 0; i<len; i++){
		item_in_list[0].remove();
	} 
}
