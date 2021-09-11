import refs from "./refs.js"; //импорт ссылок по ID <p> куда вставятся значения таймера
const {
  daysContent,
  hoursContent,
  minsContent,
  secondsContent,
  startBtn,
  stopBtn,
} = refs; //деструктуризация,доступы на ссылки

// создаем класс

class Timer {
  constructor(finishDate) {
    // // Инициализация свойств экземпля
    this.finishDate = finishDate.getTime(); //преобразование в милисекунды
    this.intervalID = null; //setInterval
    this.deltaTime = 0; //deltaTime
  }

  start() {
    // запуск интервала
    this.intervalID = setInterval(() => {
      let currentDate = Date.now(); //текущее время
      this.deltaTime = this.finishDate - currentDate;

      this.insertData(daysContent, this.getDaysCount(this.deltaTime)); //вызов метода insertData -> insertData(place, value)->ссылка и метод getDaysCount в котором вызван метод padValue
      this.insertData(hoursContent, this.getHoursCount(this.deltaTime));
      this.insertData(minsContent, this.getMinsCount(this.deltaTime));
      this.insertData(secondsContent, this.getSecondsCount(this.deltaTime));
    }, 1000);
  }
  finish() {
    clearInterval(this.intervalID);
    this.clearClockFace();
  }
  // ============
  clearClockFace() {
    daysContent.textContent = "00";
    hoursContent.textContent = "00";
    minsContent.textContent = "00";
    secondsContent.textContent = "00";
  }

  // метод приведения значений таймера в 2значный вид
  padValue(value, num, symbol) {
    return String(value).padStart(num, symbol);
  }

  // вызов в getDaysCount метода padValue, в getDaysCount(time) зайдет this.deltaTime, в padValue(value, num, symbol), в value зайдет Math.floor(time / (1000 * 60 * 60 * 24)), в num - 3, в symbol - "0",
  // а метод padValue возвращает в приведенную строку Math.floor(time / (1000 * 60 * 60 * 24)), на нем сработает padStart(num, symbol);
  getDaysCount(time) {
    return this.padValue(Math.floor(time / (1000 * 60 * 60 * 24)), 3, "0");
  }
  getHoursCount(time) {
    return this.padValue(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      2,
      "0"
    );
  }
  getMinsCount(time) {
    return this.padValue(
      Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)),
      2,
      "0"
    );
  }
  getSecondsCount(time) {
    return this.padValue(Math.floor((time % (1000 * 60)) / 1000), 2, "0");
  }
  // метод добавления текстконтента в <p>
  insertData(place, value) {
    place.textContent = value;
  }
}

// создание экземпляра таймера
const myTimer = new Timer(new Date("Dec 31, 2021"));
// myTimer.start(); //запуск метода старт
console.log(myTimer);

startBtn.addEventListener("click", myTimer.start.bind(myTimer));
stopBtn.addEventListener("click", myTimer.finish.bind(myTimer));
