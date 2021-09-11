import refs from './refs.js'
const {
  daysContent,
  hoursContent,
  minsContent,
  secondsContent,
  startBtn,
  stopBtn,
} = refs
// создаем класс

class Timer {
  constructor(finishDate) {
    this.finishDate = finishDate.getTime()
    this.intervalID = null
    this.deltaTime = 0
  }
  start() {
    this.intervalID = setInterval(() => {
      let currentDate = Date.now()
      this.deltaTime = this.finishDate - currentDate

      this.insertData(daysContent, this.getDaysCount(this.deltaTime))
      this.insertData(hoursContent, this.getHoursCount(this.deltaTime))
      this.insertData(minsContent, this.getMinsCount(this.deltaTime))
      this.insertData(secondsContent, this.getSecondsCount(this.deltaTime))
    }, 1000)
  }
  finish() {
    clearInterval(this.intervalID)
    this.clearClockFace()
  }
  // ============
  clearClockFace() {
    daysContent.textContent = '00'
    hoursContent.textContent = '00'
    minsContent.textContent = '00'
    secondsContent.textContent = '00'
  }

  // ============
  padValue(value, num, symbol) {
    return String(value).padStart(num, symbol)
  }
  getDaysCount(time) {
    return this.padValue(Math.floor(time / (1000 * 60 * 60 * 24)), 3, '-')
  }
  getHoursCount(time) {
    return this.padValue(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      2,
      '0',
    )
  }
  getMinsCount(time) {
    return this.padValue(
      Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)),
      2,
      '0',
    )
  }
  getSecondsCount(time) {
    return this.padValue(Math.floor((time % (1000 * 60)) / 1000), 2, '0')
  }
  insertData(place, value) {
    place.textContent = value
  }
  // ============
}
const myTimer = new Timer(new Date('Dec 31, 2021'))
// myTimer.start()
console.log(myTimer)
startBtn.addEventListener('click', myTimer.start.bind(myTimer))
stopBtn.addEventListener('click', myTimer.finish.bind(myTimer))
