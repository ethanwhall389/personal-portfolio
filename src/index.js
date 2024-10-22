// Form submission
// const form = document.querySelector('#contact-form');
// const messageOK = document.querySelector('#message-ok');
// const messageError = document.querySelector('#message-error');

// form.addEventListener('submit', (e) => {
//     e.preventDefault();

//     const formData = new FormData(form);
//     const endpoint = 'https://forms.un-static.com/forms/5c34e40fc047c8fbeb5a41d0e12fa8a8249d1d33';

//     fetch(endpoint, {
//         method: 'POST',
//         body: formData,
//         mode: 'no-cors',
//     })
//     .then(response => {
//         if (response.ok) {
//             // If the submission was successful, show the success message
//             messageOK.style.display = 'block';
//         } else {
//              // If there was an error, show the error message
//              messageError.style.display = 'block';
//         }
//     })
//     .catch(() => {
//         // Handle any errors that occur during the fetch
//         messageError.style.display = 'block';
//     })
// })


// Animate on scroll
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fadein');
                observer.unobserve(entry.target);
            }
        })
    }, {
        threshold: 0.1
    });

    sections.forEach(element => {
        observer.observe(element);
    })
})