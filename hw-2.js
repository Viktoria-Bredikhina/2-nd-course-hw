"use strict";
 //Задание 1
 let a=10; 
alert(a);
 a=20;
 alert(a);

//Задание 2
let iphoneRelease = 2007;
alert(iphoneRelease);

//Задание 3
let godGenius = "Брендан Эйх";
alert(godGenius);

// Задание 4
let b=10;
let c=2;
alert(b+c);
alert(b-c);
alert(b/c);

// Задание 5

let result = 2**5;
alert(result);

// Задание 6
let m=9;
let p=5; 
alert(9%5);

// Задание 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num ++;
num --;
alert(num);

// Задание 8
let age = (prompt('Сколько Вам лет?'));
alert(age);

// Задание 9
let user = {     
    name: "John", 
    age: 30,
    'isAdmin': true        
  };
// Задание 9.1
user ['city of residence'] = true;
// Задание 9.2
user.age = 37;
// Задание 9.3
delete user['city of residence']
// Задание 9.4
let info= prompt('Какую информацию хотите узнать о пользователе?', 'name')
alert( user[info] ); 
// Задание 10
let name = prompt ('Как Вас зовут?') 
alert(`Привет, ${name} !`);

