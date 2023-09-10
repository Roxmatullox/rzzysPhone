// | modals open | //


let closeBtn1 = document.querySelector(".close-btn1")
let closeBtn2 = document.querySelector(".close-btn2")
let closeBtn3 = document.querySelector(".close-btn3")
let closeBtn4 = document.querySelector(".close-btn4")
let openTimer = document.querySelector(".timer button")
let openPerevod = document.querySelector(".perevod button")
let openAlarm = document.querySelector(".alarm button")
let openYoutube = document.querySelector(".you-tube button")
let timerModal = document.querySelector(".timer-modal")
let perevodModal = document.querySelector(".perevod-modal")
let alarmModal = document.querySelector(".alarm-modal")
let youtubeModal = document.querySelector(".you-tube-modal")



openTimer.addEventListener("click" , ()=>{
  timerModal.classList.add("modal-open")
})

closeBtn1.addEventListener("click" , ()=>{
  timerModal.classList.remove("modal-open")
})

openPerevod.addEventListener("click" , ()=>{
  perevodModal.classList.add("modal-open")
})

closeBtn2.addEventListener("click" , ()=>{
  perevodModal.classList.remove("modal-open")
})

openAlarm.addEventListener("click" , ()=>{
  alarmModal.classList.add("modal-open")
})

closeBtn3.addEventListener("click" , ()=>{
  alarmModal.classList.remove("modal-open")
})

openYoutube.addEventListener("click" , ()=>{
  youtubeModal.classList.add("modal-open")
})

closeBtn4.addEventListener("click" , ()=>{
  youtubeModal.classList.remove("modal-open")
})


// | batterey | //


let battereyLevel = document.querySelector(".phone-text h4")

let batterey

let batteryPromise = navigator.getBattery();
batteryPromise.then((batteryObject) => {
  batterey = batteryObject.level * 100
  battereyProssent(batterey)
});

function battereyProssent(batterey){
  battereyLevel.innerHTML = `${batterey} %`
}

setInterval(() => {
  battereyProssent(batterey)
}, 1000);



// | time | //


let timeAll = document.querySelector(".phone-text h2")


setInterval(() => {
  let date = new Date()
  let time = date.toLocaleTimeString("it-IT");
  timeAll.innerHTML = time
}, 1000);





// | alarm | //





let alarmInput = document.querySelector("#alarm-time")
let addAlarmBtn = document.querySelector(".add-alarm-btn")
let alarmCardsRow = document.querySelector(".alarm-cards")
let audio = document.querySelector(".audio")
let pauseBtn = document.querySelector(".pause-btn")
let playBtn = document.querySelector(".play-btn")


let alarmTime

alarmInput.addEventListener("keyup" , function() {
  alarmTime = this.value
})

addAlarmBtn.addEventListener("click" , ()=>{
  setInterval(() => {
    let date = new Date()
    let time = date.toLocaleTimeString("it-IT");

    if (alarmTime == time) {
      audio.play()
    }
  }, 1000);

  alarmCardsRow.innerHTML= alarmCard(alarmTime)
})

function alarmCard(time) {
  return `<div class="alarm-card">
  <p>Sizning soatingiz ${time} da chalinadi!</p>
</div>`
}

alarmCard()

pauseBtn.addEventListener("click" , ()=>{
  audio.pause()
})

playBtn.addEventListener("click" , ()=>{
  audio.play()
})






// | perevod | //

let lotinchaInput = document.querySelector(".lotincha input")
let ruschaInput = document.querySelector(".ruscha input")
let deleteBtn = document.querySelector(".delete-all")


let customLotincha

function customElement(element) {
  return element.replaceAll("ya" , "я").replaceAll("yu" , "ю").replaceAll("a","а").replaceAll("b" , "Б").replaceAll("c" , "c").replaceAll("d" , "д").replaceAll("e" , "е").replaceAll("f" , "ф").replaceAll("g" , "г").replaceAll("h" , "х").replaceAll("i" , "и").replaceAll("j" , "ж").replaceAll("k" , "к").replaceAll("l" , "л").replaceAll("m" , "м").replaceAll("n" , "н").replaceAll("o" , "о").replaceAll("p" , "п").replaceAll("q" , "к").replaceAll("r" , "р").replaceAll("s" , "с").replaceAll("u" , "у").replaceAll("v" , "в").replaceAll("w" , "в").replaceAll("x" , "х").replaceAll("y" , "и").replaceAll("z" , "з")           
}

function lotinchaToRuscha() {
  lotinchaInput.addEventListener("keyup" , function() {
    ruschaInput.value = customElement(lotinchaInput.value)
  })
}

lotinchaToRuscha()


deleteBtn.addEventListener("click", ()=>{
  lotinchaInput.value = ""
  ruschaInput.value = ""
  lotinchaToRuscha()
})






// | timer | //

let timerTime = document.querySelector(".timer-numbers h2")
let startBtn = document.querySelector(".start-timer")
let stopBtn2 = document.querySelector(".stop-btn-2")

let s = 0
let m = 0
let h = 0

let timer1


startBtn.addEventListener("click" , ()=>{
  timer1 = setInterval(() => {
    s++
    if (s === 60) {
      s = 0
      m++
    }

    if (m === 60) {
      m = 0
      h++
    }
    timerTime.innerHTML = `${h}:${m}:${s}`
  }, 1000);
})

stopBtn2.addEventListener("click", () => {
  clearTimeout(timer1);
});