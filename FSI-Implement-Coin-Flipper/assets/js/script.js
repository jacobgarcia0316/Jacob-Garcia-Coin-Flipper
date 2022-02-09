
let allRolls = [0, 0, 0, 0, 0, 0]

let updateScoreboard = function () {

    let total = allRolls[0] + allRolls[1] + allRolls[2] + allRolls[3] + allRolls[4] + allRolls[5]

    let allPercents = [0, 0, 0, 0, 0, 0]

    if (total > 0) {
        for (let i = 0; i < allRolls.length; i++) {
            allPercents[i] = Math.round((allRolls[i] / total) * 100)
        }
    }

    for (let i = 0; i < allRolls.length; i++) {
        document.getElementById(`td${i + 1}`).textContent = allRolls[i]
        document.getElementById(`td${i + 1}-percent`).textContent = allPercents[i] + '%'
    }
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('roll').addEventListener('click', function () {
        let rolledValue = Math.ceil(Math.random() * 6)

        document.getElementById('message').textContent = `You Rolled ${rolledValue}!`

        allRolls[rolledValue - 1] += 1

        document.getElementById('dice-image').src = `assets/images/dice/dice${rolledValue}.png`

        updateScoreboard()
    })

    document.getElementById('clear').addEventListener('click', function () {
        allRolls = [0, 0, 0, 0, 0, 0]

        document.getElementById('message').textContent = 'Let\'s Get Rolling!'

        updateScoreboard()
    })
})