while (true) {
    if (input.buttonIsPressed(Button.A)) {
        while (true) {
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
