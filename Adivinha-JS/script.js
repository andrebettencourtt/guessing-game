const btn_again = document.getElementById("btn-again");
const btn_check = document.getElementById("btn-check");
const message = document.getElementById("message");
let score = document.getElementById("score");
let highscore = document.getElementById("highscore");
let scoreTotal = 20
let highscoreTotal = 0

let secretNumber = Math.trunc(Math.random() * 20) + 1;

btn_check.addEventListener('click', () => {

    let number = +document.getElementById("number").value

    if (number === 0) {
        message.textContent = "Enter a number!"
        return
    }

    if (number === secretNumber) {
        message.textContent = "Congratulations!"
        document.body.style.background = "green";

        if (scoreTotal > highscoreTotal) {
            highscoreTotal = scoreTotal
            highscore.textContent = scoreTotal;
        } else {
            highscore.textContent = highscoreTotal;
        }

    } else if (number > secretNumber) {
        message.textContent = "to high!!"
        scoreTotal--
        score.textContent = scoreTotal;

    } else if (number < secretNumber) {
        message.textContent = "to low!!"
        scoreTotal--
        score.textContent = scoreTotal;
    } else {
        message.textContent = "Insira um número";
    }

    if (scoreTotal <= 0) {
        message.textContent = "GAME OVER";
        document.body.style.background = "red";
        scoreTotal = 0;
        btn_check.disabled = true;
    }
})

btn_again.addEventListener('click', () => {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    console.log(secretNumber);
    document.body.style.background = "#222";
    scoreTotal = 20;
    btn_check.disabled = false;
    score.textContent = scoreTotal
})
