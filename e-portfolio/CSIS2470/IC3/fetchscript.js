var collector;
var lng = 0;
var jsonConnection = new XMLHttpRequest();
jsonConnection.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200) {
            collector = JSON.parse(jsonConnection.responseText);
            lng = collector.book.length;
        }
}
jsonConnection.open('GET', 'BookJson.json', true);
jsonConnection.send();


function clearBook(){
    document.getElementById("port").innerHTML = "";
    document.getElementById("box").value = "";
}

function searchBook(){
    var filler = document.getElementById("port");
    var author = document.getElementById("box").value;
    var book = "";
        for (var i = 0; i < lng; i++){
                if (collector.book[i].Author == author){
                    book = collector.book[i].Author + "<br>" + collector.book[i].Title + "<br>" + collector.book[i].Publisher + "<br>" + collector.book[i].Price;
                }
            
        }
        filler.insertAdjacentHTML('beforeend', book);
}

var fillSelect = document.getElementById("selector");
    for (var i = 0; i < lng; i++){
            fillSelect.options[fillSelect.options.length] = new Option(collector.book[i].Author, collector.book[i].authorid, false, false);
}