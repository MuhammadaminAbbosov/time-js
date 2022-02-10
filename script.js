const months = ["-January", "-February", "-March", "-April", "-May", "-June", "-July", "-August", "-September", "-October", "-November", "-December"]

function times() {
    const hour = document.querySelector(".hour")
    const minute = document.querySelector(".minute")

    const secund = document.querySelector(".secund")
    const day = document.querySelector(".day")
    const time = new Date()

    if (time.getHours() < 10) {
        hour.innerHTML = "0" + time.getHours()
    }
    else {
        hour.innerHTML = time.getHours()
    }

    if (time.getMinutes() < 10) {
        minute.innerHTML = "0" + time.getMinutes()
    }
    else {
        minute.innerHTML = time.getMinutes()
    }

    if (time.getSeconds() < 10) {
        secund.innerHTML = "0" + time.getSeconds()
    }
    else {
        secund.innerHTML = time.getSeconds()
    }
    day.innerHTML = time.getDay() + months[time.getMonth()] + " " + time.getFullYear()
}

times()

setInterval(() => {
    times()
}, 1000)