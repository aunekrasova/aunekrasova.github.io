$(function () {
    var tabContainers = $('div.tabs > div'); 
    tabContainers.hide().filter(':first').show(); 
    $('div.tabs ul.tabNavigation a').click(function () {
        tabContainers.hide(); 
        tabContainers.filter(this.hash).show(); 
        $('div.tabs ul.tabNavigation a').removeClass('selected'); 
        $(this).addClass('selected'); 
        return false;
    }).filter(':first').click();
});


function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      oldonload();
      func();
    }
  }
}

function prepareInputsForHints() {
    var inputs = document.getElementsByTagName("input");
    for (var i=0; i<inputs.length; i++){
            if (inputs[i].parentNode.getElementsByTagName("span")[0]) {
                inputs[i].onmouseover = function () {
                this.parentNode.getElementsByTagName("span")[0].style.display = "inline";
            }
                inputs[i].onmouseout  = function () {
                this.parentNode.getElementsByTagName("span")[0].style.display = "none";
            }
        }
    }
    var selects = document.getElementsByTagName("select");
    for (var k=0; k<selects.length; k++){
        if (selects[k].parentNode.getElementsByTagName("span")[0]) {
            selects[k].onmouseover = function () {
                this.parentNode.getElementsByTagName("span")[0].style.display = "inline";
            }
            selects[k].onmouseout  = function () {
                this.parentNode.getElementsByTagName("span")[0].style.display = "none";
            }
        }
    }
}
addLoadEvent(prepareInputsForHints);