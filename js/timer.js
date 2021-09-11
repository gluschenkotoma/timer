import refs from './refs.js'
const { daysContent, hoursContent, minsContent, secondsContent } = refs
// console.log(daysContent, hoursContent, minsContent, secondsContent);

const finishDate = new Date('Dec 31, 2021').getTime()
// console.log(finishDate)

function start() {
  setInterval(() => {
    let currentDate = Date.now()
    // с интервалом в 1000мс получаем текую разницу
    //   между конечной и начальной датами
    let deltaTime = finishDate - currentDate

    let days = getDaysCount(deltaTime)
    let hours = getHoursCount(deltaTime)
    let mins = getMinsCount(deltaTime)
    let seconds = getSecondsCount(deltaTime)

    // приводим их значения в 2значный вид
    days = padValue(days, 3, '-')
    hours = padValue(hours, 2, '0')
    mins = padValue(mins, 2, '0')
    seconds = padValue(seconds, 2, '0')

    // отобразить в разметке (встроить)
    insertData(daysContent, days)
    insertData(hoursContent, hours)
    insertData(minsContent, mins)
    insertData(secondsContent, seconds)
  }, 1000)
}
start()

function insertData(place, value) {
  place.textContent = value
}

function padValue(value, num, symbol) {
  return String(value).padStart(num, symbol)
}
function getDaysCount(time) {
  return Math.floor(time / (1000 * 60 * 60 * 24))
}

function getHoursCount(time) {
  return Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
}

function getMinsCount(time) {
  return Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))
}

function getSecondsCount(time) {
  return Math.floor((time % (1000 * 60)) / 1000)
}

// console.log('days', days)
// console.log('hours', hours)
// console.log('mins', mins)
// console.log('seconds', seconds)
