// Function to validate the form
function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const comments = document.getElementById('comments').value;

    if (name === "" || email === "" || comments === "") {
        alert("Please fill in all fields.");
        return false;  // Prevent form submission if validation fails
    }

    // Display the feedback message
    displayFeedback(name, email, rating, comments);
    
    // Prevent form submission (for demo purposes)
    return false;
}

// Function to display the feedback message after form submission
function displayFeedback(name, email, comments) {
    const feedbackMessage = document.getElementById('feedbackMessage');
    
    feedbackMessage.innerHTML = `
        <p>Thank you for your feedback, <strong>${name}</strong>!</p>
        <p>Email: ${email}</p>
        <p>Comments: ${comments}</p>
    `;
    
    // Optionally, reset the form after submission
    document.getElementById('feedbackForm').reset();
}
