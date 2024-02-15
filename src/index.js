const body = document.body;

const cursor = document.querySelector('#cursor');
const clickables = document.querySelectorAll('a');

body.addEventListener("mousemove", (event) => {
    cursor.style.transform = `translate(${event.clientX - 8}px, ${event.clientY - 8}px)`
})

body.addEventListener('mouseenter', (event) => {
    cursor.style.display = 'block';
})

body.addEventListener('mouseleave', (event) => {
    cursor.style.display = 'none';
})

clickables.forEach(item => {
    item.addEventListener('mouseover', () => {
        cursor.style.width = '10px';
        cursor.style.height = '10px';
    })
    
    item.addEventListener('mouseout', () => {
        cursor.style.width = '16px';
        cursor.style.height = '16px';
    })
})


// Hover profile photo

// const profileLink = document.querySelector('#profile-image-link');
// const profilePhoto = document.querySelector('#profile-photo');

// profileLink.addEventListener('mouseover', () => {
//     profilePhoto.classList.remove('opacity-0');
//     profilePhoto.classList.add('opacity-100');
//     profilePhoto.style.transform = 'translate(0px, -10px)';
// })

// profileLink.addEventListener('mouseout', () => {
//     profilePhoto.classList.remove('opacity-100');
//     profilePhoto.classList.add('opacity-0');
//     profilePhoto.style.transform = 'translate(0px, 10px)';
// })


// Hover Skills
const skills = document.querySelectorAll('#skill-logo');

    skills.forEach(skill => {
        skill.addEventListener('mouseover', () => {
            console.log('mouseover');
            const label = skill.nextElementSibling;
            label.classList.remove('animate-risedown');
            label.classList.add('animate-riseup');
        })

        skill.addEventListener('mouseout', () => {
            const label = skill.nextElementSibling;
            setTimeout( () => {
                label.classList.remove('animate-riseup');
                label.classList.add('animate-risedown');
            }, 200)
        })

    })
