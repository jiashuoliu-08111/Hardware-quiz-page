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
        },
        {
            question: "Which component of a computer is responsible for storing data long-term?",
            correctAnswer: "hard-drive",
            selectedAnswer: null
        },
        {
            question: "What does GPU stand for?",
            correctAnswer: "graphics-processing-unit",
            selectedAnswer: null
        },
        {
            question: "Which component is responsible for actively cooling a computer by expelling warm air?",
            correctAnswer: "system-cooling-fan",
            selectedAnswer: null
        },
        {
            question: "What is the role of a switched-mode power supply (SMPS) in a computer?",
            correctAnswer: "to-convert-electrical-power-efficiently",
            selectedAnswer: null
        },
        {
            question: "What is a motherboard responsible for in a computer system?",
            correctAnswer: "providing-communication-between-components",
            selectedAnswer: null
        },
        {
            question: "Which type of drive uses laser light to read and write data on discs?",
            correctAnswer: "optical-drive",
            selectedAnswer: null
        },
        {
            question: "Which component executes instructions of a computer program, including arithmetic, logic, and input/output operations?",
            correctAnswer: "CPU",
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



