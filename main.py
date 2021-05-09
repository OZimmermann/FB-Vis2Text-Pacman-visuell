def herzschlag(num: number):
    for index in range(num):
        basic.show_icon(IconNames.HEART)
        basic.pause(100)
        basic.show_icon(IconNames.SMALL_HEART)
        basic.pause(100)
def pacmanlinks():
    while not (input.button_is_pressed(Button.B)):
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
    while not (input.button_is_pressed(Button.A)):
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
while True:
    while not (input.button_is_pressed(Button.AB)):
        if input.button_is_pressed(Button.A):
            pacmanlinks()
        elif input.button_is_pressed(Button.B):
            pacmanrechts()
    herzschlag(4)