//===========varaibales===========================

var numSquare = 10;
var color =generateRandomColors(numSquare);
var square = document.querySelectorAll(".square");
var pickedcolor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var message = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var easyBtn = document.getElementById("easy");
var hardBtn = document.getElementById("hard");
var medBtn = document.getElementById("med");
var comxBtn = document.getElementById("comx");
var perxBtn = document.getElementById("perx");





//======================easy button=================
easyBtn.addEventListener("click", function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    medBtn.classList.remove("selected");
    comxBtn.classList.remove("selected");
    perxBtn.classList.remove("selected");
    numSquare = 5;
    color = generateRandomColors(numSquare);
    pickedcolor = pickColor();
    colorDisplay.textContent = pickedcolor;
    message.textContent = " ";
    for(var i = 0; i < square.length; i++){
        if(color[i]){
            square[i].style.backgroundColor = color[i];
        }
        else{
            square[i].style.display = "none";
        }
    }
});
//==================medium button=====================
medBtn.addEventListener("click", function(){
    medBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    hardBtn.classList.remove("selected");
    comxBtn.classList.remove("selected");
    perxBtn.classList.remove("selected");
    numSquare = 10;
    color = generateRandomColors(numSquare);
    pickedcolor = pickColor();
    colorDisplay.textContent = pickedcolor;
    message.textContent = " ";
    for(var i = 0; i < square.length; i++){
        if(color[i]){
            square[i].style.backgroundColor = color[i];
            square[i].style.display = "block";
        }
        else{
            square[i].style.display = "none";
        }
    }
});

//==================hard button=====================
hardBtn.addEventListener("click", function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    medBtn.classList.remove("selected");
    comxBtn.classList.remove("selected");
    perxBtn.classList.remove("selected");
    numSquare = 15;
    color = generateRandomColors(numSquare);
    pickedcolor = pickColor();
    colorDisplay.textContent = pickedcolor;
    message.textContent = " ";
    for(var i = 0; i < square.length; i++){
        if(color[i]){
            square[i].style.backgroundColor = color[i];
            square[i].style.display = "block";
        }
        else{
            square[i].style.display = "none";
        }
    }
});

//==================complex button=====================
comxBtn.addEventListener("click", function(){
    hardBtn.classList.remove("selected");
    easyBtn.classList.remove("selected");
    medBtn.classList.remove("selected");
    comxBtn.classList.add("selected");
    perxBtn.classList.remove("selected");
    numSquare = 20;
    color = generateRandomColors(numSquare);
    pickedcolor = pickColor();
    colorDisplay.textContent = pickedcolor;
    message.textContent = " ";
    for(var i = 0; i < square.length; i++){
        if(color[i]){
            square[i].style.backgroundColor = color[i];
            square[i].style.display = "block";
        }
        else{
            square[i].style.display = "none";
        }
    }
});

//==================perplex button=====================
perxBtn.addEventListener("click", function(){
    hardBtn.classList.remove("selected");
    easyBtn.classList.remove("selected");
    medBtn.classList.remove("selected");
    comxBtn.classList.remove("selected");
    perxBtn.classList.add("selected");
    numSquare = 25;
    color = generateRandomColors(numSquare);
    pickedcolor = pickColor();
    colorDisplay.textContent = pickedcolor;
    message.textContent = " ";
    for(var i = 0; i < square.length; i++){
        square[i].style.backgroundColor = color[i];
        square[i].style.display = "block";
        
    }
});

//============h1 & dispaly color===========================
colorDisplay.textContent = pickedcolor;

for(var i = 0; i < square.length; i++){
    //assigning color..........
    square[i].style.backgroundColor = color[i];

    //clickevent................
    square[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;
        //compare..............
        if(clickedColor === pickedcolor){
           message.textContent = "correct !"
           resetButton.textContent = "Play again";
           changeColors(color);
           h1.style.backgroundColor = pickedcolor;
        }
        else{
            this.style.backgroundColor = "rgb(31, 8, 8)";
            message.textContent = "try again !"
        }
    })
}

//========================functions==========================
function changeColors(color){
    for(var i = 0; i < color.length; i++)
    //changing color
    square[i].style.backgroundColor = pickedcolor;
}

function pickColor(){
    var random = Math.floor(Math.random() * color.length);
    return color[random];
}

function generateRandomColors(num){
    var arr = [];
    for(var i = 0; i < num; i++){
        arr.push(randomColor())
    }
    return arr;
}

function randomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

//==========================reset================================
resetButton.addEventListener("click",function(){
    color = generateRandomColors(numSquare);
    pickedcolor = pickColor();
    colorDisplay.textContent = pickedcolor;
    for(var i = 0; i < square.length; i++){
        square[i].style.backgroundColor = color[i];
    }
    h1.style.backgroundColor = "steelblue";
    message.textContent = " ";
    resetButton.textContent = "New Colors"
})