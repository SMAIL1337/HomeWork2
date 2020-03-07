    // рассчет всего
    const getButtonItog = document.getElementById('start');
    ResultTable = document.getElementsByClassName('budget-value')[0];
    ResultTable2 = document.getElementsByClassName('daybudget-value')[0];
    ResultTable3 = document.getElementsByClassName('level-value')[0];
    ResultTable4 = document.getElementsByClassName('expenses-value')[0];
    ResultTable5 = document.getElementsByClassName('optionalexpenses-value')[0];
    ResultTable6 = document.getElementsByClassName('income-value')[0];
    ResultTable7 = document.getElementsByClassName('monthsavings-value')[0];
    ResultTable8 = document.getElementsByClassName('yearsavings-value')[0];
    //поля ввода 
    const expenses0 = document.getElementsByClassName('expenses-item')[0];
    expenses1 = document.getElementsByClassName('expenses-item')[1];
    expenses2 = document.getElementsByClassName('expenses-item')[2];
    expenses3 = document.getElementsByClassName('expenses-item')[3];
    //получение кнопок
    const button1 = document.getElementsByTagName('button')[0];
    button2 = document.getElementsByTagName('button')[1];
    button3 = document.getElementsByTagName('button')[2];
    button4 = document.getElementsByTagName('button')[3];
    //получение необяз расходов 
    const notimportant = document.querySelectorAll('.optionalexpenses-item')[0];
    notimportant1 = document.querySelectorAll('.optionalexpenses-item')[1];
    notimportant2 = document.querySelectorAll('.optionalexpenses-item')[2];
    //нижняя часть сайта
    const getnotimp = document.querySelector('.choose-income');
    getcheckbox = document.querySelector('.checksavings');
    getsumm = document.querySelector('.choose-sum');
    getprocent = document.querySelector('.choose-percent');
    getyear = document.querySelector('.year-value');
    getmonth = document.querySelector('.month-value');
    getday = document.querySelector('.day-value');
    let money, time;
    getButtonItog.addEventListener('click', function () {
        time = prompt('Введите дату');
        money = prompt('Ваш бюджет');
        while (isNaN(money) || money == '' || money == null) {
            money = prompt('Введите ваш бюджет', "")
        }
        appData.budget = money;
        appData.timeData = time;
        ResultTable.textContent = money;
        getyear.value = new Date(Date.parse(time)).getFullYear();
        getmonth.value = new Date(Date.parse(time)).getMonth() + 1;
        getday.value = new Date(Date.parse(time)).getDay();

    });

    let appData = {
        budget: money,
        expenses: {},
        optionalexpenses: {},
        income: [],
        timeData: time,
        savings: true,
    };

    button3.addEventListener('click', function(){
        moneyoneday = (appData.budget/30).toFixed();
        ResultTable2.textContent = moneyoneday;

        if (appData.budget > 100){
            ResultTable3.textContent = 'Хороший уровень достатка';
        } else if (appData.budget < 100){
            ResultTable3.textContent = 'Низкий уровень достатка';
        } else{
            ResultTable3.textContent = 'Произошла ошибка';
        }
    })

    
