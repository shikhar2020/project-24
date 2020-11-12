class Ball {
    constructor(x,y,r) {
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2,
        }
        this.x=x;
        this.y=y;
        this.r=r;
        
        this.ball=Bodies.circle(this.x,this.y,this.r/2,options);
        World.add(world,this.ball);
    }
    display() {
        push ();
        translate(this.ball.position.x,this.ball.position.y);
        rectMode(CENTER);
        ellipse(0,0,this.r,this.r);
        pop ();
    }
}