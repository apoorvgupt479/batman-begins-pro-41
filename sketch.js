const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground, drop;
var Raindrops = [];
var Thunders = [];
var cloudImg, manImg;
var umbrella, thunder;
var bkimg,bksound;
var t1,t2,t3,t4,t5,t6,t7,t8,t9;
var tArray = [t1,t2,t3,t4,t5,t6,t7,t8,t9];

function preload() {
    cloudImg = loadImage("image/cloud3.png");
    bkimg = loadImage("image/bk.jpg");
    bksound = loadSound("sound/rain.mp3");
    t1 = loadSound("sound/t1.mp3");
    t2 = loadSound("sound/t2.mp3");
    t3 = loadSound("sound/t3.mp3");
    t4 = loadSound("sound/t4.mp3");
	t5 = loadSound("sound/t5.mp3");
	t6 = loadSound("sound/t6.mp3");
    t7 = loadSound("sound/t7.mp3");
    t8 = loadSound("sound/t8.mp3");
	t9 = loadSound("sound/t9.mp3");
}

function setup() {
    createCanvas(400, 800);

    engine = Engine.create();
    world = engine.world;

    bksound.loop();

    ground = new Ground(200, 790, 400, 20);
    umbrella = new Umbrella();

    thunder = new Lightning();

}

function draw() {
    Engine.update(engine);

	
    image(bkimg,0,0,400,800);
    if (frameCount % 1 === 0) {
        drop = new Raindrop();
        Raindrops.push(drop);
    }

   

    for (var j = 0; j < Raindrops.length; j++) {
        if (Raindrops[j] !== null) {
            umbrella.display();
            Raindrops[j].display();
        }
    }


    updatePos();

    

    if(frameCount % 200 === 0){
        thunder = new Lightning();
        Thunders.push(thunder);
    }

    for(var k = 0; k < Thunders.length; k++){
        if(frameCount % 201 === 0){
            Thunders[k].display();
        }
        else if(frameCount % 455 === 0){
            Thunders = [];
			let ch = Math.floor(random()*9);
			switch(ch){
				case 1:
				t1.play();
				t1.stop(3);
				break;
				case 2:
				t2.play();
				t2.stop(3);
				break;
				case 3:
				t3.play();
				t3.stop(3);
				break;
				case 4:
				t4.play();
				t4.stop(3);
				break;
				case 5:
				t5.play();
				t5.stop(3);
				break;
				case 6:
				t6.play();
				t6.stop(3);
				break;
				case 7:
				t7.play();
				t7.stop(3);
				break;
				case 8:
				t8.play();
				t8.stop(3);
				break;
				case 9:
				t9.play();
				t9.stop(3);
				break;
			}
        }
    }
    

    cloudImg.resize(236,98);
    image(cloudImg, -60 ,-25);
    image(cloudImg, 60 ,-25);
    image(cloudImg, 200 ,-25);


    ground.display();
    //umbrella.display();
	
}

function updatePos() {
    for (var i = 0; i < Raindrops.length; i++) {
        if (Raindrops[i] !== null) {
            if (Raindrops[i].body.position.y > 760) {
                Raindrops[i].body.position.y = 830;
                Raindrops.splice(i ,1);
            }
        }
    }
}
