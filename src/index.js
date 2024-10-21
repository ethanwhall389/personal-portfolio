// Form submission
const form = document.querySelector('#contact-form');
const messageOK = document.querySelector('#message-ok');
const messageError = document.querySelector('#message-error');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    fetch('google.com', {
        method: 'POST',
        body: formData,
    })
    .then(response => {
        if (response.ok) {
            // If the submission was successful, show the success message
            messageOK.style.display = 'block';
        } else {
             // If there was an error, show the error message
             messageError.style.display = 'block';
        }
    })
    .catch(() => {
        // Handle any errors that occur during the fetch
        messageError.style.display = 'block';
    })
})