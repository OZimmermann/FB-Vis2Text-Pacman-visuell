while (true) {
    if (input.buttonIsPressed(Button.A)) {
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
