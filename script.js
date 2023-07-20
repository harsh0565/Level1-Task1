let x = document.querySelector("ul");
let a = 1;
function toggle() {
  if ((a%2==1)) {
  x.style.display = "block";
  a++;
  }
  else{
    
    x.style.display = "none"
    a++;
  }
}
function windowResizeHandler () {
    if ( screen.width > 600 )
    x.style.display = "";
}

window.addEventListener("resize", windowResizeHandler);  