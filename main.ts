basic.forever(function () {
    basic.showLeds(`
        . # # # .
        # # . . .
        # # # # .
        # # # # .
        . # . # .
        `)
    basic.pause(2000)
    basic.showString("among us in real life")
    for (let index = 0; index < 2; index++) {
        basic.showLeds(`
            . . # # .
            . # . . .
            . . # . .
            . . . # .
            . # # . .
            `)
        basic.pause(33)
        basic.showLeds(`
            . # . # .
            . # . # .
            . # . # .
            . # . # .
            . . # . .
            `)
        basic.pause(33)
        basic.showLeds(`
            . . # # .
            . # . . .
            . . # . .
            . . . # .
            . # # . .
            `)
        basic.pause(33)
    }
})
//made by james gusche, 05/05/2023