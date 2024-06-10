var prtcontent='';
var interface=document.getElementById("prt");
var fu='n',nu='',result=0;

function fuhao(anjian)
{
    yunsuan();
    console.log(anjian);
    var mydiv=document.getElementById(anjian);
    var divValue = mydiv.innerHTML;
    prtcontent=prtcontent+divValue;
    interface.innerHTML=prtcontent;
    fu=divValue;
    nu='';
}

function shuzi(anjian)
{
    var mydiv=document.getElementById(anjian);
    var divValue = mydiv.innerHTML;
    prtcontent=prtcontent+divValue;
    interface.innerHTML=prtcontent;
    console.log(divValue);
    nu=nu+divValue;
    nu=parseInt(nu);
}
function yunsuan()
{
    if(fu=='+'){result=result+nu}
    else if(fu=='-'){result=result-nu}
    else if(fu=='x'){result=result*nu}
    else if(fu=='%'){result=result/nu }
    else{result=nu }
    console.log(result);
}

function output()
{
    yunsuan();
    prtcontent=prtcontent+'='+result;
    interface.innerHTML=prtcontent;
}