let a = +prompt("First number:", "");
let b = +prompt("Second number:", "");
alert( a + b );

function readNumber() {
    let num;
    do {
        num = prompt("Enter a number please?", 0);
    } while ( !isFinite(num) );
    if (num === null || num === '') return null;
    return +num;
}
alert(`Read: ${readNumber()}`);

function random(min, max) {
    return min + Math.random() * (max - min);
}

alert( random(1, 5) );
alert( random(1, 5) );
alert( random(1, 5) );

function random(min, max) {
    return min + Math.random() * (max - min);
}
alert( random(1, 5) );
alert( random(1, 5) );
alert( random(1, 5) );