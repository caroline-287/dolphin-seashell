hummingbird.startHummingbird()
basic.forever(function () {
    basic.showIcon(IconNames.Duck)
})
basic.forever(function () {
    if (hummingbird.getSensor(SensorType.Light, ThreePort.One) > 10) {
        hummingbird.setLED(ThreePort.One, 100)
        basic.pause(500)
        hummingbird.setLED(ThreePort.One, 50)
        basic.pause(500)
        hummingbird.setLED(ThreePort.Two, 100)
        basic.pause(500)
        hummingbird.setLED(ThreePort.Two, 50)
        basic.pause(500)
        hummingbird.setTriLED(
        TwoPort.One,
        225,
        183,
        192
        )
        hummingbird.setTriLED(
        TwoPort.One,
        0,
        0,
        0
        )
        hummingbird.setPositionServo(FourPort.One, 180)
        basic.pause(100)
        hummingbird.setPositionServo(FourPort.One, 0)
        basic.pause(100)
        hummingbird.setPositionServo(FourPort.One, 180)
    } else {
        hummingbird.setLED(ThreePort.One, 0)
        hummingbird.setLED(ThreePort.Two, 0)
        hummingbird.setLED(ThreePort.Three, 0)
    }
})
