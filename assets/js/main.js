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

        // REMOVE ALL
        document.getElementById('windows').classList.remove('animation');
        document.getElementById('mac').classList.remove('animation');
        document.getElementById('linux').classList.remove('animation');
        document.getElementById('ios').classList.remove('animation');
        document.getElementById('android').classList.remove('animation');

        document.getElementById('menuCatDownload').classList.remove('seeing');
        document.getElementById('SeeAllDownload').style.display="inline";
        document.getElementById('mSeeNone').style.display="none";
}

function mSeeAll(){
    document.getElementById('downloadall').style.display="none";
    document.getElementById('menuCatDownload').classList.remove('menuAlto');

        // REMOVE ALL
        document.getElementById('windows').classList.remove('animation');
        document.getElementById('mac').classList.remove('animation');
        document.getElementById('linux').classList.remove('animation');
        document.getElementById('ios').classList.remove('animation');
        document.getElementById('android').classList.remove('animation');

        document.getElementById('menuCatDownload').classList.add('seeing');
        document.getElementById('SeeAllDownload').style.display="none";
        document.getElementById('mSeeNone').style.display="inline";
}

function mSeeNone(){
    document.getElementById('pcs').style.display="inline-flex"
    document.getElementById('mobiles').style.display="inline-flex"

    document.getElementById('windows').style.display="flex";
    document.getElementById('linux').style.display="flex";
    document.getElementById('mac').style.display="flex";

    document.getElementById('android').style.display="flex";
    document.getElementById('ios').style.display="flex";

    document.getElementById('menuCatDownload').classList.remove('menuAlto');

        // REMOVE ALL
        document.getElementById('windows').classList.remove('animation');
        document.getElementById('mac').classList.remove('animation');
        document.getElementById('linux').classList.remove('animation');
        document.getElementById('ios').classList.remove('animation');
        document.getElementById('android').classList.remove('animation');

        document.getElementById('menuCatDownload').classList.remove('seeing');
        document.getElementById('SeeAllDownload').style.display="inline";
        document.getElementById('mSeeNone').style.display="none";
}

function seeWindows(){
    document.getElementById('pcs').style.display="inline-flex";
    document.getElementById('mobiles').style.display="none";
    document.getElementById('linux').style.display="none";
    document.getElementById('mac').style.display="none";
    document.getElementById('downloadall').style.display="block";

    // See
    document.getElementById('windows').style.display="flex";
    document.getElementById('menuCatDownload').classList.add('menuAlto');

    // Animacion
    document.getElementById('windows').classList.add('animation');

        // Remover A
        document.getElementById('mac').classList.remove('animation');
        document.getElementById('linux').classList.remove('animation');
        document.getElementById('ios').classList.remove('animation');
        document.getElementById('android').classList.remove('animation');

        document.getElementById('menuCatDownload').classList.remove('seeing');
        document.getElementById('SeeAllDownload').style.display="inline";
        document.getElementById('mSeeNone').style.display="none";
    
}

function seeMac(){
    document.getElementById('pcs').style.display="inline-flex";
    document.getElementById('mobiles').style.display="none";
    document.getElementById('linux').style.display="none";
    document.getElementById('windows').style.display="none";
    document.getElementById('downloadall').style.display="block";

    // See
    document.getElementById('mac').style.display="flex";
    document.getElementById('menuCatDownload').classList.add('menuAlto');

    // Animacion
    document.getElementById('mac').classList.add('animation');

        // Remover A
        document.getElementById('windows').classList.remove('animation');
        document.getElementById('linux').classList.remove('animation');
        document.getElementById('ios').classList.remove('animation');
        document.getElementById('android').classList.remove('animation');

        document.getElementById('menuCatDownload').classList.remove('seeing');
        document.getElementById('mSeeAll').style.display="inline";
        document.getElementById('mSeeNone').style.display="none";
}

function seeLinux(){
    document.getElementById('pcs').style.display="inline-flex";
    document.getElementById('mobiles').style.display="none";
    document.getElementById('mac').style.display="none";
    document.getElementById('windows').style.display="none";
    document.getElementById('downloadall').style.display="block";

    // See 
    document.getElementById('linux').style.display="flex";
    document.getElementById('menuCatDownload').classList.add('menuAlto')

    // Animation
    document.getElementById('linux').classList.add('animation');

        // Remover A
        document.getElementById('windows').classList.remove('animation');
        document.getElementById('mac').classList.remove('animation');
        document.getElementById('ios').classList.remove('animation');
        document.getElementById('android').classList.remove('animation');

        document.getElementById('menuCatDownload').classList.remove('seeing');
        document.getElementById('SeeAllDownload').style.display="inline";
        document.getElementById('mSeeNone').style.display="none";
}

function seeIos(){
    document.getElementById('mobiles').style.display="inline-flex";
    document.getElementById('pcs').style.display="none";
    document.getElementById('android').style.display="none";
    document.getElementById('downloadall').style.display="block";

    // See
    document.getElementById('ios').style.display="flex"
    document.getElementById('menuCatDownload').classList.add('menuAlto')

    // Animation
    document.getElementById('ios').classList.add('animation');

        // Remover A
        document.getElementById('windows').classList.remove('animation');
        document.getElementById('mac').classList.remove('animation');
        document.getElementById('linux').classList.remove('animation');
        document.getElementById('android').classList.remove('animation');

        document.getElementById('menuCatDownload').classList.remove('seeing');
        document.getElementById('SeeAllDownload').style.display="inline";
        document.getElementById('mSeeNone').style.display="none";
}

function seeAndroid(){
    document.getElementById('mobiles').style.display="inline-flex";
    document.getElementById('pcs').style.display="none";
    document.getElementById('ios').style.display="none";
    document.getElementById('downloadall').style.display="block";

    // See
    document.getElementById('android').style.display="flex"
    document.getElementById('menuCatDownload').classList.add('menuAlto')

    // Animation
    document.getElementById('android').classList.add('animation');

        // Remover A
        document.getElementById('windows').classList.remove('animation');
        document.getElementById('mac').classList.remove('animation');
        document.getElementById('linux').classList.remove('animation');
        document.getElementById('ios').classList.remove('animation');

        document.getElementById('menuCatDownload').classList.remove('seeing');
        document.getElementById('SeeAllDownload').style.display="inline";
        document.getElementById('mSeeNone').style.display="none";
}
