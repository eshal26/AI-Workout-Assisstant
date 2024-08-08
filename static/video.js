document.addEventListener('DOMContentLoaded', function() {
    const videoFeed = document.getElementById('videoFeed');
    const urlParams = new URLSearchParams(window.location.search);
    const exerciseId = urlParams.get('exercise_id');
    const resetButton= document.getElementById('resetButton');

    resetButton.addEventListener('click', () => {
        fetch('/reset', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            }
        })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log('Error:', error);
    });
});

    if (exerciseId && videoFeed) {
        videoFeed.src = `/video_feed/${exerciseId}`;
    } else {
        console.error('No exercise ID found in query parameters.');
    }
});

