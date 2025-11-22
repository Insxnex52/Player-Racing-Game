const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");
const statusText = document.getElementById("status");
const resetBtn = document.getElementById("resetBtn");

let pos1 = 0;
let pos2 = 0;
let gameOver = false;

document.addEventListener("keydown", (e) => {
    if (gameOver) return;

    if (e.key === "a" || e.key === "A") {
        pos1 += 20;
        player1.style.left = pos1 + "px";
    }

    if (e.key === "l" || e.key === "L") {
        pos2 += 20;  
         
        player2.style.left = pos2 + "px";
    }

    checkWinner();
});

function checkWinner() {
    const trackWidth = document.querySelector(".track").offsetWidth - 60;

    if (pos1 >= trackWidth) {
        statusText.textContent = "🚗💨 Player 1 Menang!";
        gameOver = true;
    }

    if (pos2 >= trackWidth) {
        statusText.textContent = "🚙💨 Player 2 Menang!";
        gameOver = true;
    }
}

resetBtn.addEventListener("click", () => {
    pos1 = 0;
    pos2 = 0;
    player1.style.left = "0px";
    player2.style.left = "0px";
    statusText.textContent = "Tekan A untuk Player 1 dan L untuk Player 2";
    gameOver = false;
});
