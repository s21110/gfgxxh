let 分數 = 0
let 要求姿勢 = 0
input.onGesture(Gesture.Shake, function () {
    分數 = 0
    for (let index = 0; index < 5; index++) {
        要求姿勢 = randint(0, 3) * 2
        basic.showArrow(要求姿勢)
        basic.pause(500)
        if (要求姿勢 == 0 && input.isGesture(Gesture.LogoDown)) {
            basic.showIcon(IconNames.Yes)
            分數 += 1
        } else if (要求姿勢 == 2 && input.isGesture(Gesture.TiltRight)) {
            basic.showIcon(IconNames.Yes)
            分數 += 1
        } else if (要求姿勢 == 4 && input.isGesture(Gesture.LogoUp)) {
            basic.showIcon(IconNames.Yes)
            分數 += 1
        } else if (要求姿勢 == 6 && input.isGesture(Gesture.TiltLeft)) {
            basic.showIcon(IconNames.Yes)
            分數 += 1
        } else {
            basic.showIcon(IconNames.No)
        }
    }
    basic.showNumber(分數)
})
