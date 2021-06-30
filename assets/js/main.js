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

function seeAll(){
    document.getElementById('pcs').style.display="inline-flex"
    document.getElementById('mobiles').style.display="inline-flex"

    document.getElementById('windows').style.display="flex";
    document.getElementById('linux').style.display="flex";
    document.getElementById('mac').style.display="flex";

    document.getElementById('android').style.display="flex";
    document.getElementById('ios').style.display="flex";

    document.getElementById('downloadall').style.display="none";
    document.getElementById('menuCatDownload').classList.remove('menuAlto');
}

function seeWindows(){
    document.getElementById('pcs').style.display="inline-flex";
    document.getElementById('mobiles').style.display="none";
    document.getElementById('linux').style.display="none";
    document.getElementById('mac').style.display="none";
    document.getElementById('downloadall').style.display="block";

    document.getElementById('windows').style.display="flex";
    document.getElementById('menuCatDownload').classList.add('menuAlto');
    
}

function seeMac(){
    document.getElementById('pcs').style.display="inline-flex";
    document.getElementById('mobiles').style.display="none";
    document.getElementById('linux').style.display="none";
    document.getElementById('windows').style.display="none";
    document.getElementById('downloadall').style.display="block";

    document.getElementById('mac').style.display="flex";
    document.getElementById('menuCatDownload').classList.add('menuAlto');
}

function seeLinux(){
    document.getElementById('pcs').style.display="inline-flex";
    document.getElementById('mobiles').style.display="none";
    document.getElementById('mac').style.display="none";
    document.getElementById('windows').style.display="none";
    document.getElementById('downloadall').style.display="block";

    document.getElementById('linux').style.display="flex";
    document.getElementById('menuCatDownload').classList.add('menuAlto')
}

function seeIos(){
    document.getElementById('mobiles').style.display="inline-flex";
    document.getElementById('pcs').style.display="none";
    document.getElementById('android').style.display="none";
    document.getElementById('downloadall').style.display="block";

    document.getElementById('ios').style.display="flex"
    document.getElementById('menuCatDownload').classList.add('menuAlto')
}

function seeAndroid(){
    document.getElementById('mobiles').style.display="inline-flex";
    document.getElementById('pcs').style.display="none";
    document.getElementById('ios').style.display="none";
    document.getElementById('downloadall').style.display="block";

    document.getElementById('android').style.display="flex"
    document.getElementById('menuCatDownload').classList.add('menuAlto')
}
