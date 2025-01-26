function calculateScore() {
    let score = 0;
    const answers = [2, 2, 3]; // правильные ответы

    for (let i = 0; i < answers.length; i++) {
        const question = document.querySelector(`input[name="q${i + 1}"]:checked`);
        if (question && parseInt(question.value) === answers[i]) {
            score += 2; // начисляем 2 балла за правильный ответ
        }
    }

    document.getElementById("result").innerText = `Вы набрали ${score} баллов.`;
}