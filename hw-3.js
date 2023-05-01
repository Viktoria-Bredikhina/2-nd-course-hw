"use strict";
// Задание 1
let password = 'пароль'
let answer = prompt ('Введите пароль')
answer.toLowerCase
if(answer === password) {
    alert('Введите пароль');
} else {
    alert('Пароль введен неправильно');
}

// Задание 2
let c = -3
if(c>0 && c<10) {
    alert('Верно');
} else {
    alert('Неверно');
}

// Задание 3
let d=0
let e=0
if(d>100 || e>100) {
    alert('Верно');
} else {
    alert('Неверно');
}

// Задание 4
let a = '2';
let b = '3';
a = Number(a);
b = Number (b);
alert(a + b);

// Задание 5
let monthNumber = String(prompt('Введите номер месяц:'))
switch (monthNumber) {

case '12':
case '1':
case '2':
alert('зима');
break;

case '3':
case '4':
case '5':
alert('весна');
break;

case '6':
case '7':
case '8':
alert('лето');
break;

case '9':
case '10':
case '11':
alert('осень');
break;

default:
    monthNumber>12
    alert('Вы ввели что-то не то');
    break;
}

// Задание 7
const number = prompt("Пожалуйста, введите любое число: ");       
if(number% 2 == 0){
    alert("Это четное число");
}
else {    alert("Это нечетное число");
} 
