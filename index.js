
var randomNumber1= randomNumber1=Math.random();
randomNumber1=randomNumber1*6;
randomNumber1=Math.floor(randomNumber1);


var randomNumber2= randomNumber2=Math.random();
randomNumber2=randomNumber2*6;
randomNumber2=Math.floor(randomNumber2);
 

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="player 1 win"
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="player 2 win"
}
else if(randomNumber1==randomNumber2){
    document.querySelector("h1").innerHTML="Its Draw!"
}


if(randomNumber1==0){
    document.querySelector("img.img1").setAttribute("src","/images/dice1.png");
}
else if(randomNumber1==1){
    document.querySelector("img.img1").setAttribute("src","/images/dice2.png");
}
else if(randomNumber1==2){
    document.querySelector("img.img1").setAttribute("src","/images/dice3.png");
}
else if(randomNumber1==3){
    document.querySelector("img.img1").setAttribute("src","/images/dice4.png");
}
else if(randomNumber1==4){
    document.querySelector("img.img1").setAttribute("src","/images/dice5.png");
}
else if(randomNumber1==5){
    document.querySelector("img.img1").setAttribute("src","/images/dice6.png");
}


if(randomNumber2==0){
    document.querySelector("img.img2").setAttribute("src","/images/dice1.png");
}
else if(randomNumber2==1){
    document.querySelector("img.img2").setAttribute("src","/images/dice2.png");
}
else if(randomNumber2==2){
    document.querySelector("img.img2").setAttribute("src","/images/dice3.png");
}
else if(randomNumber2==3){
    document.querySelector("img.img2").setAttribute("src","/images/dice4.png");
}
else if(randomNumber2==4){
    document.querySelector("img.img2").setAttribute("src","/images/dice5.png");
}
else if(randomNumber2==5){
    document.querySelector("img.img2").setAttribute("src","/images/dice6.png");
}