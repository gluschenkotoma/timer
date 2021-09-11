import refs from "./refs.js"; //импорт ссылок по ID <p> куда вставятся значения таймера
const { daysContent, hoursContent, minsContent, secondsContent } = refs; //деструктуризация
// console.log(daysContent, hoursContent, minsContent, secondsContent);//проверить доступы на ссылки

const finishDate = new Date("Dec 31, 2021").getTime(); // Дата до куда делаем отсчет, переобразовать в милисекундах

// функция запуска интервала
function start() {
  setInterval(() => {
    let currentDate = Date.now(); // Фактическая дата

    let deltaTime = finishDate - currentDate; //с интервалом в 1000мс получаем текую разницу между конечной и начальной датами

    let days = getDaysCount(deltaTime); //вызов фу-и вычисления с разницы (deltaTime)  к-во дней, часов,  минут, секунд
    let hours = getHoursCount(deltaTime);
    let mins = getMinsCount(deltaTime);
    let seconds = getSecondsCount(deltaTime);

    days = padValue(days, 3, "-"); // вызов фу-и приведения значений таймера в 2значный вид
    hours = padValue(hours, 2, "0");
    mins = padValue(mins, 2, "0");
    seconds = padValue(seconds, 2, "0");

    insertData(daysContent, days); // вызов фу-и добавления текстконтента в <p> (отобразить в разметке (встроить))
    insertData(hoursContent, hours);
    insertData(minsContent, mins);
    insertData(secondsContent, seconds);
  }, 1000);
}
start();

//фу-я добавления текстконтента в <p>
function insertData(place, value) {
  place.textContent = value;
}

//фу-я приведения значений таймера в 2значный вид
function padValue(value, num, symbol) {
  return String(value).padStart(num, symbol);
}

//фу-и вычисления с разницы (deltaTime передается в time)  к-во дней, часов,  минут, секунд
function getDaysCount(time) {
  return Math.floor(time / (1000 * 60 * 60 * 24));
}

function getHoursCount(time) {
  return Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
}

function getMinsCount(time) {
  return Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
}

function getSecondsCount(time) {
  return Math.floor((time % (1000 * 60)) / 1000);
}

// console.log('days', days)
// console.log('hours', hours)
// console.log('mins', mins)
// console.log('seconds', seconds)
