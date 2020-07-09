input.onButtonPressed(Button.A, function () {
    if (x > 0 && x <= 4) {
        led.unplot(x, y)
        led.plot(x - 1, y)
        x = x - 1
    } else {
        led.unplot(x, y)
        led.plot(x + 4, y - 1)
        y = y - 1
        x = 4
    }
})
input.onButtonPressed(Button.B, function () {
    if (x >= 0 && x <= 4) {
        led.unplot(x, y)
        led.plot(x + 1, y)
        x = x + 1
    } else {
        led.unplot(x, y)
        led.plot(x - 5, y + 1)
        y = y + 1
        x = 0
    }
})
let y = 0
let x = 0
x = 2
y = 0
led.plot(2, 0)
basic.forever(function () {
	
})
