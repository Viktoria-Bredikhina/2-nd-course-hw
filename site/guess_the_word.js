function memorizeWords() {

    const fruitsArray = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    let fruitsArraySort = fruitsArray.sort(() => Math.random() - 0.5);
    alert(fruitsArraySort);

    let lastIntheArray = fruitsArraySort.length - 1;

    let userAnswerFirstEl = prompt('Чему равнялся первый элемент массива?');
    let userAnswerLastEl = prompt('Чему равнялся последний элемент массива?');

    if (userAnswerFirstEl.toLowerCase() === fruitsArraySort[0].toLowerCase() && 
    userAnswerLastEl.toLowerCase() === fruitsArraySort[lastIntheArray].toLowerCase()) {

        alert('Поздравляем, Вы угадали оба элемента!');

    } else if (userAnswerFirstEl.toLowerCase() === fruitsArraySort[0].toLowerCase() || 
    userAnswerLastEl.toLowerCase() === fruitsArraySort[lastIntheArray].toLowerCase()) {

        alert ('Вы были близки к победе!');

    } else {
        alert ('К сожалению, вы ответили неверно.')
    }

}
