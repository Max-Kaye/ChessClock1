input.onButtonPressed(Button.A, function () {
    elapsed_time_since_last_change = input.runningTime() - time_move_started
    elapsed_time_since_last_change = Math.round(elapsed_time_since_last_change / 1000)
    time_move_started = input.runningTime()
    basic.showString("" + current_player + elapsed_time_since_last_change)
    if (current_player == "a") {
        total_time_a = total_time_a + elapsed_time_since_last_change
        basic.showString("" + current_player + total_time_a)
        current_player = "b"
    } else {
        total_time_b = total_time_b + elapsed_time_since_last_change
        basic.showString("" + current_player + total_time_b)
        current_player = "a"
    }
})
let total_time_b = 0
let total_time_a = 0
let elapsed_time_since_last_change = 0
let time_move_started = 0
let current_player = ""
current_player = "a"
time_move_started = input.runningTime()
