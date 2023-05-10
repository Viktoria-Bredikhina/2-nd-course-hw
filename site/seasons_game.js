function findSeason()
{
    let month = Number (prompt ('Введите номер месяца'));
    if (month) {
        if (month===12 || month===1 || month===2) {
            alert(`Зима`);
        }
  else if (month===3 || month===4 || month===5) {
    alert(`Весна`);
  }
  else if (month===6 || month===7 || month===8) {
    alert(`Лето`);
  }
  else if (month===9 || month===10 || month===11) {
    alert(`Осень`);
  }
   else {
    alert(`Вы ввели что-то не то, попробуйте еще раз`);}
    }
}
findSeason()

