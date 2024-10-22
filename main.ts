/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Ella An
 * Created on: Oct 2024
 * This program compare numbers
*/

let numberOne: number
let numberTwo: number

numberTwo = -1
numberOne = -1
basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
    numberOne = randint(0, 99)
    basic.showString("#1:" + (numberOne).toString())
    basic.pause(1000)
    basic.showIcon(IconNames.Happy)
})

input.onButtonPressed(Button.B, function () {
    numberTwo = randint(0, 99)
    basic.showString("#2:" + (numberTwo).toString())
    basic.pause(1000)
    basic.showIcon(IconNames.Happy)
})

input.onGesture(Gesture.Shake, function () {
    if(numberOne < numberTwo) {
        basic.showString((numberOne).toString() + "<" + (numberTwo).toString())
        basic.pause(1000)
        basic.showIcon(IconNames.Happy)
    }
    else {
        basic.showString((numberOne).toString() + ">" + (numberTwo).toString())
        basic.pause(1000)
        basic.showIcon(IconNames.Happy)
    }
})
