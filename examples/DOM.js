// let box = document.getElementById('box'),
//     btn = document.getElementsByTagName('button'),
//     circle = document.getElementsByClassName('circle'),
//     heart = document.querySelectorAll('.heart'),
//     oneHeart = document.querySelector('.heart');

// box.style.backgroundColor = 'blue';

// btn[1].style.borderRadius = '100%';

// for(let i = 0; i < heart.length; i++) {
//     heart[i].style.backgroundColor = 'blue';
// }

// heart.forEach(function(item, i,  hearts) {
//     item.style.backgroundColor = 'blue';
// });

let div = document.createElement('div'),
    text = document.createTextNode('Hello!');

div.classList.add('black');

// document.body.appendChild(div);

let wrapper = document.querySelector('.wrapper');
let heart = document.querySelectorAll('.heart');

// wrapper.appendChild(div);

// document.body.insertBefore(div, wrapper);

// div.innerHTML = '<h1>Hello World!</h1>' // небезопасно при вводе пользователем
div.textContent = 'Hello World!';

wrapper.insertBefore(div, heart[1]);

// document.body.removeChild(wrapper);

// wrapper.removeChild(heart[1]);

wrapper.replaceChild(heart[0], heart[2]);

