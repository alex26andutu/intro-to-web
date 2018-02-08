
var pointA ={
    x1: 2,
    y1: 1
}; 
var pointB = {
    x2: 3,
    y2: 4
}; 
var pointC = {
    x3: 6,
    y3: 7
}; 

console.log(area(pointA, pointB, pointC));

function area(p1,p2,p3){
    return Math.sqrt ((p1.x1*p3.y3-p1.x1*p2.y2+p2.x2*p1.y1-p3.x3*p1.y1+p3.x3*p2.y2-p2.x2*p3.y3)/2);
}

