function playGame() {
    // 1. Random numbers generate(1-6)
    let dice1 = Math.floor(Math.random() * 6) + 1;
    let dice2 = Math.floor(Math.random() * 6) + 1;

    // 2. Show dice value on screen
    document.getElementById('userDice').innerHTML = dice1;
    document.getElementById('compDice').innerHTML = dice2;

    // 3. Update scores
    document.getElementById('userScore').innerHTML = dice1;
    document.getElementById('compScore').innerHTML = dice2;

    // 4. check winner 
    let resultText = document.getElementById('finalResult');

    if (dice1 > dice2) {
        resultText.innerHTML = "🏆 You Win!";
    } else if (dice2 > dice1) {
        resultText.innerHTML = "💻 Computer Wins!";
    } else {
        resultText.innerHTML = "🤝 It's a Tie!";
    }
}