$(document).ready(function () {

                $('#Gallery a').click(function (evt) {
                    evt.preventDefault();
                    var imgPath = $(this).attr('href');
                    var newExt = imgPath.slice(0, -3);
                    newExt = newExt.concat("gif");
                    var newImage = $('<img src="' + newExt + '" width="500px" height="281px" id="fader">');
                    var oldImage = $('#fader');
                    $('#ship').prepend(newImage.fadeIn(2000));
                    $('#ship').remove(oldImage.fadeOut(2000));
                });

                $('#gallery a:first').click();

                $('#Gallery img').each(function () {
                    var formerPic = $(this).attr('src');
                    var newExt = formerPic.slice(0, -3);
                    newExt = newExt.concat("gif");
                    $(this).hover(
                            function () {$(this).attr('src', newExt);},
                            function () {$(this).attr('src', formerPic);}
                            );
                        });
            });