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
let range = strip.range(0, 3)
strip.setBrightness(32)
strip.shift(0)
basic.forever(function () {
    while (true) {
        FeuV()
        basic.pause(10000)
        FeuO()
        basic.pause(2000)
        FeuR()
        basic.pause(10000)
    }
})
