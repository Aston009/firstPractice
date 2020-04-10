let box1 = document.querySelector('.box1'),
    btn1 = document.querySelector('.btn1');

let width = box1.clientWidth,
    height = box1.clientHeight;

console.log(width);
console.log(height);
console.log(box1.getBoundingClientRect().left);

console.log(document.documentElement.clientWidth);
console.log(document.documentElement.clientHeight);
console.log(document.documentElement.scrollTop);


btn1.addEventListener('click', function() {
    scrollBy(0, 200);
})

scrollBy(0, 200);
scrollTo(0, 200);

