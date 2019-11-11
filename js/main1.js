var box = document.getElementById("box-div");
const root = document.getElementsByClassName("box");





box.addEventListener("click", function(event) {
    let a = event.clientX;
    let b = event.clientY;
    box.style.left = a + "px";
    box.style.top = b + "px";
    console.log ( "click " + event.clientX  + " " +  event.clientY  );
  });


box.addEventListener("mouseenter", mouseEnter);
box.addEventListener("mouseleave", mouseLeave);
function mouseEnter() {
	box.style.backgroundColor = "green";
};
function mouseLeave() {
	box.style.backgroundColor = "black";
};

box.addEventListener("click", clicked_me);
	function clicked_me() {
		box.innerHTML = "Stop Clicking me, stupid!"
	};

box.addEventListener("wheel", zoom);
	function zoom() {
		this.style.font = "Georgia";
	}
