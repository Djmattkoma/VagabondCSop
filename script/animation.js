function togglePopup(){
    document.getElementById("popup-1").classList.toggle("active");
  }

function hackdonw() {
  
}

function progres(params) {
  var i = 0;
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("lodbar");
    var wth = 10;
    var id = setInterval(frame, 10);
    function frame() {
      if (wth >= 100) {
        clearInterval(id)
        i = 0;
      }else{
        wth++;
        elem.style.width =  wth + "%";
        elem.innerHTML = wth + "%";
      }
    }
  }
}
          