//we have to create a new connection with the json file, using a variable (jsonLink), and another variable to collect all the information from that connection once established (jsonVar)
var jsonVar;
var count = 0;
var jsonLink = new XMLHttpRequest();
jsonLink.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200) {
            jsonVar = JSON.parse(this.responseText);
            count = jsonVar.people.length;
            console.log(jsonVar); //just to check on console if the json data could be taken
            console.log(count); // just checking how many objects were created/ported from the json file
        }
}
jsonLink.open('GET', 'FriendsAndFamily.json', true); //the json file name should be indicated as well as the kind of operation we are performing, Get to read and Post to make changes
jsonLink.send();

function searchF(){
    //the variables pName and pRelation are used to collect the information on them at the time we click on the button
    var pName = document.getElementById("nombre").value;
    var pRelation = document.getElementById("relacion");
    var goTo = document.getElementById("content"); //this variable is pointing to "content", which is a div in the html file where the results are going to be shown
    var results = "";
    var positive = false; //just to track if we find something..
            for (var i = 0; i < count; i++){
                //if (pName != "" || pRelation != ""){
                        if (pName == jsonVar.people[i].name){
                            results += jsonVar.people[i].name +" " + jsonVar.people[i].lname + ", " + jsonVar.people[i].relation + "<br>";
                            positive = true;
                        }
                        else if (pRelation[pRelation.selectedIndex].value == jsonVar.people[i].relation){
                            results += jsonVar.people[i].name +" " + jsonVar.people[i].lname + ", " + jsonVar.people[i].relation + "<br>";
                            positive = true;
                        }
                    console.log(results);
                //}
            }
            if (positive == true){// this conditional is going to show a message and the results in html.. if it found something
                alert("According to the data provided, Some matches were found:");
                goTo.insertAdjacentHTML('beforeend', results);
            }
            else {//this one is the sad try again message
                alert("Not matches found");
            }
}

function showAll(){
    //even if we are just going to show all, we still need to loop instead of just showing everything inside jsonVar, for HTML formating purposes
    var goTo = document.getElementById("content"); //this variable is pointing to "content", which is a div in the html file where the results are going to be shown
    var results = "";
            for (var i = 0; i < count; i++){
                results += jsonVar.people[i].name +" " + jsonVar.people[i].lname + ", " + jsonVar.people[i].relation + "<br>";
            }
        goTo.insertAdjacentHTML('beforeend', results);
        alert("This are all the people fund in our database");
}

function clrAll(){
    document.getElementById("nombre").value = "";
    document.getElementById("content").innerHTML = "";
}