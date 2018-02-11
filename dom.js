// Get by ID -- only one element
function log(a) {
    console.log(a);
}

log(document.getElementById('searchInput'));

// Lesson 1: carefull where you include the JS file. The DOM might
// not be loaded... 😞

// Get by class -- returns a list
log(document.getElementsByClassName('btn bum'));

/* REZOLVARE*/
var names = [
    'Pava',
    'Lucian',
    'Petru',
    'Diana',
    'Alex',
    'Rucs',
    'Florin',
    'Culita',
    'Alexandru',
    'Costel',
    'Bobita',
    'Bob',
    'Bubu'
];

// Pas 1: punem mana pe elementele necesare
var myInput = document.getElementById('searchInput');
var myList = document.getElementById('nameList');
var myReset = document.getElementById('resetBtn');
var myName = document.getElementById('nameInput');
var myPass = document.getElementById('passInput');
// var myButton = document.getElementById('deleteButton');

log(7)
for (var i = 0; i < names.length; i++) {
    // Le adaug in HTML pe fiecare, pe rand
    myList.innerHTML += '<li>' + names[i] + '</li>';
}

// Pas 2: ne legam la eventul de scris ('input')
myInput.addEventListener('input', onType);

myReset.addEventListener('click', onReset);

function onReset() {
    myName.value = null;
    myPass.value = null;
};

function onType() {
    // input.value -- asa pun mana pe ce se afla scris intr-un input
    var filteredNames = search(myInput.value, names);

    // Sterg ce se afla in elementul <ol> din HTML
    myList.innerHTML = '';

    // Iterez prin numele care respecta conditia
    for (var i = 0; i < filteredNames.length; i++) {
        // Le adaug in HTML pe fiecare, pe rand
        myList.innerHTML += '<li>' + filteredNames[i] + '</li>';
    }
}

function search(name, list) {
    var rez = [];
    for (var i = 0; i < list.length; i++) {
        if (list[i].startsWith(name)) {
            rez.push(list[i]);
        }
    }
    return rez;
}
