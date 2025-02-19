function loadRunScript() {
    let s = document.createElement("script");
    s.src = "../assets/js/vodka-casino.js";
    s.onload = function() {
        executeRun();
    };
    document.body.appendChild(s);
}
document.addEventListener('DOMContentLoaded', () => {
    const zoomableElement = document.getElementById('zoomable');
    let initialScale = 1;
    let initialDistance = 0;

    zoomableElement.addEventListener('touchstart', (event) => {
        if (event.touches.length === 2) {
            const touch1 = event.touches[0];
            const touch2 = event.touches[1];
            initialDistance = Math.hypot(touch1.clientX - touch2.clientX, touch1.clientY - touch2.clientY);
            initialScale = parseFloat(getComputedStyle(zoomableElement).transform.split(',')[3]) || 1;
        }
    });

    zoomableElement.addEventListener('touchmove', (event) => {
        if (event.touches.length === 2) {
            const touch1 = event.touches[0];
            const touch2 = event.touches[1];
            const currentDistance = Math.hypot(touch1.clientX - touch2.clientX, touch1.clientY - touch2.clientY);
            const scale = initialScale * (currentDistance / initialDistance);
            zoomableElement.style.transform = `scale(${scale})`;
        }
    });
});

