function togglePopup(){
  document.getElementById("").classList.toggle("active");
  countdonw()
  progres()
}

function countdonw() {
  var date;
    var display = document.getElementById('nwtime');
    setInterval(function(){
        date = new Date();
        var currenthours = date.getHours();
        var hours;
        var minutes;
        var secondes;
        if (currenthours != 23){
            if (currenthours < 23)
                hours = 47 - currenthours;
            else hours = 47 + (23 - currenthours);
            minutes = 60 - date.getMinutes();
            secondes = 60 - date.getSeconds();
        display.innerHTML = hours + 'h ' + minutes + 'm ' +secondes + 's';
        }
        else display.innerHTML = 'DATAS DELETED!';
    },1000);
}

countdonw()

function progres() {
  var elem = document.getElementById("hacklodbar2");
  var wth = 1;
  var id = setInterval(frame, 10);
  function frame() {
    if (wth >= 100) {
      clearInterval(id);
    }else{
      wth++;
      elem.style.width =  wth + "%";
      document.getElementById("hacklodbar").innerHTML = "DATABASE HACKED"
    }
  }
}


function x1() {
  var code1 = Math.floor((Math.random() * 10) + 1);
  var code2 = Math.floor((Math.random() * 10) + 1);
  var code3 = Math.floor((Math.random() * 10) + 1);

  if (tip1 == code1) {
    document.getElementById(led1).innerHTML.style.background = lime
  }else{
    document.getElementById(led1).innerHTML.style.background = red;
  }

  if (tip2 == code2) {
    document.getElementById(led1).innerHTML.style.background = lime
  }else{
    document.getElementById(led1).innerHTML.style.background = red;
  }
  
  if (tip3 == code3) {
    document.getElementById(led1).innerHTML.style.background = lime
  }else{
    document.getElementById(led1).innerHTML.style.background = red;
  }
} 