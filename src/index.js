const body = document.body;

// const ball = document.createElement('div');
// // ball.classList.add('w-10', 'h-10', 'bg-gray-500', 'rounded-full', 'absolute');
// ball.style.width = '20px'
// ball.style.height = '20px'
// ball.style.backgroundColor = '#808080';
// ball.style.position = 'absolute';
// ball.style.zIndex = '100';
// body.appendChild(ball);

const cursor = document.querySelector('#cursor');
const clickables = document.querySelectorAll('a');

body.addEventListener("mousemove", (event) => {
    // ball.classList.replace('translate-x', `translate-x-[${event.clientX}px]`)
    // ball.classList.replace('translate-y', `translate-y-[${event.clientY}px]`)
    cursor.style.transform = `translate(${event.clientX - 8}px, ${event.clientY - 8}px)`
    console.log(event.clientX);
    console.log(event.clientY);
})

body.addEventListener('mouseenter', (event) => {
    cursor.style.display = 'block';
})

body.addEventListener('mouseleave', (event) => {
    cursor.style.display = 'none';
})

clickables.forEach(item => {
    item.addEventListener('mouseover', () => {
        // cursor.classList.add('w-3');
        // cursor.classList.add('h-3');
        cursor.style.width = '10px';
        cursor.style.height = '10px';
    })
    
    item.addEventListener('mouseout', () => {
        // cursor.classList.remove('w-3');
        // cursor.classList.remove('h-3');
        cursor.style.width = '16px';
        cursor.style.height = '16px';
    })
})

console.log('helloooo');