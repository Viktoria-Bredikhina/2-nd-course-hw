'use strict'
//Задание 1
const numbs = [1, 5, 4, 10, 0, 3];
for (let i=0; i<numbs.length; i++) {if (numbs[i]==10) break;
console.log(numbs[i]);};
//Задание 2
const row = [1, 5, 4, 10, 0, 3];
console.log(row.indexOf(4));
//Задание 3
const random = [1, 3, 5, 10, 20];
let result = random.join(' ');
console.log(result);
//Задание 4
const arr = [];
for (let i = 0; i < 3; i++) {
    arr[i] = [];
    for (let j = 0; j < 3; j++) {
        arr[i][j = 1]
    }
}
console.log(arr);
//Задание 5
const ones = [1, 1, 1];
ones.push(2, 2, 2)
console.log(ones);
//Задание 6
const mix = [9, 8, 7, 'a', 6, 5];

//Задание 7
let array = [9, 8, 7, 6, 5];
let index = (prompt('Введите число от 1 до 10'));
let search = array.includes(index);
console.log(search);
//Задание 8
const str = 'abcdef';
const reverse = str.split('').reverse().join('');
console.log(reverse);
//Задание 9
const newArray = [].concat(array1, array2, array3, arrayN);
//Задание 10