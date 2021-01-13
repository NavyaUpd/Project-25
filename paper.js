class paper {
    constructor(x, y, radius){
        var paperOptions = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }
        this.body = Bodies.circle(x, y, radius, paperOptions);
        this.radius = radius;
        World.add(world, this.body);
        this.image = loadImage("paper.png");
    }
    display(){
        var pos = this.body.position;
        fill(255);
        //ellipse(pos.x, pos.y, 60, 60);
        image(this.image, pos.x, pos.y, 90, 90);

    }
}
