document.getElementById('shareBtn').addEventListener('click', () => {
    // Logic to share the stream
    alert('Stream link shared!');
});

document.getElementById('likeBtn').addEventListener('click', () => {
    // Logic for liking the stream
    alert('You liked the stream!');
});

document.getElementById('dislikeBtn').addEventListener('click', () => {
    // Logic for disliking the stream
    alert('You disliked the stream!');
});

document.getElementById('subscribeBtn').addEventListener('click', () => {
    // Logic for subscribing to the stream
    alert('You subscribed to the stream!');
});

document.getElementById('createAccountBtn').addEventListener('click', () => {
    const email = document.getElementById('email').value;
    if (email) {
        // Logic for creating an account
        alert(`Account created for ${email}!`);
    } else {
        alert('Please enter a valid email address.');
    }
});
