MODE = "NORMAL"
EMERGENCY_STOP = False


def on_button_pressed_a():
    global MODE

    if MODE == "NORMAL":
        MODE = "SPORT"
        basic.show_string("S")
    else:
        MODE = "NORMAL"
        basic.show_string("N")

input.on_button_pressed(Button.A, on_button_pressed_a)


def on_button_pressed_ab():
    global EMERGENCY_STOP

    EMERGENCY_STOP = not EMERGENCY_STOP

    if EMERGENCY_STOP:
        basic.show_string("STOP")
    else:
        basic.show_string("GO")

input.on_button_pressed(Button.AB, on_button_pressed_ab)


def show_speed(speed):

    if speed == 1:
        basic.show_leds("""
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # # # # #
        """)

    elif speed == 2:
        basic.show_leds("""
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            # # # # #
        """)

    elif speed == 3:
        basic.show_leds("""
            . . . . .
            . . . . .
            # # # # #
            # # # # #
            # # # # #
        """)


def on_forever():

    if EMERGENCY_STOP:
        basic.show_icon(IconNames.NO)
        basic.pause(100)
        return

    x = input.acceleration(Dimension.X)
    y = input.acceleration(Dimension.Y)

    if MODE == "NORMAL":
        threshold = 300
    else:
        threshold = 50

    if abs(x) < threshold and abs(y) < threshold:
        basic.show_icon(IconNames.YES)
        basic.pause(50)
        return

    tilt_strength = max(abs(x), abs(y))

    if tilt_strength < 500:
        speed = 1
    elif tilt_strength < 800:
        speed = 2
    else:
        speed = 3

    # Diagonal arrows
    if x > threshold and y < -threshold:
        basic.show_arrow(ArrowNames.NORTH_EAST)

    elif x < -threshold and y < -threshold:
        basic.show_arrow(ArrowNames.NORTH_WEST)

    elif x > threshold and y > threshold:
        basic.show_arrow(ArrowNames.SOUTH_EAST)

    elif x < -threshold and y > threshold:
        basic.show_arrow(ArrowNames.SOUTH_WEST)

    # Straight arrows
    elif y < -threshold:
        basic.show_arrow(ArrowNames.NORTH)

    elif y > threshold:
        basic.show_arrow(ArrowNames.SOUTH)

    elif x > threshold:
        basic.show_arrow(ArrowNames.EAST)

    elif x < -threshold:
        basic.show_arrow(ArrowNames.WEST)

    # Keep arrow visible
    basic.pause(500)

    # Then show speed
    show_speed(speed)

    basic.pause(250)

basic.forever(on_forever)