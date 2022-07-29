let screen = document.getElementById("screen");
let display = " ";
let btnArray = document.querySelectorAll("button");
for (i of btnArray) {
  i.addEventListener("click", (e) => {
    btnText = e.target.innerText;
    if (btnText == "x") {
      btnText = "*";
      display += btnText;
      screen.value = display;
    } else if (btnText == "C") {
      display = " ";
      screen.value = display;
    } else if (btnText == "=") {
      display = eval(display);
      screen.value = display;
      // screen.value = display +"="+ eval(display);
    } else if (btnText == "%") {
      display = eval(display) / 100;
      screen.value = display;
    } else {
      display += btnText;
      screen.value = display;
    }
  });
}
document.addEventListener('keydown', (event) => {
if(event.keyCode == 8){
display = " ";
      screen.value = display;
}
else if(event.keyCode == 13){
  display = "Welcome to Biraj's calculator";
        screen.value = display;
  }

}, false);

function theme(){
let th=document.getElementById("theme");
let md=document.getElementById("md");
let link=th.href;
console.log(link);
let main= link.substr(22);
console.log(main);
if(main== "calmodechange.css"){
  
  th.href= link.substr(0,22) + "calculator.css";
  md.classList.remove("fa-mountain-sun");
  md.classList.add("fa-moon");
}
else if(main== "calculator.css"){
  th.href= link.substr(0,22) + "calmodechange.css";
  md.classList.remove("fa-moon");
  md.classList.add("fa-mountain-sun");
}

}