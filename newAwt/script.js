
function pool() {
   
    document.getElementById('booking').innerHTML ="Pool side Romantic space has been reserved for two!";

    document.getElementById('booking').style.color ="blue";
    }


function exec() {
   
    document.getElementById('executive').innerHTML ="Executive table reserved for six!";

    document.getElementById('executive').style.color ="green";
    }
    
function cap() {
   
    document.getElementById('cappuccino').innerHTML ="You have reserved our world class cappuccino!";

    document.getElementById('cappuccino').style.color ="brown";
    document.getElementById('cappuccino').font.size ="2.5rem";
    }

function groups() {
   
    document.getElementById('group').innerHTML ="Your space for your team is reserved";

    document.getElementById('group').style.color ="red";
    }

function buffet() {
   
    document.getElementById('party').innerHTML ="Your event space is booked!";

    document.getElementById('party').style.color ="green";
    }



    

function addAd() {
    if(typeof(Storage) !== undefined) {
        if(localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount) + 10;
        }else {
            localStorage.clickcount = 10;
        }
        document.getElementById("cuisine1").innerHTML = "Great choice " + localStorage.clickcount + "$ is the total cost" ;
    }else{
        document.getElementById("cuisine1").innerHTML ="Browser doesnt support this feature";   
    }
}

function reset1()
{
    localStorage.clickcount = 0; 
    document.getElementById("cuisine1").innerHTML = "Start all over"; 
}


function addIs() {
    if(typeof(Storage) !== undefined) {
        if(localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount) + 15;
        }else {
            localStorage.clickcount = 15;
        }
        document.getElementById("cuisine2").innerHTML = "Smart choice " + localStorage.clickcount + "$ is the total cost" ;
    }else{
        document.getElementById("cuisine2").innerHTML ="Browser doesnt support this feature";   
    }
}

function reset2()
{
    localStorage.clickcount = 0; 
    document.getElementById("cuisine2").innerHTML = "Let's do it again"; 
}




function addTk() {
    if(typeof(Storage) !== undefined) {
        if(localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount) + 20;
        }else {
            localStorage.clickcount = 20;
        }
        document.getElementById("cuisine3").innerHTML = "Fantastic choice Buddy" + localStorage.clickcount + "$ is the total cost" ;
    }else{
        document.getElementById("cuisine3").innerHTML ="Browser doesnt support this feature";   
    }
}

function reset3()
{
    localStorage.clickcount = 0; 
    document.getElementById("cuisine3").innerHTML = "Start all over"; 
}



function addMh() {
    if(typeof(Storage) !== undefined) {
        if(localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount) + 25;
        }else {
            localStorage.clickcount = 25;
        }
        document.getElementById("cuisine4").innerHTML = "What a choice!! " + localStorage.clickcount + "$ is the total cost" ;
    }else{
        document.getElementById("cuisine4").innerHTML ="Browser doesnt support this feature";   
    }
}

function reset4()
{
    localStorage.clickcount = 0; 
    document.getElementById("cuisine4").innerHTML = "Start all over"; 
}





function addCh() {
    if(typeof(Storage) !== undefined) {
        if(localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount) + 30;
        }else {
            localStorage.clickcount = 30;
        }
        document.getElementById("cuisine5").innerHTML = "Super choice " + localStorage.clickcount + "$ is the total cost" ;
    }else{
        document.getElementById("cuisine5").innerHTML ="Browser doesnt support this feature";   
    }
}

function reset5()
{
    localStorage.clickcount = 0; 
    document.getElementById("cuisine5").innerHTML = "Try another?"; 
}


function addKk() {
    if(typeof(Storage) !== undefined) {
        if(localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount) + 40;
        }else {
            localStorage.clickcount = 40;
        }
        document.getElementById("cuisine6").innerHTML = "You chose this and " + localStorage.clickcount + "$ is the total cost" ;
    }else{
        document.getElementById("cuisine6").innerHTML ="Browser doesnt support this feature";   
    }
}

function reset6()

{
    localStorage.clickcount = 0; 
    document.getElementById("cuisine6").innerHTML = "Start all over"; 
}











//image slide in cooks

var i = 0; //we set a variable called i and initial it to 0. our start point.
var images = []; //also a variable called images which is an empty array
var time = 6000; // a variable called time which is in milliseconds.

//slides of array path
images[0] = 'img/cook1.jpg';
images[1] = 'img/cook2.jpg';
images[2] = 'img/cook3.jpg';
images[3] = 'img/cook4.jpg';
images[4] = 'img/cook5.jpg';
images[5] = 'img/cook6.jpg';
images[6] = 'img/cook7.jpg';

//We create a function which changes the images

function switchImg() {
    document.slider.src = images[i]; //
    if(i < images.length - 1) { //checking to see if the images in the array is the last index of the number in the image length
        i++; // if true, then we want to increment by 1
    } else {
        i = 0; // if at the last index, we reset to zero
    }
    setTimeout("switchImg()", time); // to run the function within the set time in our variable
}

window.onload = switchImg; // to make the function load everytime we visit the page.


//pop up

