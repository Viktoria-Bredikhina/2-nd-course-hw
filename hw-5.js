'use strict'
// Задание 1
function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}
min (8,4);
min (6,6);
// Задание 2
function EvenUneven() {
  let a = Number (prompt('Пожалуйста, введите число'));
  if (a % 2 == 0) {
    alert(`Чётное`);
  } else {
    alert(`Нечётное`);
  }
}
EvenUneven();
// Задание 3.1
function figureSquare(a, b) {
  let a = Number (prompt('Введите число'));
  b = a**2;
  console.log('${b}');
}
// Задание 3.2
function figureSquare(a, b) {
  let a = Number (prompt('Введите число'));
  return b = a**2;
  console.log('${b}');
}
// Задание 4
function minorCheck(age, answer) {
  let age = String (prompt('Сколько Вам лет?'));
  switch (age) {
      case a>0 && a<12:
      alert(`Привет, друг!`);
      break;

      case a>=13:
      alert(`Добро пожаловать!`);
    default:
      a<0;
      alert(`Вы ввели неправильное значение`);
      break;
  }
}
// Задание 5
function figureChecker() {
  let a = Number(prompt('Введите число'));
  let b = Number(prompt('Введите число'));
  let c = a*b;
  if (isNaN(a,b)) {
    alert(` 'Одно или оба значения не являются числом'.`);
  } else {
    alert(c);
  }
}
figureChecker()
// Задание 6
function figureChecker() {
  let a = Number(prompt('Введите число'));
  let c = Math.pow (a,2);
  if (isNaN(a)) {
    alert(`Переданный параметр не является числом`);
  } else {
    alert(c);
  }
}
figureChecker()
// Задание 7
const circle1 = {
	radius: 9,
	getArea: function() {
S = p * radius**2
		console.log(`${S}`);
	}
}
circle1(); 

const circle2 = {
	radius: 4,
	getPerimeter: function() {
		console.log('${dog.name} лает: Гав!');
	}
}
circle2(); 