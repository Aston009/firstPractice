let money = prompt("Ваш бюжет на месяц");

let time = prompt("Введите дату в формате YYYY-MM-DD", "YYYY-MM-DD");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

let firstQuestion = prompt("Введите обязательную статью расходов в этом месяце");

let secondQuestion = prompt("Во сколько обойдется");

let firstAsnwer;

let secondAnswer;

appData.expenses.firstAsnwer = firstQuestion;

appData.expenses.secondAnswer = secondQuestion;

let budgetOneDay = money / 30;

alert("Бюджет на 1 день: " + budgetOneDay);