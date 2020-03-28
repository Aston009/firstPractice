// function showFirstMessage(text) {
//     alert(text);
// }

// showFirstMessage('Hello');

// function calc (a,b) {
//     return (a + b);
// }

let calc = (a,b) => a+b;

console.log(calc (2,2));

console.log(calc (4,8));

function retVar () {
    let num = 50;
    return num;
}

let anotheNum = retVar();
console.log(anotheNum);
 
let str = "text";
console.log(str.length); //свойство

console.log(str.toUpperCase());//методы
console.log(str.toLowerCase());

let twelve = "12.2";

console.log(Math.round(twelve));

let twelve = "12.2px";

console.log(parseInt(twelve));
console.log(parseFloat(twelve));