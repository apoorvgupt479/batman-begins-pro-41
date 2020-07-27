class Umbrella{
    constructor(){
        var options = {
            restituiton: 0.5,
            friction: 0,
            density: 1.2,
            isStatic: true
        }

        this.x = 200;
        this.y = 610;

        this.img = loadImage("image/umbrella.png");

        this.body = Bodies.circle(this.x, this.y , 80, options);
        this.radius = 80;
        World.add(world, this.body);
    }
    display(){
        push();
        fill("white");
        ellipseMode(CENTER);
        image(this.img, this.x-100, this.y-100);
        //circle(this.x , this.y , this.radius * 2);
    }
}