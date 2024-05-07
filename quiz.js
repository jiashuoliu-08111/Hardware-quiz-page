document.addEventListener("DOMContentLoaded", function() {
    const questions = [
        {
            question: "A computer system is composed of ____ ?",
            correctAnswer: "hardware-and-software",
            selectedAnswer: null
        },
        {
            question: "Which of the following is an internal hardware component?",
            correctAnswer: "system-cooling-fan",
            selectedAnswer: null
        },
        {
            question: "What does the acronym CPU stand for?",
            correctAnswer: "central-processing-unit",
            selectedAnswer: null
        }
    ];
    

    const submitButton = document.createElement("button");
    submitButton.textContent = "Submit Answers";
    submitButton.addEventListener("click", () => {
        let score = 0;

        questions.forEach((q, index) => {
            const selectedOption = document.querySelector(`input[name="q${index + 1}"]:checked`);
            if (selectedOption) {
                const selectedValue = selectedOption.value;
                questions[index].selectedAnswer = selectedValue;
                if (selectedValue === q.correctAnswer) {
                    score++;
                }
            }
        });

        displayResults(score);
    });

    document.body.appendChild(submitButton);

    function displayResults(score) {
        const resultDiv = document.createElement("div");
        resultDiv.setAttribute("id", "results");

        const heading = document.createElement("h2");
        heading.textContent = "Quiz Results";
        resultDiv.appendChild(heading);

        const scoreMessage = document.createElement("p");
        scoreMessage.textContent = `You scored ${score} out of ${questions.length}.`;
        resultDiv.appendChild(scoreMessage);

        document.body.appendChild(resultDiv);
    }
});



