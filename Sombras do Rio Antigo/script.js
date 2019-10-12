 
 function refreshCanvas(){
        const canvas = document.getElementById('firstCanvas');
        const startButton = document.getElementById('startButton');
    }

    function Playbutton(top, left, width, height, lWidth, fillColor, lineColor) {
        context.beginPath();
        context.rect(250, 350, 200, 100); 
        context.fillStyle = '#FFFFFF'; 
        context.fillStyle = 'rgba(225,225,225,0.5)';
        context.fillRect(25,72,32,32);
        context.fill(); 
        context.lineWidth = 2;
        context.strokeStyle = '#000000'; 
        context.stroke();
        context.closePath();
        context.font = '40pt Kremlin Pro Web';
        context.fillStyle = '#000000';
        context.fillText('Start', 345, 415);
      }