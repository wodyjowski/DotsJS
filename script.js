'use strict';

const canvas = document.getElementById('canvas');

const ctx = canvas.getContext('2d');

window.requestAnimationFrame(draw);

let i = 0;

const stars = []


class Star {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
}

for (let index = 0; index < 20; index++) {
    stars.push(new Star(getRandomX(),getRandomY()));
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

function draw() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;

    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);


    ctx.fillStyle = "#FF0000";
    for (let index = 0; index < stars.length; index++) {
        const element = stars[index];

        ctx.fillRect(element.x, element.y, 4, 4);
    }




    window.requestAnimationFrame(draw);
}