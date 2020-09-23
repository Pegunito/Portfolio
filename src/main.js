import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

import "./scripts/reviews";
import "./scripts/skills";
import "./scripts/works";

// появление информации

function scrollAppear() {
  var userAppear = document.querySelector('.about__container');
  var userPosition = userAppear.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 1.2;

  if(userPosition < screenPosition) {
    userAppear.classList.add('user__appear');
  }
}

window.addEventListener('scroll', scrollAppear);

// анимация имени

const text = document.querySelector(".userinfo__title");
const strText = text.textContent;
const splitTExt = strText.split("");
text.textContent = "";

for(let i=0; i < splitTExt.length; i++) {
  text.innerHTML += "<span>"+ splitTExt[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick(){
  const span = text.querySelectorAll('span')[char];
  span.classList.add('fade');
  char++
  if(char ===splitTExt.length) {
    complete();
    return;
  }
}

function complete() {
  clearInterval(timer);
  timer = null;
}