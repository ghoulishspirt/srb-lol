document.addEventListener("DOMContentLoaded", () => {
    const box = document.querySelector(".center-box");

    if (!box) {
        console.error("Element .center-box not found!");
        return;
    }

    box.addEventListener("mousemove", (e) => {
        const boxRect = box.getBoundingClientRect();

        // Get the cursor position relative to the box
        const x = e.clientX - boxRect.left;
        const y = e.clientY - boxRect.top;

        // Normalize values to range -1 to 1
        const centerX = boxRect.width / 2;
        const centerY = boxRect.height / 2;
        const tiltX = (x - centerX) / centerX; // Left (-1) to Right (1)
        const tiltY = (y - centerY) / centerY; // Top (-1) to Bottom (1)

        // Define tilt strength (higher value = more dramatic tilt)
        const tiltStrength = 10; // Degrees

        // Keep the box centered while adding the 3D effect
        box.style.transform = `translate(-50%, -50%) perspective(500px) rotateX(${tiltY * tiltStrength}deg) rotateY(${tiltX * tiltStrength}deg)`;
    });

    // Reset when cursor leaves
    box.addEventListener("mouseleave", () => {
        box.style.transform = "translate(-50%, -50%) perspective(500px) rotateX(0deg) rotateY(0deg)";
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const countdownElement = document.getElementById("countdown");

    function updateCountdown() {
        const now = new Date();
        let halloween = new Date(now.getFullYear(), 9, 31, 0, 0, 0); // Oct 31st, midnight

        // If it's already past Halloween this year, set it for next year
        if (now > halloween) {
            halloween = new Date(now.getFullYear() + 1, 9, 31, 0, 0, 0);
        }

        const diff = halloween - now;

        // Time calculations
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        countdownElement.textContent = `${days} days : ${hours} hours : ${minutes} minutes : ${seconds} seconds till Halloween!`;
    }

    // Update every second
    setInterval(updateCountdown, 1000);
    updateCountdown(); // Run immediately so there's no delay
});
