document.getElementById('shareButton').addEventListener('click', function() {
    // Share functionality
    alert('Share this live stream!');
});

document.getElementById('subscribeButton').addEventListener('click', function() {
    // Subscribe functionality
    alert('Thank you for subscribing!');
});

document.getElementById('likeButton').addEventListener('click', function() {
    // Like functionality
    alert('You liked this stream!');
});

document.getElementById('dislikeButton').addEventListener('click', function() {
    // Dislike functionality
    alert('You disliked this stream!');
});

document.getElementById('createAccountButton').addEventListener('click', function() {
    const email = document.getElementById('email').value;
    if (email) {
        alert('Account created with email: ' + email);
    } else {
        alert('Please enter a valid email address.');
    }
});

document.getElementById('openCameraButton').addEventListener('click', function() {
    // Open the photo camera
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(function(stream) {
            const video = document.getElementById('liveStream');
            video.srcObject = stream;
            video.play();
        })
        .catch(function(error) {
            console.error('Error accessing the camera: ', error);
        });
});
