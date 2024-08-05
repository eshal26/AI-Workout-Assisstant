document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.exercise-btn');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const exercise = button.getAttribute('data-value');
            window.location.href = `/video?exercise_id=${exercise}`; // Redirect to video.html with exercise ID
        });
    });
});

