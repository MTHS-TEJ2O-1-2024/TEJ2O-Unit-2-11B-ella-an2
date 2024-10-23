"""
Created by: Ella An
Created on: Oct 2024
This module compares numbers
"""

"""imports"""
from microbit import *
from random import *
from time import sleep

"""setup"""
numberOne = randint(0, 99)
numberTwo = randint(0, 99)

display.clear
display.show(Image.HAPPY)
sleep(1)


while True:
    """if button a is pressed"""
    if button_a.is_pressed():
        display.clear
        display.scroll("#1:" + str(numberOne))
        sleep(1)
        display.show(Image.HAPPY)

    """if button b is pressed"""
    if button_b.is_pressed():
        display.clear
        display.scroll("#2:" + str(numberTwo))
        sleep(1)
        display.show(Image.HAPPY)

    """if microbit is shook"""
    if accelerometer.was_gesture("shake"):
        if numberOne < numberTwo:
            display.scroll(str(numberOne) + "<" + str(numberTwo))
            sleep(1)
            display.show(Image.HAPPY)
        else:
            display.scroll(str(numberOne) + ">" + str(numberTwo))
            sleep(1)
            display.show(Image.HAPPY)
