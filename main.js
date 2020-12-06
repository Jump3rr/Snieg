var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var platek = canvas.getContext('2d');

//var x = Math.random() * innerWidth;
//var y = 0;
//var speedY = 1;

function Platek(x, y, speedY) {
    this.x = x;
    this.y = y;
    this.speedY = speedY;

    this.draw = function() {
        platek.beginPath();
        platek.arc(this.x, this.y, 5, 0, Math.PI * 2, false);
        platek.strokeStyle = 'white';
        platek.fillStyle = 'white';
        platek.fill();


    }
    this.update = function() {
        this.y += this.speedY;

        this.draw();
    }
}


var platkiSniegu = [];
for(let i=0; i<20; i++)
{
    var x = Math.random() * innerWidth;
    var y = 0;
    var speedY = 1;
    platkiSniegu.push(new Platek(x, y, speedY));;
    //var p = new Platek(x, y, speedY); 

}

function animate() {
    requestAnimationFrame(animate);
    platek.clearRect(0, 0, innerWidth, innerHeight);
    
    for(var p of platkiSniegu)
    {
        p.update();
    }
    //platek.stroke();

   // y += speedY;
   // requestAnimationFrame(animate);
}
animate();