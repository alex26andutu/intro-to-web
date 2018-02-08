function log(a) {
    console.log(a);
}

log(2);

function hello(x) {
    return x
}
console.log(hello("Salut!"));

log(hello(7));

function sum(a, b) {
    return a + b;
}

log(sum(3, 5));


function double(c) {
    return c * 2;
}
var nr1 = 4;
var nr2 = 7;
log(double(5));

log(double(double(nr1)));

log(double(sum(nr1, nr2)));

log(sum
    (
    sum(nr2, nr2),
    sum(nr2, nr2)
    )
);
log(mul(2, 9));
function mul(a, b) {
    return a * b;

};

log(aprox15(-300));
function aprox15(y) {
    if (y > 0) {
        return 15;
    } else {
        return -15;
    }
}

//I
log(aproxF(1, 100));
function aproxF(a, b) {
    if (a < 0) {
        if (b < 0) {
            return b;
        } else {
            return -b;
        }
    }
    if (a > 0) {
        if (b > 0) {
            return b;
        } else {
            return -b;
        }
    }
}

//II

function aproxF(a, b) {
    var bMin = b,
    var bMax = b;

    if (b < 0) {
        bMax = -b;
    } else {
        bMin = -b;
    }

    if (a > 0) {
        return bMax;
    } else {
        return bMin;
    }
}