let starts = document.querySelector('#start'),
    budgetValue = document.querySelector('.budget-value'),
    daybudgetValue = document.querySelector('.daybudget-value'),
    levelValue = document.querySelector('.level-value'),
    expensesValue = document.querySelector('.expenses-value'),
    optionalexpensesValue = document.querySelector('.optionalexpenses-value'),
    incomeValue = document.querySelector('.income-value'),
    monthsavingsValue = document.querySelector('.monthsavings-value'),
    yearssavingsValue = document.querySelector('.yearssavings-value'),
    expensesItemInput = document.querySelectorAll('.expenses-item'),
    optionalexpensesItemInput = document.querySelectorAll('.optionalexpenses-item'),
    chooseIncome = document.querySelector('.choose-income'),
    savings = document.querySelector('.savings'),
    chooseSum = document.querySelector('.choose-sum'),
    choosePercent = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('month-value'),
    dayValue = document.querySelector('.day-value');


let money, time;

function start() {
    money = +prompt("Ваш бюжет на месяц");
    time = prompt("Введите дату в формате YYYY-MM-DD", "YYYY-MM-DD");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюжет на месяц");
    }
}

start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце");
            let b = prompt("Во сколько обойдется");

            if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
                a != '' && b != '' && a.length < 50) {
                console.log('done');
                appData.expenses[a] = b;
            } else {
                alert('Ошибка, попробуйте снова');
                i -= 1;
            }
        };
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed();

        alert("Бюджет на 1 день: " + appData.moneyPerDay);
    },
    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Произошла ошибка");
        }
    },
    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");

            appData.monthIncome = save / 100 / 12 * percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function () {
        let i = 1;
        while (i < 4) {
            appData.optionalExpenses[i] = prompt("Статья необязательных расходов?");
            i++
        }
    },
    chooseIncome: function () {
        for (let i = 0; i < 1; i++) {
            let items = prompt('Что принесет дополнительный доход? (Перечислить через запятую)', '');
            let itemsAdd = prompt('Может что-то еще?');

            if ((typeof (items)) === 'string' && (typeof (items)) != null && items != '' &&
                (typeof (itemsAdd)) === 'string' && (typeof (itemsAdd)) != null && itemsAdd != '') {
                appData.income = items.split(', ');
                appData.income.push(itemsAdd);
                appData.income.sort();
                console.log('done');
            } else {
                i--;
            }
        }
        appData.income.forEach(function(itemmassive, i) {
            alert('Способы доп. заработка: ' + (i+1) + ' - ' + itemmassive);
        });

    }


};

for(let key in appData) {
    console.log('Наша программа включает в себя данные: ' + key + ': ' + appData[key]);
}

