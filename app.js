const correctAnswers = ['B', 'C', 'B', 'D'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', e => {
    /*prevent page refresh on form submission*/
    e.preventDefault();

    let score = 0;
    /* Get the values from the radio buttons */
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    /* Compare user answers to correct answers */
    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score += 25;
        }
    });
    
    /* Scroll page up after submit */
    window.scrollTo(0,0);

    /* Show result */
    result.classList.remove('d-none');

    let base = 0;
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${base}%`;
        if (base === score) {
            clearInterval(timer);
        } else {
            base++;
        }
    }, 15);
});

