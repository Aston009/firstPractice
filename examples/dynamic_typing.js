// - to String
// 1)

console.log(typeof(String(4)));

//2)
console.log('ww' + 5);
console.log('ww' + false);
console.log(5 + '');

console.log('https://vk.com/catalog/' + 5);

// - to Number

//1)
console.log(typeof(Number('5')));

//2) унарный плюс

console.log(typeof(5 + +'5'));
//3)

console.log(typeof(parseInt('5px', 10)));


let ans = +prompt('Hello?', '');

// - Boolean 
// false:
// 0, '', null, undefined, NaN

let switcher = null;

if (switcher) {
    console.log('working..')
}

switcher = 1;

if (switcher) {
    console.log('working..')
}

// 2)
console.log(typeof(Boolean('5')));
// 3)
console.log(typeof(!!'5'));

