document.addEventListener('DOMContentLoaded', function() {
    const videoFeed = document.getElementById('videoFeed');
    const urlParams = new URLSearchParams(window.location.search);
    const exerciseId = urlParams.get('exercise_id');
    const exerciseHeader = document.getElementById('exercise');

    if (exerciseId == 1)
    exerciseHeader.textContent = `Squat`;
    else if (exerciseId == 2)
    exerciseHeader.textContent = `Bicep Curl`;
    else if (exerciseId == 3)
    exerciseHeader.textContent = `Sit-up`;


    if (exerciseId && videoFeed) {
        // Ensure the URL is correctly formatted
        videoFeed.src = `/video_feed/${exerciseId}`;
    } else {
        console.error('No exercise ID found in query parameters.');
    }
});

