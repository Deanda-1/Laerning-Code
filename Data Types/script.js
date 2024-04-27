let box = document.querySelector("#box");
let btn = document.querySelector("#btn");

function myFunction(e) {
  console.log(e);
  // alert("hola");
}

btn.addEventListener("click", myFunction);
