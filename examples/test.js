// 1) 5
// let x = 5;
// alert( x++ );
// 2) NaN
x2 = [] + false - null + true;
console.log(x2);
// 3) 2
// let y3 = 1;
// let x3 = y3 = 2;
// alert(x3);
// 4) 12
let x4 = [] + 1 + 2;  
console.log(x4);
// 5) 1
console.log('1'[0]);
// 6) null 
let x6 = 2 && 1 && null && 0 && undefined;
console.log(x6);
// 7) нет
console.log(false && false)
// 8) 3
// alert(null || 2 && 3 || 4)
// 9) no
// let a = [1, 2, 3],
//     b = [1, 2, 3];
// if(a == b) {
//     console.log ('yes');
// } else {
//     console.log('no')
// }
// 10) Infinity
// 11) нет
    if ('Ёжик' > 'яблоко') {
        console.log ('yes');
    } else {
        console.log('no')
    }
// 12) 2 
console.log (0 || '' || 2 || undefined || true || false)