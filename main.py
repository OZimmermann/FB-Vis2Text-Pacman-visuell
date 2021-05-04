while not (input.button_is_pressed(Button.AB)):
    if input.button_is_pressed(Button.A):
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
    elif input.button_is_pressed(Button.B):
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
    else:
        basic.show_icon(IconNames.HAPPY)
for index in range(4):
    basic.show_icon(IconNames.HEART)
    basic.pause(100)
    basic.show_icon(IconNames.SMALL_HEART)
    basic.pause(100)