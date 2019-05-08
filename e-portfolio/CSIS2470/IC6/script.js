$(document).ready(function(){

        $('span.pq').each(function(){
            var quote = $(this).clone();
            quote.removeClass('pq');
            quote.addClass('pullquote');
            $(this).before(quote);
        }); //end each

    $('.answer').hide();

        $('.main h2').click(function(){
            var $answer = $(this).next('.answer');
                if ($answer.is(':hidden')){
                    $answer.slideDown();
                    $(this).addClass('close');
                }else {
                    $answer.fadeOut();
                    $(this).removeClass('close');
                }
        }); // end click

        $('#dashboard').hover(function(){
            $(this).stop().animate({left:'0', backgroundColor:'rbg(27,45,94)'}, 500, 'easeInSine');
        }, function(){
            $(this).stop().animate({left:'-92px', backgroundColor:'rbg(255,211,224)'}, 1500, 'easeOutBounce');
        }); //end hover

    }); //end ready