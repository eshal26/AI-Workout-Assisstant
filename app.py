from flask import Flask, render_template, Response, request, jsonify
from exercises import generate_frames, reset_exercise_state

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/video_feed/<int:exercise_id>')
def video_feed(exercise_id):
    reset_exercise_state()
    # Return the video feed as a streaming response
    return Response(generate_frames(exercise_id),
                    mimetype='multipart/x-mixed-replace; boundary=frame')

@app.route('/video')
def video():
    exercise_id = request.args.get('exercise_id')
    if exercise_id:
        return render_template('video.html', exercise_id=exercise_id)
    else:
        return "Exercise ID not provided", 400
    
@app.route('/reset', methods=['POST'])
def reset():
    reset_exercise_state()
    return jsonify({'message': 'Exercise state reset'}), 200

if __name__ == '__main__':
    app.run(debug=True)
