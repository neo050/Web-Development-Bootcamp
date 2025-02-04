let arr = document.querySelectorAll(".drum");
for (let i =0 ;i< arr.length;i+=1)
{
    arr[i].addEventListener("click",function ()
    {
        makesound(this.innerHTML)
        buttonAnimation(this.innerHTML);
    });
}


document.addEventListener("keypress",function(event){
     makesound(event.key);
     buttonAnimation(event.key);
});

function makesound(key)
{
    switch(key){
        case"w":
            var crash= new Audio("sounds/crash.mp3");
            crash.play();
            break
        case"a":
            var kick= new Audio("sounds/kick-bass.mp3");
            kick.play();
            break
        case"s":
            var snare= new Audio("sounds/snare.mp3");
            snare.play();
            break
        case"d":
            var tom1= new Audio("sounds/tom-1.mp3");
            tom1.play();
            break
        case"j":
            var tom2= new Audio("sounds/tom-2.mp3");
            tom2.play();
            break
        case"k":
            var tom3= new Audio("sounds/tom-3.mp3");
            tom3.play(); 
            break
         case"l":
            var tom4= new Audio("sounds/tom-4.mp3");
            tom4.play();
            break
        default: console.log(keypress_event_key);
    }
}

function buttonAnimation(key)
{

    var  actuveButton =document.querySelector("."+key);
    actuveButton.classList.add("pressed");

    setTimeout(function(){actuveButton.classList.remove("pressed");
    } ,100)
}
