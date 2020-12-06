var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var platek = canvas.getContext('2d');

var platkiSniegu = [];

//var x = Math.random() * innerWidth;
//var y = 0;
//var speedY = 1;

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
          platkiSniegu.slice(platkiSniegu.indexOf(this), 1);
        }
        else
        {
        platek.beginPath();
        platek.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        //platek.globalAlpha=transparency;
        platek.strokeStyle = 'white';
        platek.fillStyle = `rgba(255, 255, 255, ${this.transparency})`;
      //  platek.fillStyle = 'white';
        platek.fill();
        }
    }
    this.update = function() {
        //if(this.y > innerHeight)
          //  platkiSniegu.keys.
      //  if(this.x>this.startX+150 || this.x<this.startX-150)
      //      this.speedX = -this.speedX;
        this.y += this.speedY;
        this.x += this.speedX;

        //UsunPlatki(platkiSniegu,this.y)
        //console.log(platkiSniegu.indexOf(this));
        this.draw();    
    }
}
NowePlatki();
function NowePlatki(){
//var platkiSniegu = [];
//for(let i=0; i<1; i++)
//{
    var x = Math.random() * innerWidth;
    var y = -5;
    var radius = Math.random() * 7;
    var speedY = (Math.random() * 3) + 1;
    var speedX = (Math.random() - 0.5) * 2;
    var transparency = Math.random() + 0.5;
    platkiSniegu.push(new Platek(x, y, radius, speedY, speedX, transparency));;
    console.log(platkiSniegu.length);
    //var p = new Platek(x, y, speedY); 
    //animate();
//}
   // console.log(platkiSniegu.length);
   // console.log(typeof(platkiSniegu[1]));
    //nimate();
    requestAnimationFrame(NowePlatki);
}
animate();
function animate() {
    requestAnimationFrame(animate);
    platek.clearRect(0, 0, innerWidth, innerHeight);
    
    for(var p of platkiSniegu)
    {
        p.update();
        
      //  if(p.y>innerHeight)
      //  {
      //      platkiSniegu.slice(platkiSniegu.indexOf(p), 1);
      //  }
     //   console.log(p.y);
    }
    //platek.stroke();

   // y += speedY;
   // requestAnimationFrame(animate);
}
//animate();