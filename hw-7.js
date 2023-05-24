'use strict'

//Задание 1
let str = 'js'
console.log(str.toUpperCase());

//Задание 2

const words = ['кошка', 'бегемот', 'корова', 'берег'];

const filterItems = (arr, query) => {
  return arr.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) !== -1)
}
console.log(filterItems(words, 'ко')); 
console.log(filterItems(words, 'бе'));
  
//Задание 3
let a = 32.58884;
// 1
console.log(Math.floor(a));
// 2
console.log(Math.ceil(a));
// 3 
// 2
console.log(Math.round(a));

// Задание 4. Даны числа 52, 53, 49, 77, 21, 32. найти среди этих чисел наименьшее и наибольшее числа и вывести их в консоль.

let figures = [52, 53, 49, 77, 21, 32];
console.log(Math.min(figures))
console.log(Math.max(figures))

//Задание 5. Создайте функцию, которая будет выводить в консоль рандомное число от 1 до 10.

let figuresRandomizer = (min, max) => {
  console.log(Math.random())
}
figuresRandomizer(1, 10);

// Задание 6. Напишите функцию, которая будет принимать на вход целое число, а возвращать массив случайных целых чисел от 0 до переданного числа. Длина массива должна быть в 2 раза меньше переданного числа.

function arrCreator (num) {
  const randomRow = [];
  let lengthNum = Math.round((num/2));
  for (let i = 0; i < lengthNum; i++) {
randomRow.push(Math.round(Math.random() * num))
  };
  console.log (randomRow);
}
arrCreator(15);
// Задание 7. Напишите функцию, которая на вход принимает 2 целых числа, а в качестве результата возвращает случайное целое число в этом диапазоне.
function generateRandom(min = 0, max = 100) {

  let difference = max - min;
  let rand = Math.random();
  rand = Math.floor( rand * difference);
  rand = rand + min;
  return rand;
}
console.log(generateRandom(2,6));
// Задание 8. Выведите в консоль текущую дату в стандартном режиме. Используйте один из трех рассмотренных в уроке способов.

let currentDate = new Date('20 May 2023');
console.log(currentDate);

// Задание 9. Создайте переменную currentDate и сохраните в нее текущую дату. Выведите дату, которая наступит через 73 дня после текущей.

currentDate.setDate(currentDate.getDate() + 73);
 console.log(currentDate);
// Задание 10.

const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

 const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
     "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

 let myDate = new Date();

 let fullDate = "Дата: " + myDate.getDate() + " " + months[myDate.getMonth()] + " " + myDate.getFullYear() +
     " - это " + days[myDate.getDay()] +
     " Врем: " + myDate.getHours() + ":" + myDate.getMinutes() + ":" + myDate.getSeconds();

 console.log(fullDate);