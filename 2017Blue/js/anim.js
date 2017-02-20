var aIntro = document.querySelector(".menu-intro a");
var aSpace = document.querySelector(".menu-space a");
var aRoom = document.querySelector(".menu-room a");


aIntro.addEventListener("mouseover", goRed);
aIntro.addEventListener("mouseout", goBlack);

aSpace.addEventListener("mouseover", goRed);
aSpace.addEventListener("mouseout", goBlack);

aRoom.addEventListener("mouseover", goRed);
aRoom.addEventListener("mouseout", goBlack);

function goRed(evt){
  var target = evt.target;
  target.style.color = "red";  //그냥 바로 쓸 수 있다..? 전역처리 아닌데? evt의 위력?


  if(target === aIntro){
    var showIntro = document.querySelector(".show-intro");
    showIntro.style.display = "block";
  }else if(target === aSpace){
    var showSpace = document.querySelector(".show-space");
    showSpace.style.display = "block";
  }else if(target === aRoom){
    var showRoom = document.querySelector(".show-room");
    showRoom.style.display = "block";
  }

  console.log(showIntro);

}

function goBlack(evt){
  var target = evt.target;
  target.style.color = "black";

  var showIntro = document.querySelector(".show-intro");
  showIntro.style.display = "none";

}
