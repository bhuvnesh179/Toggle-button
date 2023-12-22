var toggled = false;
var bodyTag = document.getElementsByTagName("body");
var circle= document.getElementById("circle");
var hTag = document.getElementsByTagName("h1");

document.getElementById("toggle").onclick = function(){
    if(!toggled){
        bodyTag[0].style.backgroundColor = 'black';
        hTag[0].style.color = 'white';
        circle.style.marginLeft = "100px";

        toggled = true;
    }else{
        bodyTag[0].style.backgroundColor = 'white';
        hTag[0].style.color = 'black';
        circle.style.marginLeft = "1px";

        toggled = false;
    }
}
