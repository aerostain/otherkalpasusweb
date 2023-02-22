function closelayout1(){
    document.getElementById("layout1").style.display="none";            
}

function openlayout1(){
    document.getElementById("layout1").style.display="block";                
}

function closelayout2(){
    document.getElementById("layout2").style.display="none";            
}

function openlayout2(){
    document.getElementById("layout2").style.display="block";            
    closelayout1();
}

function closelayout3(){
    document.getElementById("layout3").style.display="none";            
}

function openlayout3(){
    document.getElementById("layout3").style.display="block";            
    closelayout2();
}

function closelayout4(){
    document.getElementById("layout4").style.display="none";            
}

function openlayout4(){
    document.getElementById("layout4").style.display="block";            
    closelayout3();
}