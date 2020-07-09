input.onButtonPressed(Button.A, function () {
    if (x > 0 && x <= 4) {
        led.unplot(x, y)
        led.plot(x - 1, y)
        x = x - 1
        y = 0
    }
})
input.onButtonPressed(Button.B, function () {
    if (x >= 0 && x < 4) {
        led.unplot(x, y)
        led.plot(x + 1, y)
        x = x + 1
        y = 0
    }
})
let y = 0
let x = 0
x = 2
y = 0
led.plot(2, 0)
basic.forever(function () {
	
})
