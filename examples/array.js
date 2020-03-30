let arr = ['first', 2, 3, 'four', 5];

arr.pop();
arr.push('5');
arr.shift();
arr.unshift('1');
console.log(arr);

for(let i = 0; i < arr.length; i++){
    console.log (arr[i]);
}

arr.forEach(function(item, i, mass) {
    console.log(i + ': ' + item + ' (array ' + mass + ')');
});

// let massi = [1,2,3,4,5];

// for (let i in massi) {
//     console.log (i);
// }

// for (let i of massi) {
//     console.log (i);
// }

// let ans = prompt('',''),
//     arr = [];
// arr = ans.split(',');
// console.log(arr);

// let arr = ['asea', 'aes34', '324er'],
//     i = arr.join(', '); 

// console.log(i);

// let ib = i.split(', ');
// console.log(ib);

let arr = [1, 15, 4],
    i = arr.sort(compareNum); 

function compareNum(a,b) {
    return a-b;
}

console.log(arr);

