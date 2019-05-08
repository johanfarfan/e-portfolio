var numberBox = [];
var randall = 0;
var qty;

//our friendly function randy will generate the numbers, randomly because its randy!
function randy(){
    qty = document.getElementById("putIt").value
        if (qty > 0){
                for (i = 0; i < qty; i++){
                    randall = Math.ceil(Math.random() * 9999);
                        if (randall > 2017){
                            numberBox[i] = randall;
                        }else{
                                while (randall < 2017){
                                    randall = Math.ceil(Math.random() * 9999);
                                }
                            numberBox[i] = randall;
                        }
                }
                for(i = 0; i <qty; i++){
                        if (i > 0) document.getElementById("prompter").innerText = document.getElementById("prompter").innerText + " - " + numberBox[i];
                        else document.getElementById("prompter").innerText = numberBox[i];
                }
            document.getElementById("comments").innerText = "Now that you know these dates, which date do you think refers to the end of our word? HAHAHA";
        }
        else alert("Please introduce a valid number");
}
function eraser(){
    document.getElementById("putIt").value = ""
    document.getElementById("prompter").innerText = ""
    document.getElementById("comments").innerText = ""
}