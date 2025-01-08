var p1 =Math.floor(Math.random()*6 +1)
var p2 = Math.floor(Math.random()*6 +1)
if (p1 > p2)
{
    document.querySelector("h1").innerHTML="🚩 player 1  win!"
}
else if (p2 > p1)
{
    document.querySelector("h1").innerHTML="player 2  win! 🚩"

}
else 
{
    document.querySelector("h1").innerHTML="draw!"

}
document.querySelector("img.img1").setAttribute("src","images/dice"+p1+".png");
document.querySelector("img.img2").setAttribute("src","images/dice"+p2+".png");