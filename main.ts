
/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Ella An
 * Created on: Oct 2024
 * This program compare numbers
*/

//variables
let numberOne: number
let numberTwo: number

//setup
numberOne = randint(0, 99)
numberTwo = randint(0, 99)
basic.clearScreen()
basic.showIcon(IconNames.Happy)

//button a pressed
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.showString("#1:" + (numberOne).toString())
    basic.pause(1000)
    basic.showIcon(IconNames.Happy)
})

//button b pressed
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.showString("#2:" + (numberTwo).toString())
    basic.pause(1000)
    basic.showIcon(IconNames.Happy)
})

//when microbit is shaken
input.onGesture(Gesture.Shake, function () {
    if(numberOne < numberTwo) {
        basic.clearScreen()
        basic.showString((numberOne).toString() + "<" + (numberTwo).toString())
        basic.pause(1000)
        basic.showIcon(IconNames.Happy)
    }
    else {
        basic.clearScreen()
        basic.showString((numberOne).toString() + ">" + (numberTwo).toString())
        basic.pause(1000)
        basic.showIcon(IconNames.Happy)
    }
})
