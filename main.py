def herzschlag(num: number):
    for index in range(num):
        basic.show_icon(IconNames.HEART)
        basic.pause(100)
        basic.show_icon(IconNames.SMALL_HEART)
        basic.pause(100)
def pacmanlinks():
    basic.show_leds("""
        # . # # .
        . # . # #
        . . # # #
        . # # # #
        # . # # .
        """)
    basic.pause(100)
    basic.show_leds("""
        . . # # .
        # # . # #
        # # # # #
        # # # # #
        . . # # .
        """)
    basic.pause(100)
def pacmanrechts():
    basic.show_leds("""
        . # # . #
        # # . # .
        # # # . .
        # # # # .
        . # # . #
        """)
    basic.pause(100)
    basic.show_leds("""
        . # # . .
        # # . # #
        # # # # #
        # # # # #
        . # # . .
        """)
    basic.pause(100)
while not (input.button_is_pressed(Button.AB)):
    if input.button_is_pressed(Button.A):
        pacmanrechts()
    elif input.button_is_pressed(Button.B):
        pacmanlinks()
    else:
        basic.show_icon(IconNames.HAPPY)
herzschlag(4)