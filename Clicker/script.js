document.addEventListener('click', (e) => {
    const circle = document.createElement('div');
    circle.className = 'circle';
    circle.textContent = 'HI';

    const colors = ['red','blue','orange','green','pink','purple','aqua','yellow'];
    circle.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];

    const size = 50;
    circle.style.left = `${e.clientX - size / 2}px`;
    circle.style.top  = `${e.clientY - size / 2}px`;

    document.body.appendChild(circle);

    setTimeout(() => circle.remove(), 2000);
});
