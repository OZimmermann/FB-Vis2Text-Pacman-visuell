while (true) {
    if (input.buttonIsPressed(Button.A)) {
        while (!(input.buttonIsPressed(Button.B)) && !(input.isGesture(Gesture.Shake))) {
            basic.showLeds(`
                # . # # .
                . # . # #
                . . # # #
                . # # # #
                # . # # .
                `)
            basic.pause(100)
            basic.showLeds(`
                . . # # .
                # # . # #
                # # # # #
                # # # # #
                . . # # .
                `)
            basic.pause(100)
        }
    } else if (input.buttonIsPressed(Button.B)) {
        while (!(input.buttonIsPressed(Button.A)) && !(input.isGesture(Gesture.Shake))) {
            basic.showLeds(`
                . # # . #
                # # . # .
                # # # . .
                # # # # .
                . # # . #
                `)
            basic.pause(100)
            basic.showLeds(`
                . # # . .
                # # . # #
                # # # # #
                # # # # #
                . # # . .
                `)
            basic.pause(100)
        }
    } else if (input.isGesture(Gesture.Shake)) {
        basic.showIcon(IconNames.Happy)
    }
}
