//jshint ES-version:6

var superheroes = require("superheroes");
var supervillains = require("supervillains");

var mySuperheroes = superheroes.random();
var mySupervillains = supervillains.random();

console.log("====HEROES VS VILLAINS====");
console.log("Hero: "+mySuperheroes);
console.log("Villain: "+mySupervillains);
