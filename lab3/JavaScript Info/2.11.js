alert( null || 2 || undefined ); //2

alert( alert(1) || 2 || alert(3) ); //1 & 2

alert( 1 && null && 2 ); //null

alert( alert(1) && alert(2) ); //1 & undefined

alert( null || 2 && 3 || 4 ); //3

if (age >= 14 && age <= 90){
    alert("inclusive");
}

if (!(age >= 14 && age <= 90)){
    alert("not so inclusive");
}

if (-1 || 0) alert( 'first' );
if (-1 && 0) alert( 'second' );
if (null || -1 && 1) alert( 'third' );
//1 & 3

let userName = prompt("Who's there?", '');
if (userName === 'Admin') {
    let pass = prompt('Password?', '');
    if (pass === 'TheMaster') {
        alert( 'Welcome!' );
    } else if (pass === '' || pass === null || pass === 'Cancel') {
        alert( 'Canceled' );
    } else {
        alert( 'Wrong password' );
    }
} else if (userName === '' || userName === null || userName==='Cancel') {
    alert( 'Canceled' );
} else {
    alert( "I don't know you" );
}