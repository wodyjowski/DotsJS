'use strict';

let maxStars = 500;
const stars = []

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');



window.requestAnimationFrame(draw);

function initStars()
{
    
}


class Star {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.size = getRandomFloat(0.5, 5);
      this.speed = getRandomFloat(0.1, 1);

    }
}

function addStars()
{
    if(stars.length >= maxStars) return;

    let random = getRandomInt(0, 10);
    
    for (let index = 0; index < random; index++) {
        stars.push(new Star(getRandomX(), 0));
    }
}


function getRandomX() {
    return getRandomInt(0, window.innerWidth);
}

function getRandomY() {
    return getRandomInt(0, window.innerHeight);
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomFloat(min, max) {
    return Math.random() * (max - min) + min;
}

function draw() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;

    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);


    addStars();

    ctx.fillStyle = "#FFFFFF";
    for (let index = 0; index < stars.length; index++) {
        const element = stars[index];

        ctx.fillRect(element.x, element.y, element.size, element.size);
    }

    moveStars();


    window.requestAnimationFrame(draw);
}

function moveStars()
{
    const center = {
        x: window.innerWidth/2,
        y: window.innerHeight/2
    };

    for (let index = 0; index < stars.length; index++) {
        const element = stars[index];
        


            element.y += element.speed;
   

        if(element.y >= window.innerHeight)
        {
            stars.splice(stars.indexOf(element),1);
        }
    }
}