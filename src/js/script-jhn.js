$(document).ready(function(){

    $('#hidden-members').hide();
    var directorsShow = false;
    $('#hidden-staff').hide();
    staffShow = false;

    $('#cycle-members').cycle({
        fx: 'fadeZoom',
        pause: '1',
        prev: '#f-pic',
        next: '#b-pic',
        speed: 2000,
        timeout: 5000,
        before: function() { 
            $('#cycle-members').css({left: '50%', marginLeft: -$(this).width()/2});
          }
    });

    $('#directors-toggler').click(function(){
        $('#hidden-members').slideToggle('slow');
        var directorsM ="Our Board Members <strong class='text-primary'>+</strong>";
        var directorsL ="Our Board Members <strong class='text-danger'>-</strong>";
            if (directorsShow == false){
                $('#directors').html(directorsL);
                directorsShow = true;
            }else{
                $('#directors').html(directorsM);
                directorsShow = false;
            }
    });

    $('#contacts-toggler').click(function(){
        $('#hidden-staff').slideToggle('slow');
        var staffM = "Contact Us <strong class='text-primary'>+</strong>";
        var staffL = "Contact Us <strong class='text-danger'>-</strong>";
            if (staffShow == false){
                $('#contact-us').html(staffL);
                $('#contacts-description').text('');
                staffShow = true;
            }else{
                $('#contact-us').html(staffM);
                $('#contacts-description').html('Click here to see <span class="badge badge-warning">all of our locations</span> and our <span class="badge badge-warning">staff members</span> phones and e-mails');
                staffShow = false;
            }
    });

    $('#history-pic-changer').hover(function(){
        $('#history-pic').attr({'src': 'src/251794_orig.jpg'});
    }, function(){
        $('#history-pic').attr({'src': 'src/6331496_orig.png'});
    });

    $('.img-gal-h').hover(function(){
        $(this).animate({height: '199px', width: '300px'})
    }, function(){
        $(this).animate({height: '99px', width: '150px'});
    });
    $('.img-gal-v').hover(function(){
        $(this).animate({height: '300px', width: '199px'})
    }, function(){
        $(this).animate({height: '150px', width: '99px'});
    });

});
