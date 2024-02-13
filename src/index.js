const body = document.body;

const ball = document.createElement('div');
// ball.classList.add('w-10', 'h-10', 'bg-gray-500', 'rounded-full', 'absolute');
ball.style.width = '20px'
ball.style.height = '20px'
ball.style.backgroundColor = '#808080';
ball.style.position = 'absolute';
ball.style.zIndex = '100';
body.appendChild(ball);

body.addEventListener("mousemove", (event) => {
    // ball.classList.replace('translate-x', `translate-x-[${event.clientX}px]`)
    // ball.classList.replace('translate-y', `translate-y-[${event.clientY}px]`)
    ball.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`
    console.log(event.clientX);
    console.log(event.clientY);
})

console.log('helloooo');