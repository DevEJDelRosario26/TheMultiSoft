
var MainButton = document.getElementById("Btn_TorF");
var WPC = document.getElementById("TheBox");
var XBtn = document.getElementById("CloseBtn");


MainButton.addEventListener("click", function(){

  if (MainButton.classList.contains("MainBtnAnimation")) return;

       MainButton.classList.add("MainBtnAnimation");

MainButton.addEventListener("animationend", function() {
      MainButton.classList.remove("MainBtnAnimation");
      WPC.style.display = "block";
      MainButton.style.display = "none";

  MainButton.removeEventListener("animationend", handler);
   });
   if (WPC.style.display==="block"){
        woosh.currentTime = 0;
        woosh.play();
   } else {
        woosh.pause();   
   }
}); 


XBtn.addEventListener("click", function() {
  
    WPC.style.display = "none";
    MainButton.style.display ="block" ;
  
  });





  function SelectedPage1(){
    window.location.href = "SYSTEM/HTMLs/BasicCalculator/index.html";
     
  }

  let buttons = document.getElementsByTagName("button");
  let audio = document.getElementById("BtnSound");
  
  for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", function () {
          audio.currentTime = 0; 
          audio.play();
      });
      
  }


  var MainButton = document.getElementById("Btn_TorF");
  let MBtnSound = document.getElementById("BtnSound1");


  MainButton.addEventListener("click", function () {
    MBtnSound.currentTime = 0; 
    MBtnSound.play();
});


/*
var SelectionButtons =  document.querySelector(".SelectionButtons");
   var BtnFlashAnm = documents.querySelector(".BtnFlash");

SelectionButtons.addEventListener("mouseenter", ()=>{

  BtnFlashAnm.classList.add("BtnFlashAnimation");
});

SelectionButtons.addEventListener("mouseleave", ()=>{

  BtnFlashAnm.classList.remove("BtnFlashAnimation");
  });
  */
