function hobbiesInfo(t) { // a function to connect with our json file, and also to search for information of a clicked picture
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var jsonObj = JSON.parse(this.responseText); // a variable is taking all the data from the json file
                var result = ""; 
                    for (var i = 0; i < jsonObj.hobby.length; i++) {
                        if (jsonObj.hobby[i].id == t) { // through a loop, a comparison is realized to search for a match, the results will be stored in..yes, "results"
                            result = result + jsonObj.hobby[i].id + " <strong>" + jsonObj.hobby[i].Name + "</strong><br>" + jsonObj.hobby[i].Type + "<br>" + jsonObj.hobby[i].Desc;
                        }
                    }
                document.getElementById("information").innerHTML = result; // in our html code, there is a div or a section called information, "results" values are sent there.
            }
        }
    httpRequest.open('GET', 'HobbiesList.json', true); // indication of the type of operation and file name is declared inside the "open" method of our request
    httpRequest.send();
}

//timer to loop and show all the pictures and hobbies created inside the json file
var html = '';
$(document).ready(function (){ //it will wait until our html document is fully ready.
    $.getJSON('HobbiesList.json', function (data){
        $.each(data, function (key, value){ //then, these functions will load and format (in html) the content of the json file to show it in our page
            $.each(value, function (index, stuff){
                console.log(index + " " + stuff.Name);
                html += '<div style="text-align: center;"><h4>' + stuff.Name + '</h4><br><p onclick= "hobbiesInfo (' + stuff.id + ')"><img src ="' + stuff.Pic + '"></p></div>';
            });
        });
        $('#hobbiesLobby').html(html); // this method is indicating/sending the values of html to our div tag with "HobbiesLobby" id name
        $('#hobbiesLobby').cycle({ // this method will cycle one by one the html code loaded in the "html" variable.
            fx: 'fade',
            pause: '1',
            prev: '#prev',
            next: '#next',
            speed: 500,
            timeout: 10000
        });
    });
});


var http_request = new XMLHttpRequest();

http_request.onstatechange= function(){
           if (http_request.readyState == 4){
                       var jsonObj = JSONparse(http_request.responseText);
                        document.getElementbyId("Title").innerHTML = jsonObj.book[0].Title;
                        document.getElementbyId("Author").innerHTML = jsonObj.book[0].Author;
               }
         }
request.open('GET', 'data_file.json', true); 
http_request.send();

 