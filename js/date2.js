
  function showDate() {
    var date = new Date();
    var d = date.getDate() - 1;
    var mon = 1 + date.getMonth();
    var y = date.getFullYear();

   
    if (d < 10){
        d = "0" +d;
    }

   
    var date = mon + "月" + d + "日";
     document.getElementById("lowerBody1c").innerText = date + "\xa0\xa0" + "8:36";
     //document.getElementById("MyClockDisplay").textContent = time;
     //setTimeout(showTime, 1000);
    }
showDate();
