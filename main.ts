input.onLogoEvent(TouchButtonEvent.Touched, function () {
    input.calibrateCompass()
    basic.pause(100)
    basic.showArrow(ArrowNames.North)
})
basic.showIcon(IconNames.Heart)
basic.forever(function () {
	
})
