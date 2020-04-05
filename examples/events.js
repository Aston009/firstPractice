let btn = document.querySelectorAll('button'),
    wrap = document.querySelector('.wrapper'),
    link = document.querySelector('a');

// btn[0].onclick = function() {
//     alert('You press a first button');
// };

// btn[0].addEventListener('click', function(){
//     alert('You press to the first button');
//      alert('You again press a button');
// });

// btn[0].addEventListener('mouseenter', function() {
//     alert('You pointed to the first button');
// });

btn[0].addEventListener('click', function(event) {
    console.log(event);
    // let target = event.target;
    // target.style.backgroundColor = 'red';
    console.log('Произошло событие: ' + event.type + ' на элеменет '
    + event.target);
});

wrap.addEventListener('click', function() {
    console.log('Произошло событие: ' + event.type + ' на элеменет '
    + event.target);
})

link.addEventListener('click', function(event) {
    event.preventDefault();
    console.log('Произошло событие: ' + event.type + ' на элеменет '
    + event.target);
})

btn.forEach(function(item) {
    item.addEventListener('mouseleave', function() {
        console.log('mouse leave');
    });
});