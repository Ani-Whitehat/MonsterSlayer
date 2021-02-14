class arrow{
    constructor(x,y,width,height){
        this.body = Bodies.rectangle(x,y,width,height)
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = loadImage("arrow0.png");
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position;

        imageMode(CENTER);
        image(this.image,pos.x,pos.y,80,40);


    }

}