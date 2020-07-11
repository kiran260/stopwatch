var min=0;
var sec=0;
var msec=0;

var m=document.getElementById('min')
var s=document.getElementById('sec')
var ms=document.getElementById('msec')

var timeInterval;



function Watch(){
    msec++;
    ms.innerHTML = msec;
    if(msec >= 100){
        sec++;
        s.innerHTML = sec;
        msec = 0;
    }
    else if(sec >= 59){
        min++;
        m.innerHTML = min;
        sec = 0;
    }
    document.getElementById('strt').disabled=true;

}

function start(){
    interval = setInterval(Watch,10)
    
    
    


    
}


function stop(){
    clearInterval(interval)
    document.getElementById('strt').disabled=false;

}

function reset(){
    min = 0;
    sec = 0;
    msec = 0;
    m.innerHTML = min;
    s.innerHTML = sec;
    ms.innerHTML = msec;
    stop();
    document.getElementById('strt').disabled=false;

}



