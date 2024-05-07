// Define the correct answers for each question
const correctAnswers = {
    question1: "Hardware-and-software",
    question2: "System-cooling-fan",
    question3: "Central-processing-unit"
};

// Function to calculate and display the quiz score
function submitQuiz() {
    let score = 0;

    // Loop through each question
    Object.keys(correctAnswers).forEach(questionId => {
        const selectedAnswer = document.querySelector(`input[name=${questionId}]:checked`);

        if (selectedAnswer) {
            const selectedValue = selectedAnswer.value;

            // Check if the selected answer matches the correct answer
            if (selectedValue === correctAnswers[questionId]) {
                score++;
            }
        }
    });

    // Display the score
    document.getElementById("score-value").textContent = score.toString();
}
