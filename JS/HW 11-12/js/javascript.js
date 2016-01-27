$(document).ready(function() {
    var leftUIEl = $('.jcarousel-control-prev');
    var rightUIEl = $('.jcarousel-control-next');
     var elementsList = $('.carousel-list');
 
    var pixelsOffset = 320;
    var currentLeftValue = 0;
    var elementsCount = elementsList.find('li').length;
    var minimumOffset = - ((elementsCount - 5) * pixelsOffset);
    var maximumOffset = 0;
 
    leftUIEl.click(function() {        
        if (currentLeftValue != maximumOffset) {
            currentLeftValue += 320;
            elementsList.animate({ left : currentLeftValue + "px"}, 500);
        }        
    });
 
    rightUIEl.click(function() {        
        if (currentLeftValue != minimumOffset) {
            currentLeftValue -= 320;
            elementsList.animate({ left : currentLeftValue + "px"}, 500);
        }  
    return false
              
    });
});

$(function() {

    var html = $('#test').html();
    var articles = [
      {
        title: "Манікюр",
        content: "Догляд за руками в повсякденному житті просто необхідний. Звичайно, не завжди є час самої надати нігтям ідеальну форму, а шкірі - бархатистість і м'якість, та й зробити це самостійно дуже важко. Кращий спосіб догляду за руками - професійний манікюр. Київ - наша велика столиця - рясніє салонами краси, що пропонують за різноманітні, і не завжди прийнятні ціни ще на один крок наблизитися до ідеалу. Але тільки постійний, регулярний манікюр дозволяє завжди мати ідеальні руки. На салони не завжди є час і гроші, тому шановним клієнтам пропонуються послуги кваліфікованого майстра в домашніх умовах, причому якість манікюру, ціна і тривалість процедури залишать задоволеним кожного, навіть самого вимогливого клієнта. Перш за все, потрібно прояснити небагато, як робиться манікюр. Не завадить і дати милим дамам кілька порад про те, як після процедури надовго зберегти руки акуратними і красивими."
        }
    ];

     var content = tmpl(html, {
     data: articles    
    });

    $('body').append(content);

  });

