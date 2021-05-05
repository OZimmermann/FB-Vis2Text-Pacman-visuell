function herzschlag (num: number) {
    for (let index = 0; index < num; index++) {
        basic.showIcon(IconNames.Heart)
        basic.pause(100)
        basic.showIcon(IconNames.SmallHeart)
        basic.pause(100)
    }
}
function pacmanlinks () {
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
function pacmanrechts () {
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
while (!(input.buttonIsPressed(Button.AB))) {
    if (input.buttonIsPressed(Button.A)) {
        pacmanlinks()
    } else if (input.buttonIsPressed(Button.B)) {
        pacmanrechts()
    }
}
herzschlag(4)
