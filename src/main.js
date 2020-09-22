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
  var screenPosition = window.innerHeight / 1.3;

  if(userPosition < screenPosition) {
    userAppear.classList.add('user__appear');
  }
}

window.addEventListener('scroll', scrollAppear);