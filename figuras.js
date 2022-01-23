function figure1(){
    //corpo da bomba
    this.fillStyle="red";
    this.beginPath();
    this.moveTo(1, 55);
    this.lineTo(1, 140);
    this.quadraticCurveTo(0, 150, 5, 150);
    this.lineTo(125, 150);
    this.quadraticCurveTo(130, 150, 130, 140);
    this.lineTo(130, 55);
    this.quadraticCurveTo(130, 50, 125, 50);
    this.lineTo(5, 50);
    this.quadraticCurveTo(0, 50, 1, 55);
    this.moveTo(25, 150);
    this.lineTo(20, 240);
    this.lineTo(110, 240);
    this.lineTo(105, 150);
    this.stroke();
    this.fill();
    //Base da bomba
    this.fillStyle="grey";
    this.beginPath();
    this.moveTo(1, 260);
    this.lineTo(125, 260);
    this.quadraticCurveTo(125, 240, 110, 240);
    this.lineTo(15, 240);
    this.quadraticCurveTo(1, 240, 1, 260);
    this.stroke();
    this.fill();
    //Ecra da bomba
    this.fillStyle="SkyBlue";
    this.beginPath();
    this.moveTo(25, 80);
    this.lineTo(25, 120);
    this.quadraticCurveTo(25, 125, 30, 125);
    this.lineTo(100, 125);
    this.quadraticCurveTo(105, 125, 105, 120);
    this.lineTo(105, 80);
    this.quadraticCurveTo(105, 75, 100, 75);
    this.lineTo(30, 75);
    this.quadraticCurveTo(25, 75, 25, 80);
    this.stroke();
    this.fill();
    this.fillStyle="Blue";
    this.beginPath();
    this.fillRect(40, 90, 30, 10);
    this.fillRect(40, 105, 30, 10);
    this.fillRect(80, 90, 10, 10);
    this.fillRect(80, 105, 10, 10);
    this.stroke();
    this.fill();
    //Mangueira
    this.fillStyle="silver";
    this.beginPath();
    this.moveTo(105, 170);
    this.quadraticCurveTo(140, 170, 130, 200);
    //this.lineTo(139,230);
    this.quadraticCurveTo(120, 250, 145, 250);
    this.quadraticCurveTo(185, 255, 180, 200);
    this.lineTo(180,160);
    this.lineTo(170,160);
    this.lineTo(170,190);
    this.quadraticCurveTo(172, 245, 145, 240);
    this.quadraticCurveTo(135, 230, 140, 200);
    this.quadraticCurveTo(150, 155, 105, 160);
    this.stroke();
    this.fill();
    //boca
    this.fillStyle="grey";
    this.beginPath();
    this.moveTo(185,160);
    this.lineTo(165,160);
    this.quadraticCurveTo(160, 160, 160, 155);
    this.lineTo(160,115);
    this.quadraticCurveTo(160, 110, 165, 110);
    this.lineTo(185,110);
    this.quadraticCurveTo(190, 110, 190, 110);
    this.lineTo(190,155);
    this.quadraticCurveTo(190, 160, 185, 160);
    this.stroke();
    this.fill();
    
    this.fillStyle="silver";
    this.beginPath();
    this.moveTo(160,155);
    this.arcTo(140, 150, 140, 135,20);
    this.arcTo(140, 115, 160, 115,20);
    this.lineTo(160,120);
    this.arcTo(145, 120, 145, 135,15);
    this.arcTo(145, 150, 160, 150,15);
    this.lineTo(160,155)
    this.stroke();
    this.fill();

    this.fillStyle="silver";
    this.beginPath();
    this.moveTo(180,110);
    this.lineTo(175,80);
    this.lineTo(165, 80);
    this.lineTo(170, 110);
    this.stroke();
    this.fill();
}
function obstacle(){
    this.fillStyle="black";
    this.fillRect(0, 0, 180, 20);
    this.fillRect(10, 0, 20, 180);
    this.fillRect(150, 0, 20, 180);
    this.fillRect(10, 80, 140, 20);
    this.fillStyle="yellow";
    this.fillRect(20, 0, 30, 20);
    this.fillRect(130, 0, 30, 20);
    this.fillRect(75, 0, 30, 20);
    this.fillRect(50, 80, 30, 20);
    this.fillRect(100, 80, 30, 20);
    this.fillRect(10, 50, 20, 20);
    this.fillRect(150, 50, 20, 20);
    this.fillRect(10, 110, 20, 20);
    this.fillRect(150, 110, 20, 20);
}