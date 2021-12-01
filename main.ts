while (!(input.buttonIsPressed(Button.AB))) {
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
    if (input.buttonIsPressed(Button.B)) {
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
for (let index = 0; index < 4; index++) {
    basic.showIcon(IconNames.Heart)
    basic.pause(100)
    basic.showIcon(IconNames.SmallHeart)
    basic.pause(100)
}
basic.forever(function () {
    while (!(input.buttonIsPressed(Button.AB))) {
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
        if (input.buttonIsPressed(Button.B)) {
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
})
