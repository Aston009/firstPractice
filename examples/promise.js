// let dring = 1;

// function shoot(arrow, headshot, fail) {
//     console.log('вы сделали выстрел...');

//     setTimeout(function(){
//         Math.random() > .5 ? headshot({}) : fail("Вы промахнулись");
//     }, 3000)
// };

// function win() {
//     console.log('You win');
//     (dring == 1) ? buyBeer() : giveMoney();
// }

// function buyBeer() {
//     console.log('Вам купили пиво');
// }

// function giveMoney() {
//     console.log('Вам дали денег');
// }

// function loose(){
//     console.log('You loose');
// }

// shoot({}, 
//         function(mark) {
//             console.log('Вы попали в цель');
//             win(mark, buyBeer, giveMoney);
//         },
//         function(miss){
//             console.error(miss);
//             loose();
//         }
//     )


//  promise

let dring = 1;

function shoot(arrow) {
    console.log('вы сделали выстрел...');

    let promise = new Promise(function(resolve, reject) {
        setTimeout(function(){
            Math.random() > .5 ? resolve({}) : reject("Вы промахнулись");
        }, 3000);
    });

    return promise;
   
};

function win() {
    console.log('You win');
    (dring == 1) ? buyBeer() : giveMoney();
}

function buyBeer() {
    console.log('Вам купили пиво');
}

function giveMoney() {
    console.log('Вам дали денег');
}

function loose(){
    console.log('You loose');
}

shoot({})
        .then(mark => console.log('Вы попали в цель'))
        .then(win)
        .catch(loose)