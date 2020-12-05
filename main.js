var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var platek = canvas.getContext('2d');

var x = Math.random() * innerWidth;
var y = 0;

var speedY = 1;

function animate() {
    requestAnimationFrame(animate);
    platek.clearRect(0, 0, innerWidth, innerHeight);
    platek.beginPath();
    platek.arc(x, y, 5, 0, Math.PI * 2, false);
    platek.strokeStyle = 'white';
    platek.fillStyle = 'white';
    platek.fill();
    //platek.stroke();

    y += speedY;
    requestAnimationFrame(animate);
}
animate();

