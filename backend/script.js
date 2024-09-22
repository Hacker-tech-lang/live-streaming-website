document.getElementById('createAccountButton').addEventListener('click', async function() {
    const email = document.getElementById('email').value;
    if (email) {
        try {
            const response = await fetch('http://localhost:5000/create_account', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });
            const data = await response.json();
            alert(data.message || data.error);
        } catch (error) {
            console.error('Error creating account:', error);
        }
    } else {
        alert('Please enter a valid email address.');
    }
});
