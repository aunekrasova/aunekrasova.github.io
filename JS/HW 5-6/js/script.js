        var hours = document.getElementById("hours");
        var minutes = document.getElementById("minutes");
        var seconds = document.getElementById("seconds");
        var mseconds =document.getElementById("mseconds")
        var start = document.getElementById("start");
        var stop = document.getElementById("stop");
        var h = 0;
        var m = 0;
        var s = 0;
        var ms = 0;
        var right = true;
        var count;

        var startwatch = function(){
            if (right == true) {
            count = setInterval (function() {
                            ms = ms+40;
                            if (ms >= 999) {
                                ms = 0;
                                s++;
                            }
                            if (s == 60) {
                                s = 0;
                                m++;
                            }
                            if (m == 60) {
                                m = 0;
                                h++;
                            }
                            if (h == 24) {
                                h = 0;
                            }

                            hours.innerHTML = h;
                            minutes.innerHTML = m;
                            seconds.innerHTML = s;
                            mseconds.innerHTML = ms;


                            if (hours.innerHTML == 0) hours.innerHTML = "0" + hours.innerHTML;
                            if (hours.innerHTML < 10 && hours.innerHTML.charAt(0) != 0) {
                                hours.innerHTML = "0" + hours.innerHTML;
                            }
                            if (minutes.innerHTML  == 0) minutes.innerHTML = "0" + minutes.innerHTML;
                            if (minutes.innerHTML < 10 && minutes.innerHTML.charAt(0) != 0) {
                                minutes.innerHTML = "0" + minutes.innerHTML;
                            }
                            if  (seconds.innerHTML == 0) seconds.innerHTML = "0" + seconds.innerHTML;
                            if  (seconds.innerHTML < 10 && seconds.innerHTML.charAt(0) != 0) {
                                seconds.innerHTML = "0" + seconds.innerHTML;
                            }
                            if (mseconds.innerHTML <= 99 && mseconds.innerHTML.charAt(0) != 0) {
                                mseconds.innerHTML = "0" + mseconds.innerHTML;
                        } 
                    
                            
                    }, 40);
            }

        }

        var clearAll = function(){
            if (right == true) {
            count = setInterval (
                function() {
                            ms == 0;
                            s == 0;
                            m == 0;
                            h == 0;
                        }
                        )
                        hours.innerHTML = h;
                        minutes.innerHTML = m;
                        seconds.innerHTML = s;
                        mseconds.innerHTML = ms;

                        if (hours.innerHTML == 0) hours.innerHTML = "0" + hours.innerHTML; {
                            hours.innerHTML = "00" ;
                            }
                        if (minutes.innerHTML  == 0) minutes.innerHTML = "0" + minutes.innerHTML; {
                            minutes.innerHTML = "00" ;
                            }
                        if  (seconds.innerHTML == 0) seconds.innerHTML = "0" + seconds.innerHTML; {
                            seconds.innerHTML = "00" ;
                            }
                        if (mseconds.innerHTML == 0) mseconds.innerHTML = "0" + seconds.innerHTML; {
                            mseconds.innerHTML = "000" ;
                            } 
            }  
            }     
                                                 
                               
                            
                               
                            

        var rightToFalse = function() {
            clearInterval(count);
        }

        start.addEventListener("click", startwatch);
        stop.addEventListener("click", rightToFalse);
        clear.addEventListener("click", clearAll);
  