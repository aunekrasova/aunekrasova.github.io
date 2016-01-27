(function($) {
    $(function() {
        $('.jcarousel').jcarousel();

        $('.jcarousel-control-prev')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '-=1'
            });

        $('.jcarousel-control-next')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '+=1'
            });

        $('.jcarousel-pagination')
            .on('jcarouselpagination:active', 'a', function() {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function() {
                $(this).removeClass('active');
            })
            .jcarouselPagination();
    });
})(jQuery);

$(document).ready(function() {
    $( '.dropdown' ).hover(
        function(){
            $(this).children('.sub-menu').slideDown(400);
        },
        function(){
            $(this).children('.sub-menu').slideUp(400);
        }
    );
}); 

function changeCheck(el)
{
     var el = el,
          input = el.getElementsByTagName("input")[0];
     if(input.checked)
     {
       el.style.backgroundPosition="0 0"; 
     input.checked=false;
     }
     else
     {
          el.style.backgroundPosition="0 -17px"; 
      input.checked=true;
     }
     return true;
}
function startChangeCheck(el)

{
  var el = el,
          input = el.getElementsByTagName("input")[0];
     if(input.checked)
     {
          el.style.backgroundPosition="0 -17px";     
      }
     return true;
}

function startCheck()
{
  startChangeCheck(document.getElementById("myCheckbox1"));
  startChangeCheck(document.getElementById("myCheckbox2"));
  startChangeCheck(document.getElementById("myCheckbox3"));
}

window.onload=startCheck;

$(document).ready(function(){
    var params = {
        changedEl: "#names",
        scrollArrows: false
    }
    cuSel(params);
});




