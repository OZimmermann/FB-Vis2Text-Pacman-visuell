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
    }
}
