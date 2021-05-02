input.onButtonPressed(Button.A, function () {
    basic.showNumber(Math.abs(input.magneticForce(Dimension.Strength)))
})
basic.forever(function () {
    if (input.magneticForce(Dimension.Strength) < 100) {
        basic.showIcon(IconNames.Angry)
        basic.clearScreen()
        basic.pause(200)
    }
})
