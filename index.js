// detrecting mouse click press


var numberOfButton = document.querySelectorAll(".drum").length;
for(var i = 0; i < numberOfButton; i++){

document.querySelectorAll(".drum")[i].addEventListener("click", function (){
   
    var ButtonInnerHtml = this.innerHTML;

    makeSound(ButtonInnerHtml);
   
    buttonAnimation(ButtonInnerHtml);
    
 


} );

}

// detecting the keyborad press

document.addEventListener("keydown", function(event) {

makeSound(event.key);

buttonAnimation(event.key);
}
);

function makeSound(key){

    switch (key) {
        case "w":
            var audio = new Audio('sounds/crash.mp3');
             audio.play();
            break;
            case "a":
                var audio = new Audio('sounds/kick-bass.mp3');
                 audio.play();
                break;case "s":
                var audio = new Audio('sounds/snare.mp3');
                 audio.play();
                break;case "d":
                var audio = new Audio('sounds/tom-1.mp3');
                 audio.play();
                break;case "j":
                var audio = new Audio('sounds/tom-2.mp3');
                 audio.play();
                break;case "k":
                var audio = new Audio('sounds/tom-3.mp3');
                 audio.play();
                break;case "l":
                var audio = new Audio('sounds/tom-4.mp3');
                 audio.play();
                break;

        default:console.log(ButtonInnerHtml);
            
    }

}

function buttonAnimation(currentKey){
 var actionButton = document.querySelector("." + currentKey);
  actionButton.classList.add("pressed");

  setTimeout(function (){
    actionButton.classList.remove("pressed");
  },100 );
   

}
