class Ground {
    constructor(x,y,width,height) {
        this.ground=Bodies.rectangle(this.x,this.y,this.width,this.height);
        World.add(world,this.ground);
    }
}