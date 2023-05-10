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
function figureSquare() {
  let a = Number (prompt('Введите число'));
  b = a**2;
  console.log(`${b}`);
}
figureSquare();
// Задание 3.2
function figureSquare() {
  let a = Number (prompt('Введите число'));
  let b = a**2;
  return b;
}
figureSquare() 
// Задание 4
function minorCheck() {
  let age = Number (prompt('Сколько Вам лет?'));
  if (age<0) {
    alert(`Вы ввели неправильное значение`);
  }
  else if (age>0 && age<12) {
    alert(`Привет, друг!`);
  }
   else if (age>=13) {
    alert(`Добро пожаловать!`);
   }

  }
minorCheck()
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

function getCircleArea() {              
  return this.radius**2 * 3.14
}

function getCirclePerimeter() {
  return this.radius * 3.14

}
let circle1 = {
  radius: 10,

  getArea: getCircleArea,
  getPerimeter: getCirclePerimeter 
}
let circle2 = {
  radius: 5,

  getArea: getCircleArea,
  getPerimeter: getCirclePerimeter 
}
console.log(circle1.getArea());
console.log(circle1.getPerimeter());
console.log(circle2.getArea());
console.log(circle2.getPerimeter());