"use strict";
// Задание 1
let i=1;
let n = Number(prompt('Сколько раз Вам сказать привет?'))
while(i<=n){
alert('Привет');
 i++
}

// Задание 2
let i = 1;
while (i <= 5) {
  
  i++
console.log(i)
};

// Задание 3
let i = 1;
        
while (i>=7 || i<=22) {

    i++; 
console.log(i);

}
// Задание 4
let obj = {'Nikola': 200, 'Vasya':300, 'Petya': 400};

for(key in obj){
    document.write([key]+ ' - Зарплата'+ obj[key]+'долларов'+'<br>');
}

// Задание 5
for (let n = 1000, num = 0; n > 50; num++) {

    n /= 2;
        alert( n );
    }
// Задание 6
for (let dayFriday= 5; dayFriday<=31; dayFriday +=7){
    console.log ('Сегодня пятница, $(dayFriday)-e число. Необходимо подготовить отчет.');
}
