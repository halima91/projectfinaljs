
// event Listeners
eventListeners();
function eventListeners() {
  const ui = new UI()
  // preloader
  window.addEventListener('load', function () {
    ui.hidePreloader();
  })
  // nav btn
  document.querySelector('.navBtn').addEventListener('click', function () {
    ui.showNav();
  })
  // control the video
  document.querySelector('.video__switch').addEventListener('click', function () {
    ui.videoControls()
  })
}
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
    document.getElementById("nav-about").classList.add('nav-deco');
    document.getElementById("nav-home").classList.remove('nav-deco');
  }
//   else if (document.body.scrollTop === 0 ||document.documentElement.scrollTop === 0){ document.getElementById("btn_scroll").style.display = "none";}
  else {
    document.getElementById("nav-about").classList.remove('nav-deco');
    document.getElementById("nav-home").classList.add('nav-deco');
  }
}






//constructor function
function UI() {
}

// hide preloader
UI.prototype.hidePreloader = function () {
  document.querySelector('.preloader').style.display = "none";
}
// show Nav
UI.prototype.showNav = function () {
  document.querySelector('.nav').classList.toggle('nav--show')
}
// play/pause the vidoe
UI.prototype.videoControls = function () {
  let btn = document.querySelector('.video__switch-btn');
  if (!btn.classList.contains('btnSlide')) {
    btn.classList.add('btnSlide')
    document.querySelector('.video__item').pause()
  }
  else {
    btn.classList.remove('btnSlide')
    document.querySelector('.video__item').play()
  }
}
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
    document.getElementById("btn_scroll").style.display = "block";
  }
//   else if (document.body.scrollTop === 0 ||document.documentElement.scrollTop === 0){ document.getElementById("btn_scroll").style.display = "none";}
  else {
    
    document.getElementById("btn_scroll").style.display = "none";
  }
}

