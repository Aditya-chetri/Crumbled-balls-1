class Ball{
    constructor(x, y, radius) {
        var options = {
            isStatic: false,
            restitution:0.4,
            friction:0.5,
            density:1.2,
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        fill("blue");
        ellipseMode(CENTER);
        ellipse(pos.x, pos.y, this.radius*2);
    }
};