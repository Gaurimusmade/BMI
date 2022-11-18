function cal()
{
    var h=document.getElementById("height").value;
    var w=document.getElementById("weight").value;
    var hh=parseFloat(h);
    hh=hh/0.0328084;
    console.log(hh);
    var ww=parseFloat(w);
    var an=(ww/hh/hh)*10000;
    document.getElementById("ans").innerHTML=an;
    if(an<18.6)
    {
        document.getElementById("ans").innerHTML=an+"<br>"+"<br>"+"You Are Under Weight";
    }
    else if(an>=18.6 && an<=24.9)
    {
        document.getElementById("ans").innerHTML=an+"<br>"+"<br>"+"You Are Weight Is Average";
    }
    else{
        document.getElementById("ans").innerHTML=an+"<br>"+"<br>"+"You Are Over Weight";
    }
}