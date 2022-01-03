var main;
var table2;
var table3;
var aplhabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var animals = ['CAT', 'DOG', 'PIG', 'RAT', 'ANT', 'BAT', 'COW', 'BEE', 'FLY', 'APE', 'FOG', 'HOG', 'EMU', 'OWL'];
var randAnimals = [];
var countries = ['CHINA', 'INDIA', 'JAPAN', 'NEPAL', 'QATAR', 'SYRIA', 'YEMEN', 'ITALY', 'MALTA', 'SPAIN', 'BENIN', 'EGYPT', 'GABON', 'GHANA', 'KENYA', 'LIBYA', 'NIGER', 'SUDAN', 'CHILE', 'HAITI']
var randCountries = [];
var cities = ['LONDON','NEWYORK','PARIS','BANGKOK','BERLIN','DUBAI','ROME','SEOUL','TOKYO','DELHI','MADRID','DUBLIN']
var randCities=[];
var correctAnswers = [];
var score = 0;
var answer = "";
var metric = 0;
var storeAnswer = [];
var usedRows = [];
var usedRows2=[];
var usedRows3=[];
var highestScore=10;
window.onload= function () {

    main = document.getElementById("table1");
    table2 = document.getElementById("table2");
    table3= document.getElementById("table3")
    var canvasleft = document.getElementById("canvas-left");
    var l = canvasleft.getContext('2d');
    var x = 10//Math.floor(Math.random() * l.width);
    var y = 10//Math.floor(Math.random() * l.height);
    var vx = 0 //Math.floor(Math.random() * 2);
    var vy = 0.25 //Math.floor(Math.random() * 4);
    var radius = 10;
    moveLeft();
    function moveLeft() {

        requestAnimationFrame(moveLeft);
        l.clearRect(0, 0,canvasleft.width,canvasleft.height);
        //l.font = "50px Verdana";
        l.font = "30px Comic Sans MS";
        l.fillStyle = "blue";
        aplha=answer.split();
        //let aplha=[aplhabets[getRand(25)],aplhabets[getRand(25)],aplhabets[getRand(25)],aplhabets[getRand(25)],aplhabets[getRand(25)],aplhabets[getRand(25)],aplhabets[getRand(25)],aplhabets[getRand(25)],aplhabets[getRand(25)]];
        let i=1;
        for(let a in aplha){

            l.fillText(aplha[a],x+(i*45),y);
            i++;
        }
         if (y + radius > canvasleft.height)
             vy = 0 - vy;

         if (y - radius < 0)
             vy = 0 - vy;

         x = x + vx;
         y = y + vy;

    }
}
function getRand(max){

    return Math.floor(Math.random()*max);
}


//Starting Level 1

function level1()
{
    //Creating Table with Random Alphabets

    for (let i = 0; i < 7; i++) {
        var row = main.insertRow(i)
        for (let i = 0; i < 7; i++) {
            row.insertCell().innerHTML = aplhabets[Math.floor(Math.random() * 26)];
        }
    }
    storeRandomNamesTable();
}

function storeRandomNamesTable()
{


    //Storing animal names in randAnimal Array
    let z=0;
    while (z<4) {

        let ani = animals[getRand(animals.length)];
        if (randAnimals.indexOf(ani) == -1) {
            randAnimals[z] = ani;
            z++;
        }
    }

    //Storing Answers in correctAnswer Array
    correctAnswers = randAnimals;

    //Assigning random positions to animal names in matrix
    for (let i = 0; i < randAnimals.length; i++) {
        let randAnimal = randAnimals[i];
        let randRow = getRand(main.rows.length);

        //Checking if row has been used previously.
        do {
            randRow = getRand(main.rows.length);
        } while (usedRows.indexOf(randRow)!=-1);

        usedRows.push(randRow);

        //Boundary - Length of animal name (7-3);
        let startPoint = getRand(4);

        //Storing value in each of the matrix cells.
        for (let j = 0; j < 3; j++) {

            main.children[0].children[randRow].children[startPoint + j].innerHTML = randAnimal[j];
            //document.getElementById("table1").children[0].children[randRow].children[startPoint + j].style.color='blue';
        }
    }

    document.getElementById("div-controls").style.display='block';
    document.getElementById("div-timer-container").style.display='block';
}


// Starting Level 3

