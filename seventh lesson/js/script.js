let starts = document.querySelector('#start'),
    budgetValue = document.querySelector('.budget-value'),
    daybudgetValue = document.querySelector('.daybudget-value'),
    levelValue = document.querySelector('.level-value'),
    expensesValue = document.querySelector('.expenses-value'),
    optionalexpensesValue = document.querySelector('.optionalexpenses-value'),
    incomeValue = document.querySelector('.income-value'),
    monthsavingsValue = document.querySelector('.monthsavings-value'),
    yearssavingsValue = document.querySelector('.yearsavings-value'),

    expensesItemInput = document.querySelectorAll('.expenses-item'),
    expensesBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],
    optionalexpensesItemInput = document.querySelectorAll('.optionalexpenses-item'),
    chooseIncome = document.querySelector('.choose-income'),
    savings = document.querySelector('#savings'),
    chooseSum = document.querySelector('.choose-sum'),
    choosePercent = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');


let money, time;

expensesBtn.disabled = true;
countBtn.disabled = true;
optionalExpensesBtn.disabled = true;

starts.addEventListener('click', function() {
    time = prompt("Введите дату в формате YYYY-MM-DD", "YYYY-MM-DD");
    money = +prompt("Ваш бюжет на месяц");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюжет на месяц");
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
    expensesBtn.disabled = false;
    countBtn.disabled = false;
    optionalExpensesBtn.disabled = false;
});

expensesBtn.addEventListener('click', function() {
    let sum = 0;

    for (let i = 0; i < expensesItemInput.length; i++) {
        let a = expensesItemInput[i].value;
        let b = expensesItemInput[++i].value;

        if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
            a != '' && b != '' && a.length < 50) {
            console.log('done');
            appData.expenses[a] = b;
            sum += +b;
        } else {
            alert('Ошибка, попробуйте снова');
            i -= 1;
        }
    }
    expensesValue.textContent = sum;
    
});

optionalExpensesBtn.addEventListener('click', function() {
    let i = 0;
    while (i < optionalexpensesItemInput.length) {
        let opt = optionalexpensesItemInput[i].value;
        appData.optionalExpenses[i] = opt;
        optionalexpensesValue.textContent += appData.optionalExpenses[i] + ' '; 
        i++
    }
});

countBtn.addEventListener('click', function() {

if(appData.budget != undefined){

    appData.moneyPerDay = ((appData.budget - +expensesValue.textContent) / 30).toFixed();
    daybudgetValue.textContent =  appData.moneyPerDay;

    if (appData.moneyPerDay < 100) {
        levelValue.textContent = 'Минимальный уровень достатка';
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        levelValue.textContent = 'Средний уровень достатка';
    } else if (appData.moneyPerDay > 2000) {
        levelValue.textContent = 'Высокий уровень достатка';
    } else {
        levelValue.textContent = 'Произошла ошибка';
    }
} else {
    daybudgetValue.textContent = 'Произошла ошибка';
}
});

chooseIncome.addEventListener('input', function() {
    let items = chooseIncome.value;
    appData.income = items.split(', ');
    incomeValue.textContent = appData.income;
});

savings.addEventListener('click', function() {
    if(appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

chooseSum.addEventListener('input', function() {
    if(appData.savings == true) {
        let sum = +chooseSum.value, 
            percent = +choosePercent.value;

        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearssavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

choosePercent.addEventListener('input', function() {
    if(appData.savings == true) {
        let sum = +chooseSum.value, 
        percent = +choosePercent.value;

        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearssavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});



let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,

};

for(let key in appData) {
    console.log('Наша программа включает в себя данные: ' + key + ': ' + appData[key]);
}

