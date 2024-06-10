
    function submitForm() {
    // Get the form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Basic validation
    if (!name || !email || !message) {
    alert('Please fill in all required fields.');
    return;
}

    // Simulate form submission (you can replace this with actual form submission logic)
    alert('Form submitted successfully!\n' +
    'Name: ' + name + '\n' +
    'Email: ' + email + '\n' +
    'Subject: ' + subject + '\n' +
    'Message: ' + message);

    // Clear the form fields
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('subject').value = '';
    document.getElementById('message').value = '';
}
