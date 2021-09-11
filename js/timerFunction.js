import refs from "./refs.js"; //импорт ссылок по ID <p> куда вставятся значения таймера
const { daysContent, hoursContent, minsContent, secondsContent } = refs; //деструктуризация(destructuring)
console.log(daysContent, hoursContent, minsContent, secondsContent); //проверить доступы на ссылки

const finishDate = new Date("Dec 31, 2021").getTime(); // Дата до куда делаем отсчет, переобразовать в милисекундах
console.log(finishDate);

// функция запуска интервала==============
function start() {
  setInterval(() => {
    let currentDate = Date.now(); // Фактическая дата
    let time = finishDate - currentDate; // с интервалом в 1000мс получаем текущую разницу между конечной и начальной датами

    // с разницы дельтатайм вычислить к-во дней, часов,  минут, секунд

    //              ms     sec  min  hours
    let days = time / (1000 * 60 * 60 * 24); // узнать сколько дней осталось(сколько целых дней в значении time)
    let hours = (time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60); //узнать сколько целых часов осталось
    let mins = (time % (1000 * 60 * 60)) / (1000 * 60); //узнать сколько целых минут
    let seconds = (time % (1000 * 60)) / 1000; //узнать сколько целых секунд

    // заокруглить  с помощью Math.floor
    days = Math.floor(days);
    hours = Math.floor(hours);
    mins = Math.floor(mins);
    seconds = Math.floor(seconds);

    // привести значения в 2х значный вид padStart
    days = String(days).padStart(3, "0");
    hours = String(hours).padStart(2, "0");
    mins = String(mins).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");

    // вычислить дни,часы,мин, сек,заокруглить, привести к строке, поставить в 2х значный вид
    // let days = String(Math.floor(time / (1000 * 60 * 60 * 24))).padStart(3, "0");
    // let hours = String(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, "0");
    // let mins = String(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))).padStart(2,"0");
    // let seconds = String(Math.floor((time % (1000 * 60)) / 1000)).padStart(2, "0");

    console.log(
      "days :",
      days,
      "hours :",
      hours,
      "mins :",
      mins,
      "seconds :",
      seconds
    ); //days : 110 hours : 09 mins : 19 seconds : 53

    // отобразить в разметке(встроить), записать в тег <p> контент </p>
    daysContent.textContent = days;
    hoursContent.textContent = hours;
    minsContent.textContent = mins;
    secondsContent.textContent = seconds;
  }, 1000);
}
// start(); //вызов функции
