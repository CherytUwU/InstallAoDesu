function menuHeaderMostrar(){
    document.getElementById('menuH').style.width="240px";
    document.getElementById('btn1').style.display="none";
    document.getElementById('btn2').style.display="inline";
    document.getElementById('menuHBackground').style.visibility="visible";
}

function menuHeaderOcultar(){
    document.getElementById('menuH').style.width="0";
    document.getElementById('btn1').style.display="inline";
    document.getElementById('btn2').style.display="none";
    document.getElementById('menuHBackground').style.visibility="hidden";
}