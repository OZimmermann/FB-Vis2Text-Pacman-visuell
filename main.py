while True:
    if input.button_is_pressed(Button.A):
        while not (input.button_is_pressed(Button.B)) and not (input.is_gesture(Gesture.SHAKE)):
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
    elif input.button_is_pressed(Button.B):
        while not (input.button_is_pressed(Button.A)) and not (input.is_gesture(Gesture.SHAKE)):
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
    elif input.is_gesture(Gesture.SHAKE):
        basic.show_icon(IconNames.HAPPY)