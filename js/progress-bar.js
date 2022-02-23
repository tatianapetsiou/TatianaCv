var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var bar = document.querySelector(".progress-bar1");
    var bars = document.querySelector(".progress-bar2");
    var bart = document.querySelector(".progress-bar3");
    var barf = document.querySelector(".progress-bar4");
    var width = 1;
    var id = setInterval (frame, 40);
    var id2 = setInterval(frame2,40);
    var id3 =setInterval (frame3 ,40)
    var id4 = setInterval (frame4 ,40)
    function frame() {
        if (width >= 90) {
            clearInterval(id);
            i = 0;
          } else {
            width++;
            bar.style.width = width + "%";
          }
    }
    function frame2() {
        if (width >= 70) {
          clearInterval(id2);
          i = 0;
        } else {
          width++;
          bars.style.width = width + "%";
        }
      }

      function frame3() {
        if (width >= 60) {
          clearInterval(id3);
          i = 0;
        } else {
          width++;
          bart.style.width = width + "%";
        }
      }

      function frame4() {
        if (width >= 70) {
          clearInterval(id4);
          i = 0;
        } else {
          width++;
          barf.style.width = width + "%";
        }
      }
  }
  
}

