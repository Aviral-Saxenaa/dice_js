
var randomno1=(Math.floor(Math.random()*6)+1);  //1-6

var randomimage1=`dice${randomno1}.png`;

var randomno2=(Math.floor(Math.random()*6)+1);  //1-6

var randomimage2=`dice${randomno2}.png`;

var randomimagesource1=`images/${randomimage1}`;

var randomimagesource2=`images/${randomimage2}`;

document.querySelectorAll("img")[0].setAttribute("src",randomimagesource1);

document.querySelectorAll("img")[1].setAttribute("src",randomimagesource2);

if(randomno1>randomno2){
        document.querySelector(".heading").innerHTML="🚩 Player 1 Wins";
}
else if(randomno1<randomno2){
        document.querySelector(".heading").innerText=" Player 2 Wins 🚩";
}
else{
        document.querySelector(".heading").innerText="Draw";
}