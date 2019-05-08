//Declaration
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1;
//var yyyy = today.getFullYear();
var currentdate = mm + "-" + dd
var currentdate2 = mm + "/" + dd

function bdf(){
    //Getting info from user
    var name = prompt("Hello, What's your name?");
    var bd = prompt("When's your Birthday?\n *in mm-dd\n *don't add ceros (0) to the month");

    //Calculating birthday
    if (bd == currentdate || bd == currentdate2){
        alert("Awesome, today is " + currentdate + "\nhappy birthday " + name + "!");
    }
    else{
        alert("Happy Unbirthday " + name);
    }

    //closing
    alert("Have a good one! bye");
}
