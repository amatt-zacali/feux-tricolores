function FeuR () {
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    strip.shift(1)
    strip.show()
    basic.pause(10000)
    strip.shift(0)
    basic.clearScreen()
}
function FeuV () {
    strip.showColor(neopixel.colors(NeoPixelColors.Green))
    strip.shift(1)
    strip.show()
    basic.pause(10000)
    strip.shift(0)
    basic.clearScreen()
}
function FeuO () {
    strip.showColor(neopixel.colors(NeoPixelColors.Orange))
    strip.shift(1)
    strip.show()
    basic.pause(2000)
    strip.shift(0)
    basic.clearScreen()
}
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 1, NeoPixelMode.RGB)
strip = strip.range(0, 4)
strip.shift(0)
strip.setBrightness(32)
basic.forever(function () {
    for (let index = 0; index < 99; index++) {
        FeuV()
        basic.pause(10000)
        FeuO()
        basic.pause(2000)
        FeuR()
        basic.pause(10000)
    }
})
