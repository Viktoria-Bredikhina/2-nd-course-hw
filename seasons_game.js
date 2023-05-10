function seasonDefiner(monthNumber, season) {
let monthNumber = String(prompt('Введите номер месяца'));    
switch (monthNumber) {
    case monthNumber == 12 || monthNumber == 1 || monthNumber == 2:
        alert(`Зима`);
        break;

        case monthNumber == 3 || monthNumber == 4 || monthNumber == 5:
            alert(`Весна`);
        break;

        case monthNumber == 6 || monthNumber == 7 || monthNumber == 8:
            alert(`Лето`);
break;
        case monthNumber == 9 || monthNumber == 10 || monthNumber == 11:
            alert(`Осень`);
        break;
    default:
        break;
}
    alert(`${season}`);
}