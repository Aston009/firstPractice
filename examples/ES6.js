//Interpolation:
let name = 'Ivan',
    age = 30,
    mail = 'ex@mail.ru';

// document.write('User ' + name + ' ' + age + ' age. mail: ' + mail);
document.write(`User ${name} ${age} age. His mail:  ${mail}`);

//let or const
function makeArray() {
    var items = [];

    for(let i = 0; i < 10; i++) {
        var item = function() {
            console.log(i)
        };
        items.push(item)
    }

    return items;
}

var arr = makeArray();

arr[1]();
arr[3]();
arr[7]();

//arrow functions

let fun = () => {
    console.log(this);
};

// fun();

let obj = {
    number: 5,
    sayNumber: function() {
        let say = () => {
            console.log(this);
        };
        say();
    }
};
obj.sayNumber();

let btn  = document.querySelector('button')

// btn.addEventListener('click', function() {
//     let show = () => {
//         console.log(this);
//     };
//     show();
// });

btn.addEventListener('click', () => {console.log('Hello')})
//берет у родителя

//Параметры по умолчанию:
function calcOrDouble(number, basis = 2) {
    // basis = basis || 2; //Если передано то так, нет - 2 ES5
    console.log(number*basis);
}
calcOrDouble(3,5);
calcOrDouble(6);

//classes:

class Rectangle {
    constructor(height, width = 20) {
        this.height = height;
        this.width = width;
    }
    calcArea() {
        return this.height * this.width;
    }
}

const square = new Rectangle(10);

console.log(square.calcArea());

//Spread Разворот

let video = ['youtube', 'vimeo', 'rutube'],
    blogs = ['wordpress', 'livejournal', 'blogger'],
    internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}
let numbers = [2, 5, 7];

log(...numbers);