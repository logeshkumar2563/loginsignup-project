  // Function to show login form and hide signup form
  var a =document.getElementById("loginbtn");
  var b = document.getElementById("sigupbtn");
  var x = document.getElementById("log");
  var y =document.getElementById("register");

  
  
  function login() {
  x.style.left = "4px";
  y.style.right="-520px";
  a.className +=" white-btn";
  b.className = "btn";
}
  function reg() {
  x.style.left = "-520px";
  y.style.right="4px";
  b.className +=" white-btn";
  a.className = "btn";
}
function mymenu() {
  var menu = document.querySelector('nav .menu ul');
  menu.classList.toggle('active');
}

