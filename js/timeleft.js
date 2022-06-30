
  function showTime() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var hourleft;
    var minleft;

    if(h == 0){
        h = 24;
    }

    if (m >= 38){
        minleft = 98 - m;
        hourleft = 68 - h;
    }

    if (m < 38){
        minleft = Math.abs(m - 38);
        hourleft = 69 - h;
    }
    
    if (minleft == 0){
        minleft = "0" + minleft;
    }

    document.getElementsByClassName("lowerBody2b")[0].innerText = hourleft;
    document.getElementsByClassName("lowerBody2b")[1].innerText = minleft;
    setTimeout(showTime, 1000);
    }
showTime();