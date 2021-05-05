while (true) {
    if (input.buttonIsPressed(Button.A)) {
        while (!(input.buttonIsPressed(Button.B))) {
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
        while (!(input.buttonIsPressed(Button.A))) {
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
    }
}
