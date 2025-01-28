let arr = document.querySelectorAll(".drum");
for (let i =0 ;i< arr.length;i+=1)
{
    arr[i].addEventListener("click",function ()
    {
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
    });
}
