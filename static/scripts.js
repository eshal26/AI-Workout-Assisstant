document.getElementById('exerciseForm').onsubmit = function(e) {
    e.preventDefault(); // Prevent the form from submitting traditionally
    const exercise = document.querySelector('input[name="exercise"]:checked').value;
    window.location.href = `/video?exercise_id=${exercise}`; // Redirect to video.html with exercise ID
};
