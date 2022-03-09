// Logic to show and hide the sidebar 
let menu=document.getElementById("menu");
let Close=document.getElementById("close");
let sidebar=document.getElementById("sidebar");
sidebar.style.left="-255px";

menu.onclick = function(){
   sidebar.style.left = "0";
}    
Close.onclick=function(){
    sidebar.style.left="-255px";
}
