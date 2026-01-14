setInterval(() => {
    const result = document.getElementById("result");

    const current = Date.now();
    const olympicTime = new Date(2028, 6, 14).getTime(); // July 14, 2028

    let timeLeft = olympicTime - current;

    if (timeLeft <= 0) {
        result.textContent = "Olympics have started 🎉";
        return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    timeLeft %= (1000 * 60 * 60 * 24);

    const hours = Math.floor(timeLeft / (1000 * 60 * 60));
    timeLeft %= (1000 * 60 * 60);

    const minutes = Math.floor(timeLeft / (1000 * 60));
    timeLeft %= (1000 * 60);

    const seconds = Math.floor(timeLeft / 1000);

    result.textContent = `${days} Days : ${hours} Hours : ${minutes} Minutes : ${seconds} Seconds`;
}, 1000);
