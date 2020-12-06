var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var platek = canvas.getContext('2d');

var platkiSniegu = [];

function Platek(x, y, radius, speedY, speedX, transparency) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.speedY = speedY;
    this.speedX = speedX;
    this.startX = x;
    this.transparency = transparency;

    this.draw = function() {
        if(this.y>innerHeight)
        {
          platkiSniegu.splice(platkiSniegu.indexOf(this), 1);
        }
        else
        {
        platek.beginPath();
        platek.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        platek.strokeStyle = 'white';
        platek.fillStyle = `rgba(255, 255, 255, ${this.transparency})`;
        platek.fill();
        }
    }
    this.update = function() {
        this.y += this.speedY;
        this.x += this.speedX;
        this.draw();    
    }
}
NowePlatki();
function NowePlatki(){
    for(let i=0; i<3; i++)
    {
        var x = Math.random() * innerWidth;
        var y = -5;
        var radius = Math.random() * 7;
        var speedY = (Math.random() * 3) + 1;
        var speedX = (Math.random() - 0.5) * 2;
        var transparency = Math.random() + 0.5;
        platkiSniegu.push(new Platek(x, y, radius, speedY, speedX, transparency));
    }
    requestAnimationFrame(NowePlatki);
}
animate();

function animate() {
    requestAnimationFrame(animate);
    platek.clearRect(0, 0, innerWidth, innerHeight);
    
    for(var p of platkiSniegu)
    {
        p.update();
    }
}