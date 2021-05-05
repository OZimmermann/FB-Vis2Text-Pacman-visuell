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
basic.forever(function () {
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
})
