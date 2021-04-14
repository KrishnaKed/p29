class polygon{
    constructor(x,y,width,height){
        var options={
			isStatic:false,
            restitution:0.3,
            friction:1,
            density:1	
			}
        this.body = Bodies.rectangle(x, y, width,height, options);
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.image=loadImage("polygon.png");
        World.add(world, this.body);
   }
    
        display(){
            var pos =this.body.position;
            push();
            translate(pos.x, pos.y);
            imageMode(CENTER);
            image(this.image, 0, 0, this.width,this.height);
            pop();
}

}

