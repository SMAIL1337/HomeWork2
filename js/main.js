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
        getyear = document.querySelector('.year');
        getmonth = document.querySelector('.month');
        getday = document.querySelector('.day')
        console.log(getmonth)