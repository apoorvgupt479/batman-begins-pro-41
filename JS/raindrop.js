class Raindrop{
    constructor(){
        var options = {
            restituiton: 0,
            friction: Math.random(0,1),
            density: 1.2,
            isStatic: false
        }

        this.x = Math.floor(Math.random() * 380)+10;
        this.body = Bodies.circle(this.x,-20,8,options);
        this.radius = 8;
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        var angle = this.body.angle;

        push()
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        fill('blue');
        ellipse(0, 0, this.radius, this.radius);     
        pop();
    }
}