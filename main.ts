sensors.Speech_recognition_reset()
sensors.Speech_recognition_mode(Mode.BUTTON_MODE)
sensors.Speech_recognition_time(5)
sensors.Speech_recognition_glossary(0, "hello")
sensors.Speech_recognition_glossary(1, "forward")
sensors.Speech_recognition_glossary(2, "backward")
// Traffic lights
basic.forever(function () {
    sensors.setpin(DigitalPin.P0, DigitalPin.P1, DigitalPin.P8)
    sensors.selectlight(_selectlight._red, ledon_off._on)
    basic.pause(500)
    sensors.selectlight(_selectlight._yellow, ledon_off._on)
    basic.pause(500)
    sensors.selectlight(_selectlight._green, ledon_off._on)
    basic.pause(500)
})
// RUS04 not working yet
basic.forever(function () {
    basic.showNumber(sensors.Ultrasonic(DigitalPin.P8))
    sensors.sensorbit_rus04(DigitalPin.P2, RgbUltrasonics.All, RgbColors.Yellow, ColorEffect.Rotate)
    sensors.sensorbit_rus04(DigitalPin.P2, RgbUltrasonics.All, RgbColors.Blue, ColorEffect.Breathing)
    serial.writeNumber(sensors.Ultrasonic(DigitalPin.P8))
})
// TM1650 4 LED display, plug into I2C (SDA/SCL)
basic.forever(function () {
    sensors.showDpAt(ledon_off._off, 1)
    sensors.showDpAt(ledon_off._off, 2)
    sensors.showDpAt(ledon_off._off, 0)
    sensors.showDpAt(ledon_off._on, 3)
    sensors.digit(3, 0)
    sensors.digit(1, 1)
    sensors.digit(9, 2)
    sensors.digit(2, 3)
    sensors.setIntensity(7)
})
basic.forever(function () {
    sensors.Speech_recognition_start()
    if (sensors.Speech_recognition_get_result() == 0) {
        basic.showString("Hello!")
    } else if (sensors.Speech_recognition_get_result() == 1) {
        basic.showArrow(ArrowNames.East)
    } else {
    	
    }
})
