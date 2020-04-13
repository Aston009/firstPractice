function User(name,id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log('Hello! ' + this.name)
    }
}
User.prototype.exit = function(name) {
    console.log('User ' + this.name + ' exit');
} 

let ivan = new User('Ivan', 25),
    alex = new User('Alex', 20);

    console.log(ivan);
    console.log(alex);

    ivan.exit();
'use strict';
function showThis(a, b) {
    console.log(this);
    function sum() {
        console.log(this);
        return a + b
    }
    console.log(sum());
}
showThis(4, 5);
showThis(5, 5);

let obj = {
    a: 20,
    b: 15,
    sum: function() {
        console.log(this);
    }
}
obj.sum();

let user = {
    name: 'John'
};

function sayName(surname) {
    console.log(this);
    console.log(this.name + surname);
}

console.log(sayName.call(user, 'Smith'));
console.log(sayName.apply(user, ['Snow']));

////////////////////////////////////

function count(number) {
    return this * number;
}
let double = count.bind(2);
console.log(double(3));
console.log(double(10));


//1) просто вызов функции -  window/undefiend
//2) Метод объекта - this = объект
//3)Контруктор new - this = новый объект
//4) Указания конкретного контекста - call, apply, bind