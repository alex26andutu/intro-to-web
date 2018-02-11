function log(a) {
    console.log(a);
};

log(2);

function hello(x) {
    return x
};
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
var nr3 = -7;
var nr4 = 1;
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

// // function aproxF(a, b) {
// //     var bMin = b,
// //     var bMax = b;

// //     if (b < 0) {
// //         bMax = -b;
// //     } else {
// //         bMin = -b;
// //     }

// //     if (a > 0) {
// //         return bMax;
// //     } else {
// //         return bMin;
// //     }
// }//------------

// ex 1

log(an(2018));
function an(a) {
    if (a === 2000) {
        return "2000 Commet";
    } else {
        if (a > 1990 && a < 2000) {
            return "Millenials";
        } else {
            if (a < 1990) {
                return "Old folks";
            } else {
                if (a > 2000 && a != 2018) {
                    return "New folks";
                } else {
                    if (a === 2018) {
                        return "2018!!!";
                    }
                }
            }
        }
    }
};

//ex 2

log(neg(0));
function neg(x) {
    if (x < 0) {
        return x;
    } else {
        return -x;
    }
}

//ex 3

//pentru 67
log("ceva");
log(sum(double(mul(nr1, nr2)), sum(nr1, nr2)));

//pentru -67

log(neg(sum(double(mul(nr1, nr2)), sum(nr1, nr2))));

//pentru -3

log(sum(neg(nr2), nr1));

//ex 4

log(cub(3));
function cub(x) {
    return mul(x, mul(x, x));
};

//ex 5

log(min(7, 15, 2))
function min(a, b, c) {
    if (a <= b && a <= c) {
        return a;
    } else {
        if (b <= a && b <= c) {
            return b;
        } else {
            return c;
        }
    }

};

//ex 6

log(length("Salut Alex!"));
function length(a) {
    return a.length
};

//ex 7

log(replaceF("Home Welcome!", "Home"));
function replaceF(a, b) {
    return a.replace(b, "the KIt!")
};

//-------

// Object.prototype.studiez = "Alex";
// var x={};

// log (x.studiez);

// Object.prototype.isPrototypeOf = function(){
//     return "joker, joker";
// }

// var a = "alb";
// alert(a.isPrototypeOf());

// for (var i = 0; i < ramdomStuff.lecgth; i += 1) {

// }

// log(isDayOfTheWeek("Tuesday"));
// var li = ["Alex", "Pava", "Petru", "Diana"];
// for (var i = 0; i < li.length; i += 1) {
//     log(li[i]);
// }

// // var daysOfTheWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
// // function isDayOfTheWeek(day) {
// //     for (var i = 0; i < daysOfTheWeek.length; i++) {
// //         if (day === daysOfTheWeek[i]) {
// //             return true;
// //         }
// //         return false;
// //     }
// // }

log(search("alex", ["balex", "alexandru", "bob"]));

function search(str, list) {
    var rez = [];
    for (var i = 0; i < list.length; i++) {
        if (list[i].includes(str)) {
            rez.push(list[i]);
        }
    } return rez;
}

log(search("alex", ["balex", "alexandru", "bob"]));

function search(str, list) {
    var rez = [];
    for (var i = 0; i < list.length; i++) {
        if (list[i].startsWith(str)) {
            rez.push(list[i]);
        }
    } return rez;
}

log(search(2, [10, 8, 11, 14]));

function search(nr, list) {
    var rez = [];
    for (var i = 0; i < list.length; i++) {
        if (list[i] % nr != 0) {
            rez.push(list[i]);
        }
    } return rez;
}

function newList(list, num) {
    var rezultat = [num];
    for (var i = 0; i < list.length; i++) {
        rezultat[i + 1] = list[i];
    }
    return rezultat;
}

log(newList([3, 2, 1, 0], 4));

function invert(list) {
    var rez = [];
    for (var i = list.length - 1; i >= 0; i--) {
        rez.push(list[i]);
    }
    return rez;
}

log(invert([4, 3, 2, 1, 0]));

function giveMe(A1, A2) {
    var rezultat = [];
    for (var i = A1; i <= A2; i++) {
        rezultat.push(i)
    }
    return rezultat;
}
log(giveMe(10, 20));

//-----------------------------------------------------

//weekend-exercises

//ex 1

var m = 0;
function mare(a) {
    for (var i = 0; i < a.length; i++) {
        if (a[i] > m) {
            m = a[i];
        }
    } return m;
}
log(mare([37, 12, 100]));

//ex 2

var s = 0;
function mic(a) {
    for (var i = 0; i < a.length; i++) {
        if (a[i] < s) {
            s = a[i];
        }
    } return s;
}
log(mic([12, 37, -100]));

//ex 3

var adun = 0;
function total(a) {
    for (var i = 0; i < a.length; i++) {
        adun += a[i];
    } return adun;
};
log(total([3, 5, 8]));

// //ex 4
// //I
function palindrome(a) {
    for (var i = 0; i < a.length; i++) {
        if (a[i] !== a[a.length - 1 - i]) {
            return false;
        }
    }
    return true;
};
log(palindrome([1, 3, 1]));
//II
function palindrome2(a) {
    for (var i = 0; i < a.length; i++) {
        if (a[i] === a[a.length - 1 + i]) {
            return false;
        }
    }
    return true;
};
log(palindrome2([1, 3, 2, 1]));
//III
function palindrom3(list) {
    
    if (list.length === 0) {
        return true;
    }
    if (list[0] !== list[list.length - 1]) {
        return false
    }
    return palindrom3(list.slice(1, list.length - 1))
}
log(palindrom3([7, 4, 6, 6, 4, 7]))

//ex 5

function inversata(a) {
    for (var i = 0; i < a.length; i++) {
        return a.reverse(a);
    }
};
log(inversata([1, 2, 3, 4]));

//ex 6

function position(a, b) {
    for (var i = 0; i < b.length; i++) {
        if (a === b[i])
            return i;
    } return -1;
};
log(position(5, [1, 7, 5, 9]));