const btns = document.querySelectorAll(".num");
const label = document.querySelector("p");
const equate = document.querySelector(".equate");
const del = document.querySelector(".delete");
const clear = document.querySelector(".clear");
const errorM = document.querySelector(".error-message");


btns.forEach((btnEl) => {
  btnEl.addEventListener("click", function () {
    if (label.innerHTML == "0") label.innerHTML = "";
    if (btnEl.innerHTML == "." && label.innerHTML == 0) label.innerHTML = 0;
    if (label.innerHTML == "span") label.innerHTML = btnEl.innerHTML;
    label.innerHTML += btnEl.innerHTML;
    console.log(label.innerHTML);
  });
});

equate.addEventListener("click", function () {
  try {
    let equ = eval(label.innerHTML);
    label.innerHTML = equ;
  } catch (error) {
    label.innerHTML = `<span class="error-message" style="color: red; font-family: Segoe UI ">Syntax error</span>`;
  }
});

let x = 0;

del.addEventListener("click", function () {
  x = 1;
  let del = label.innerHTML;
  let sliceDel = del.slice(0, del.length - x);
  label.innerHTML = sliceDel;
  if (label.innerHTML == "") {
    label.innerHTML = "0";
  }
  if (errorM) {
    del.style.color = "#ccc";
    del.ariaDisabled;
  }
});

clear.addEventListener("click", function () {
  label.innerHTML = "0";
});
