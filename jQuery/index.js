$(document).keypress(function(event){
    $("h1").text(event.key);
    $("h1").css("color","yellow");

});
$("h1").on("mouseover",function(){
    $(this).css("color","red");
});


