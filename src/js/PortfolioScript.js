$(document).ready(function(){
    $('#Semester-info-f17').hide();
    $('#Semester-info-s18').hide();
    $('#Semester-info-f18').hide();
    $('#Semester-info-s19').hide();
    var showingF17 = true;
    var showingS18 = true;
    var showingF18 = true;
    var showingS19 = true;

    $('#toggler-f17').click(function(){
        $('#Semester-info-f17').slideToggle('slow');
            if (showingF17 == false){
                $('#toggler-f17').html('Collapse <span class="text-success"><strong>+</strong></span>');
                showingF17 = true;
            }else{
                $('#toggler-f17').html('Hide <span class="text-danger"><strong>-</strong></span>');
                showingF17 = false;
            }
    });
    $('#toggler-s18').click(function(){
        $('#Semester-info-s18').slideToggle('slow');
            if (showingS18 == false){
                $('#toggler-s18').html('Collapse <span class="text-success"><strong>+</strong></span>');
                showingS18 = true;
            }else{
                $('#toggler-s18').html('Hide <span class="text-danger"><strong>-</strong></span>');
                showingS18 = false;
            }
    });
    $('#toggler-f18').click(function(){
        $('#Semester-info-f18').slideToggle('slow');
            if (showingF18 == false){
                $('#toggler-f18').html('Collapse <span class="text-success"><strong>+</strong></span>');
                showingF18 = true;
            }else{
                $('#toggler-f18').html('Hide <span class="text-danger"><strong>-</strong></span>');
                showingF18 = false;
            }
    });
    $('#toggler-s19').click(function(){
        $('#Semester-info-s19').slideToggle('slow');
            if (showingS19 == false){
                $('#toggler-s19').html('Collapse <span class="text-success"><strong>+</strong></span>');
                showingS19 = true;
            }else{
                $('#toggler-s19').html('Hide <span class="text-danger"><strong>-</strong></span>');
                showingS19 = false;
            }
    });
});