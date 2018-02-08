var pag1 = 1;
var Alex = "Alex";
var name = Alex;
var age = 31;
var phoneNumber = "0747625340";
var married = false;

alert("Hello! My name is " + name + " and I am " + age + " years old!!");

//#WEIRD #2
var x = undefined;
var y = null;

alert(typeof x);

//#WEIRD #2
typeof x; //undefine

var myPhone = {
    color: "silver",
    price: 700,
    weight: "112g",
};

myPhone.screen = "12inch";
console.log(myPhone);

var empty = {};
empty.leptop = "alb";

var pointA ={
    x: 0,
    y: 1
};

var pointB ={
    x: 10,
    y: 11
};

//var distance = Math.sqrt((pointB.x - pointA.x) * (pointB.x - pointA.x) + (pointB.y - pointA.y) * (pointB.y - pointA.y));
//console.log(distance);

console.log(getDistance(pointA, pointB));

function getDistance(p1, p2) {
    console.log("De la Alex, se stie!");
    return Math.sqrt((p2.x - p1.x) * (pointB.x - p1.x) + (pointB.y - pointA.y) * (pointB.y - pointA.y));
}
