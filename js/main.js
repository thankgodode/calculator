const btns = document.querySelectorAll(".num");
const label = document.querySelector("p");
const equate = document.querySelector(".equate");
const del = document.querySelector(".delete");
const clear = document.querySelector(".clear");

btns.forEach((btnEl) => {
  btnEl.addEventListener("click", function () {
if(label.innerHTML == 0) label.innerHTML=""
    label.innerHTML += btnEl.innerHTML;
  });
});

equate.addEventListener("click", function () {
  try {
    let equ = eval(label.innerHTML);
    label.innerHTML = equ;
  } catch (error) {
    label.innerHTML = "Syntax error";
  }
});

let x = 0;

del.addEventListener("click", function () {
  x = 1;
  let del = label.innerHTML;
  let sliceDel = del.slice(0, del.length - x);
  label.innerHTML = sliceDel;
  console.log(sliceDel);
  if (label.innerHTML == "") {
    label.innerHTML = 0
  }
});

clear.addEventListener("click", function () {
  label.innerHTML = 0
}); 
