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
random = random.join(' ');
console.log(random);
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
const mix = [9, 8, 7, 'a', 6, 5]

 mix.sort()
 mix.pop()
 console.log(mix);
//Задание 7

let ask = Number(prompt('Введите число от 1 до 10'));

 const array = [9, 8, 7, 6, 5];

 let isPresent = array.includes(ask);

 console.log(isPresent);

//Задание 8
const str = 'abcdef';
const reverse = str.split('').reverse().join('');
console.log(reverse);
//Задание 9
let digits = [[1, 2, 3,],[4, 5, 6]]
 let arrNew = digits.flat()
 console.log(arrNew);
//Задание 10
let numero = [9, 8, 7, 6, 5, 3]

 for (let i = 0; i < numero.length; i++) {
     let sum = numero.reduce((first,last) => first+last)
     console.log(sum);   
 }
 //Задание 11
 const base = [6 , 24, 56]
 let square = base.map(el=>(el**2))
  console.log(square);

 //Задание 12

 getLengthWords(['слово', '', 'слог', 'длинное предложение', 'буква']);
 let starter = []
 function getLengthWords(starter) {
     for (let i = 0; i < starter.length; i++) {
         console.log(starter[i].length);  
     }

 }
 //Задание 13
 function filterPositive(arrayNum) {
     return arrayNum.filter((el) => el < 0)

 }
 console.log(filterPositive([-1, 0, 5, -10, 56]));
 console.log(filterPositive([-25, 25, 0, -1000, -2])); 