function level3() {

    startTimer();
    document.getElementById("table2").style.display = 'none';
    document.getElementById("div-result").style.display='none';
    //document.getElementById("btn-start").disabled=false;
    for (let i = 0; i < 10; i++) {
        var row = table3.insertRow(i)
        for (let i = 0; i < 10; i++) {
            row.insertCell().innerHTML = aplhabets[Math.floor(Math.random() * 26)];
        }
    }
    storeRandomNamesTableLevel3();

}

function storeRandomNamesTableLevel3()
{
    let k=0;
    while (k<4) {
        let ani = countries[getRand(countries.length)];
        if (randCountries.indexOf(ani) == -1) {
            randCountries[k] = ani;
            k++;
        }
    }

     correctAnswers = randCountries;
    //Checking if row has been used previously.
    //let randRow = getRand(table2.rows.length);

     for (let i = 0; i < randCountries.length; i++) {
         let randCountry = randCountries[i];
         let randRow = getRand(table3.rows.length);

         do {
             randRow = getRand(table3.rows.length);
         } while (usedRows3.indexOf(randRow)!=-1);

         usedRows3.push(randRow);

         let startPoint = getRand(5); //Boundary - Length of animal name (10-5);


         for (let j = 0; j < 5; j++) {
            document.getElementById("table3").children[0].children[randRow].children[startPoint + j].innerHTML = randCountry[j];
             //document.getElementById("table3").children[0].children[randRow].children[startPoint + j].style.color='blue';
         }
     }
    getMatrixValue3();
    document.getElementById("div-controls").style.display='block';
    document.getElementById("div-timer-container").style.display='block';
 }

 //Starting Level-2

function level2()
{
    startTimer();
    //Creating Table with Random Alphabets
    document.getElementById("btn-start").style.display='none';
    document.getElementById("div-result").style.display='none';
    document.getElementById("table1").style.display = 'none';
    for (let i = 0; i < 9; i++) {
        var row = table2.insertRow(i)
        for (let i = 0; i < 9; i++) {
            row.insertCell().innerHTML = aplhabets[Math.floor(Math.random() * 26)];
        }
    }
    storeRandomNamesTable2();
}


function storeRandomNamesTable2()
{

    //Storing animal names in randAnimal Array
    let z=0;
    while (z<4) {

        let ani = cities[getRand(cities.length)];
        if (randCities.indexOf(ani) == -1) {
            randCities[z] = ani;
            z++;
        }
    }

    //Storing Answers in correctAnswer Array
    correctAnswers = randCities;
    //Assigning random positions to animal names in matrix
    for (let i = 0; i < randCities.length; i++) {
        let randCity = randCities[i];
        let randRow = getRand(table2.rows.length);

        //Checking if row has been used previously.
        do {
            randRow = getRand(table2.rows.length);
        } while (usedRows2.indexOf(randRow)!=-1);

        usedRows2.push(randRow);

        //Boundary - Length of animal name (9-7);
        let startPoint = getRand(2);

        //Storing value in each of the matrix cells.
        for (let j = 0; j < randCity.length; j++) {

            table2.children[0].children[randRow].children[startPoint + j].innerHTML = randCity[j];
            //document.getElementById("table2").children[0].children[randRow].children[startPoint + j].style.color='blue';
        }
    }
    getMatrixValue2();
    document.getElementById("div-controls").style.display='block';
    document.getElementById("div-timer-container").style.display='block';
}




 //Initialising Matrices

function getMatrixValue3(){

    for(let i=0; i<table3.rows.length;i++)
    {
        for(let j=0; j<table3.rows.length;j++)
        {

            (document.getElementById("table3").children[0].children[i].children[j]).addEventListener("click",onCellSelect)
        }
    }
}

function getMatrixValue2(){

    for(let i=0; i<table2.rows.length;i++)
    {
        for(let j=0; j<table2.rows.length;j++)
        {

            (document.getElementById("table2").children[0].children[i].children[j]).addEventListener("click",onCellSelect)
        }
    }
}
function getMatrixValue(){

        for(let i=0; i<main.rows.length; i++)
        {
            for(let j=0; j<main.rows.length; j++)
            {
                (document.getElementById("table1").children[0].children[i].children[j]).addEventListener("click",onCellSelect)
            }
        }
}





//Answer Handling Stuff


function onCellSelect()
{
    answer=answer+this.innerHTML
    this.style.color='red';
    let text="Your Selection : " + answer;
    document.getElementById("div-ans").innerHTML=text;
}

function clearAnswer()
{
    answer='';
    document.getElementById("div-ans").innerHTML='';
}

