getTime();
function getTime(){
    var date = new Date();
    var day = date.getDay();
    var hour = date.getHours();
    var minu = date.getMinutes();
    // console.log(hour);

    var ampm = hour> 12 ? 'PM' : 'AM';

    const dayNames = ["SUN", "MON", "TUE", "WED", "THU","FRI", "SAT"];
    document.getElementById("day").innerHTML = dayNames[day];
    document.getElementById("pm_am").innerHTML = ampm;
    hour = (hour>12)?hour%12:hour;
    if(hour<10){
        document.getElementById("hrs").innerHTML = '0'+hour;
    }else {
        document.getElementById("hrs").innerHTML = hour;
    }

    if(minu<10){
        document.getElementById("minu").innerHTML = '0'+minu;
    }else {
        document.getElementById("minu").innerHTML = minu;
    }

    setTimeout('getTime()', 200);

}

var hr = 0;
var min = 0;
var sec = 0;
var count = 0;

let timer = false;


function start(){
    timer=true;
    stopwatch();
}

function stop(){
    timer = false;
}

function reset(){
    timer = false;
    hr = 0;
    min = 0;
    sec=0;
    count=0;
    document.getElementById("count").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";
    document.getElementById("hr").innerHTML = "00";
}

function stopwatch(){
    if(timer==true){
        count=count+1;
        if(count==100){
            sec=sec+1;
            count=0;
        }
        if(sec==60){
            min=min+1;
            sec=0;
        }
        if(min==60){
            hr=hr+1;
            min=0;
        }

        var hrString = hr;
        var minString = min;
        var secString = sec;
        var countString = count;
        
        if(hrString<10){
            hrString =  "0" + hrString ;
        }

        if(minString<10){
            minString = "0" + minString ;
        }

        if(secString<10){
            secString = "0" + secString ;
        }

        if(countString<10){
            countString = "0" + countString ;
        }

        document.getElementById("count").innerHTML = countString;
        document.getElementById("sec").innerHTML = secString;
        document.getElementById("min").innerHTML = minString;
        document.getElementById("hr").innerHTML = hrString;
        setTimeout('stopwatch()',10);
    }
    
}