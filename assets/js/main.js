function menuHeaderMostrar(){
    document.getElementById('menuH').style.right="0px";
    document.getElementById('menuH').style.visibility="visible";
    document.getElementById('btn1').style.display="none";
    document.getElementById('btn2').style.display="inline";
    document.getElementById('menuHBackground').style.visibility="visible";
}

function menuHeaderOcultar(){
    document.getElementById('menuH').style.right="-240px";
    document.getElementById('menuH').style.visibility="hidden";
    document.getElementById('btn1').style.display="inline";
    document.getElementById('btn2').style.display="none";
    document.getElementById('menuHBackground').style.visibility="hidden";
}
