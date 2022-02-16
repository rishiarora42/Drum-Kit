var btnListLength = document.querySelectorAll("button").length;

for(i=0;i<btnListLength;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        var text = this.innerHTML;
        makeSound(text);
        addAnimation(text);
    });
}

document.addEventListener("keydown",function(event){
    var eventKey = event.key;
    makeSound(eventKey);
    addAnimation(eventKey);
});

function makeSound(key){
    switch(key){
        case "w" :
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        
        case "a" :
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;

        case "s" :
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        
        case "d" :
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        
        case "j" :
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
        
        case "k" :
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        
        case "l" :
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        
        default: 
            console.log(text);
            break;
    }
}

function addAnimation(key){

    var activeButton = document.querySelector("." + key);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}