function checkAnswer()
{


    if(storeAnswer.indexOf(answer)==-1) {
        if (correctAnswers.indexOf(answer) != -1) {
            storeAnswer.push(answer);
            score++;
        }
    }
    document.getElementById("score").innerHTML = "Your Score is : " + score;

    if(score==4)
    {
        clearInterval(myVar);
        //document.getElementById("btn-start").disabled=true;
        metric=(90-count)/4; //Time consumed per answer
        document.getElementById("score").innerHTML = "Your Score is : " + score + " Your Current Metric is : " + metric;
        document.getElementById("div-result").style.display='block';
        document.getElementById("div-result").innerHTML = "Good Job!!! Click on Start-Level 2 To Begin Next Level"
        document.getElementById("btn-level2").disabled=false;
        document.getElementById("btn-level2").style.display='block';
        document.getElementById("btn-leve1").style.display='none';
    }
    if(score==8)
    {
        clearInterval(myVar);
        metric=(90-count)/8; //Time consumed per answer
        document.getElementById("score").innerHTML = "Your Score is : " + score + " Your Current Metric is : " + metric
        document.getElementById("div-result").style.display='block';
        document.getElementById("div-result").innerHTML = "Good Job!!! Click on Start-Level 3 To Begin Next Level"
        document.getElementById("btn-level3").disabled=false;
        document.getElementById("btn-level3").style.display='block';
        document.getElementById("btn-level2").style.display='none';
    }
    if(score==12)
    {
        clearInterval(myVar);
        metric=(90-count)/12; //Time consumed per answer
        document.getElementById("score").innerHTML = "Your Score is : " + score + " Your Metric is : " + metric;
        //document.getElementById("btn-level2").style.display='block';
        // document.getElementById("btn-leve1").style.display='none';
        document.getElementById("btn-level3").style.display='block';
        document.getElementById("btn-level2").style.display='none';
        highestScore=localStorage.getItem("BestMetric");
        if(metric<highestScore)
        {
            highestScore=metric;
            document.getElementById("p-high").style.display='block';
            document.getElementById("p-high").innerHTML = "Your metric is : " + metric+" Congratulations !!! You have Beaten the Best Score " + localStorage.getItem("BestMetric");
            localStorage.setItem("BestMetric", highestScore);
        }
        else if(highestScore==null)
        {
            highestScore=metric;
            document.getElementById("p-high").style.display='block';
            localStorage.setItem("BestMetric", highestScore);
            document.getElementById("p-high").innerHTML = "Your metric is : " + metric+" Congratulations !!! You are the first Player and Have set the Highest Score to : " + localStorage.getItem("BestMetric");
        }
        else{
            document.getElementById("p-high").style.display='block';
            document.getElementById("p-high").innerHTML = "Your metric is : " +metric+"  Not too Far from best score " + localStorage.getItem("BestMetric");
        }

    }
    clearAnswer();
    //metric=count/4;
}

function readInstructions()
{
    document.getElementById("btn-leve1").style.display='block';
    document.getElementById("btn-ack").disabled=true;
}










// Timer Stuff




var myVar;
count=90;
function myTimer() {

    getMatrixValue();
    var text= (count);
    document.getElementById("btn-leve1").disabled=true;
    document.getElementById("btn-level2").disabled=true;
    document.getElementById("btn-level3").disabled=true;
    document.getElementById("base-timer-label").innerHTML=formatTimeLeft(text);
    count=count-1;
    if(count==-1)
    {
        clearInterval(myVar);
    }
    if(count==0 && score < 12 )
    {
        document.getElementById("div-alert").style.display='block';
        document.getElementById("div-alert").innerHTML="Better luck Next Time!!, Please Click on Reset Button to Start Again."
    }
}
function  startTimer(){
    myVar = setInterval(myTimer, 1000);
    document.getElementById("btn-clear").disabled=false;
    document.getElementById("btn-submit").disabled=false;
}

function formatTimeLeft(time) {

    // The largest round integer less than or equal to the result of time divided being by 60.
    const minutes = Math.floor(time / 60);

    // Seconds are the remainder of the time divided by 60 (modulus operator)
    let seconds = time % 60;

    // If the value of seconds is less than 10, then display seconds with a leading zero
    if (seconds < 10) {
        seconds = `0${seconds}`;
    }

    // The output in MM:SS format
    return `${minutes}:${seconds}`;
}

function reset(){

    window.location.reload(false);

}


