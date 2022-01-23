function message(text){
    let terminal = document.getElementById("terminal");
    terminal.innerHTML = text;
}

function range(n){
    return [...Array(n).keys()];
}

function enter_ref(dx, dy, sx, sy, a){
    this.save();
    this.translate(dx, dy);
    this.rotate(a);
    this.scale(sx, sy);
}

function leave_ref(){
    this.restore(); 
}

function tracejado(x){
    let y = 5;
    this.fillStyle = "white";
    this.beginPath();
    while(y<this.canvas.height){
        this.moveTo(x,y);
        this.lineTo(x,y+30);
        this.lineTo(x+5,y+30);
        this.lineTo(x+5,y);
        y+=50;
    }
    this.stroke();
    this.fill();
}

function write(model){
    if(model.pause){
        message("Let's Race! <br> START!");
    }

    if (!model.pause){
        message(`Time: ${Math.round(model.time * 0.001)}s ` );
    } 

    let car = model.car;
    this.fillStyle="grey";
    this.fillRect(90, 0,this.canvas.width-100,this.canvas.height);
    this.fillStyle="green";
    this.fillRect(0, 0, 90, this.canvas.height);
    this.fillRect(510, 0, this.canvas.width, this.canvas.height);
    this.fillStyle="white";
    this.fillRect(95,0,5,600);
    this.fillRect(500,0,5,600);
    this.tracejado(200);
    this.tracejado(300);
    this.tracejado(400);
    this.enter_ref(car.x,car.y,car.scale,car.scale,0);
    this.figure1();
    this.leave_ref();
    for(o of model.signaling){
        this.enter_ref(o.x,o.y,o.scale,o.scale,0);
        this.obstacle();
        this.leave_ref();
    }
    if(model.lose){
        this.fillStyle="red";
        this.font="90px arial";
        this.fillText("GAME OVER",25,300);
        this.fillStyle="black";
        this.font="50px arial";
        this.fillText(`Your score is ${Math.round(model.time * 0.001)}`,125,360);
    }
}

function writter(){
    let w = document.getElementById("canvas").getContext("2d");
    w.canvas.width = 600;
    w.canvas.height = 600;
    w.figure1 = figure1;
    w.obstacle = obstacle;
    w.write = write;
    w.tracejado=tracejado;
    w.enter_ref=enter_ref;
    w.leave_ref=leave_ref;
    return w;
}

function updateModel(){
    if(this.pause){
        this.start=performance.now();
        return;
    } 
    if(this.lose) return;
    let car = this.car;
    switch(car.action){
        case 1:
            car.x -= car.vel;
            break;
        case 2:
            car.x += car.vel;
            break;
        default:
            break;
    }

    if(car.x<car.left_limit){
     car.x = car.left_limit;
    }

    if(car.x>car.right_limit){
        car.x = car.right_limit;
    }

    for(k of this.signaling){
        k.y += k.obs_vel;
        if(k.y===250 ){
            this.signaling.push(newObstacle());
        }
        if(k.y>590){
            this.signaling.shift();
        }
        let pb = 60+k.y;
        if(pb>=500) {
          if(Math.abs(car.x-k.x)<55) this.lose = true;
        }
    }
    car.action=0;
}

function newModel(){
    let model={
        time:0,
        start:0,
        lose: false,
        pause: true,
        max_vel: 1,
        num_tracks: 4,
        track1:110,
        track2: 215 ,
        track3:315,
        track4:415,
        car:{
            x: 415,
            y: 490,
            vel: 5,
            x_size: 75,
            y_size: 95,
            scale: 0.4,
            action: 3,
            left_limit:115,
            right_limit:420,
        },
        signaling: range(2).map(i =>newObstacle()),
    }
    model.update = updateModel;
    document.addEventListener("keypress",(e)=>{
        switch(e.key){
            case "a":
                model.car.action = 1;
                model.pause=false;
                break;
            case "A":
                model.car.action = 1;
                model.pause=false;
                break;
            case "d":
                model.car.action = 2;
                model.pause=false;
                break;
            case "D":
                model.car.action = 2;
                model.pause=false;
                break;
            default:
                model.car.action = 0;
                break;
        }
    });
    return model;
}
                        
function newObstacle(){
    let obs = {
        x: Math.ceil(Math.random() * 4)*100+15,
        y: -30,
        obs_vel: 0.5,
        scale: 0.4,
        x_size: 72,
        y_size: 150*0.4,
    }
    return obs;
}

function main(){
    message("OLA");
    let w = writter();
    let model= new newModel();
    let step = (ts) =>{
        model.update();
        if(!model.lose){
            let progress = ts - model.start;
            model.time=progress;
        }
        w.write(model);

        requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
    
}