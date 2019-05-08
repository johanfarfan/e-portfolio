var randall = Math.ceil(Math.random() * 99);
function guessit(){
    numb = document.getElementById("getter").value
        if (numb != ""){
                if (numb == randall){
                    document.getElementById("changer").src= "img/win.gif";
                    document.getElementById("notification").innerHTML = "YOU WIN";
                    document.getElementById("subtittle").innerHTML = "";
                    document.getElementById("parag").innerHTML = "";
                    document.getElementById("starter").style.display = "none";
                    document.getElementById("getter").style.display = "none";
                    alert("YOU WIN!");
                }
                else if (numb > randall){
                    document.getElementById("changer").src="img/high.gif";
                    document.getElementById("subtittle").innerHTML = "Try a lower number!";
                    alert("Try a lower number!");
                }
                else if (numb < randall){
                    document.getElementById("changer").src="img/low.gif";
                    document.getElementById("subtittle").innerHTML = "Try a higher number!";
                    alert("Try a higher number!");
                }
                else{
                    document.getElementById("changer").src="img/fool.gif";
                    alert("Please input just numbers from 1 to 99");
                }
        }
        else{
            document.getElementById("changer").src="img/fool.gif";
            alert("Please Indicate a Number");
        }
}
function resetit(){
    randall = Math.ceil(Math.random() * 99);
    document.getElementById("changer").src="img/one.gif";
    document.getElementById("notification").innerHTML = "";
    document.getElementById("subtittle").innerHTML = "Try your guess";
    document.getElementById("parag").innerHTML = "Input a number from 1 to 99";
    document.getElementById("getter").style = (display = "block");
    document.getElementById("starter").style = (display = "inline-block");
    alert("Do you think you can win this time?");
}