let MODE = "NORMAL"
let EMERGENCY_STOP = false
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    if (MODE == "NORMAL") {
        MODE = "SPORT"
        basic.showString("S")
    } else {
        MODE = "NORMAL"
        basic.showString("N")
    }
    
})
input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    
    EMERGENCY_STOP = !EMERGENCY_STOP
    if (EMERGENCY_STOP) {
        basic.showString("STOP")
    } else {
        basic.showString("GO")
    }
    
})
function show_speed(speed: number) {
    if (speed == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # # # # #
        `)
    } else if (speed == 2) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            # # # # #
        `)
    } else if (speed == 3) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            # # # # #
            # # # # #
        `)
    }
    
}

basic.forever(function on_forever() {
    let threshold: number;
    let speed: number;
    if (EMERGENCY_STOP) {
        basic.showIcon(IconNames.No)
        basic.pause(100)
        return
    }
    
    let x = input.acceleration(Dimension.X)
    let y = input.acceleration(Dimension.Y)
    if (MODE == "NORMAL") {
        threshold = 300
    } else {
        threshold = 50
    }
    
    if (Math.abs(x) < threshold && Math.abs(y) < threshold) {
        basic.showIcon(IconNames.Yes)
        basic.pause(50)
        return
    }
    
    let tilt_strength = Math.max(Math.abs(x), Math.abs(y))
    if (tilt_strength < 500) {
        speed = 1
    } else if (tilt_strength < 800) {
        speed = 2
    } else {
        speed = 3
    }
    
    //  Diagonal arrows
    if (x > threshold && y < -threshold) {
        basic.showArrow(ArrowNames.NorthEast)
    } else if (x < -threshold && y < -threshold) {
        basic.showArrow(ArrowNames.NorthWest)
    } else if (x > threshold && y > threshold) {
        basic.showArrow(ArrowNames.SouthEast)
    } else if (x < -threshold && y > threshold) {
        basic.showArrow(ArrowNames.SouthWest)
    } else if (y < -threshold) {
        //  Straight arrows
        basic.showArrow(ArrowNames.North)
    } else if (y > threshold) {
        basic.showArrow(ArrowNames.South)
    } else if (x > threshold) {
        basic.showArrow(ArrowNames.East)
    } else if (x < -threshold) {
        basic.showArrow(ArrowNames.West)
    }
    
    //  Keep arrow visible
    basic.pause(500)
    //  Then show speed
    show_speed(speed)
    basic.pause(250)
})
