let menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu-item'),
    myTitle = document.querySelector('#title'),
    myColumn = document.querySelectorAll('.column'),
    myPrompt = document.querySelector('#prompt'),
    question,
    myAdv = document.querySelector('.adv');

menu.insertBefore(menuItem[2], menuItem[1]);

    
let fiveParagraph = document.createElement('li');
fiveParagraph.classList.add('menu-item');
fiveParagraph.textContent = 'Пятый пункт';

menu.appendChild(fiveParagraph);

document.body.style.background = 'url(img/apple_true.jpg) center no-repeat';

myTitle.textContent = 'Мы продаем только подлинную технику Apple';

myColumn[1].removeChild(myAdv);

question = prompt('Ваше отношение к технике apple?', '');

myPrompt.textContent = question;