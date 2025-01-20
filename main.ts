input.onButtonPressed(Button.A, function () {
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P8, 1)
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P1, 1)
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P2, 1)
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
    basic.pause(1000)
    music.play(music.tonePlayable(587, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
    for (let index = 0; index < 3; index++) {
        max7219_matrix.scrollText(
        "GO!",
        75,
        10
        )
    }
})
max7219_matrix.setup(
1,
DigitalPin.P16,
DigitalPin.P15,
DigitalPin.P14,
DigitalPin.P13
)
basic.forever(function () {
	
})
