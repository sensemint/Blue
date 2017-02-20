var menu = document.querySelector(".menu");
var show = document.querySelector(".show");

menu.addEventListener("mouseover", goRed);
menu.addEventListener("mouseout", goBlack);

show.addEventListener("mouseover", goRed);
show.addEventListener("mouseout", goBlack);
console.log(show);
console.log("showwkwkkwkwkw?");

//red and block
function goRed(evt){
  var target = evt.target;
  target.style.color = "red";  //그냥 바로 쓸 수 있다..? 전역처리 아닌데? evt의 위력?


  var showIntro = document.querySelector(".show-intro")
  var showSpace = document.querySelector(".show-space")
  var showRoom = document.querySelector(".show-room")

  var className = target.className;
  // console.log("className 은 " + className + "입니다.");

  if(className === "menu-intro" || target === aIntro || className === "show-intro-name" ||className === "aIntName"){
    console.log("menu-intro에요.");
    showIntro.style.display = "block";
    console.log("target.tagName  :  " + target.tagName);
    console.log(aIntro);
  }else if (className  === "menu-space" || target === aSpace || className === "show-space-name" || className === "aSpaName" ) {
    console.log("menu-space에요.");
    showSpace.style.display = "block";
  }else if (className === "menu-room" || target === aRoom || className === "show-room-name" || className === "aRoomName"){
      console.log("menu-room에요.");
    showRoom.style.display = "block";
  }
}

// black and none.
function goBlack(evt){
  var target = evt.target;
  target.style.color = "black";

  var className = target.className;

  var showIntro = document.querySelector(".show-intro")
  var showSpace = document.querySelector(".show-space")
  var showRoom = document.querySelector(".show-room")

  console.log(className);

  if(className === "menu-intro" || className === "show-intro-name"  ){
    console.log("hi");
    showIntro.style.display = "none";
  }else if (className  === "menu-space" || className === "show-space-name") {
    showSpace.style.display = "none";
  }else if (className === "menu-room" || className === "show-room-name"){
    showRoom.style.display = "none";
  }
}

//정규 표현식 음숫갑..?
