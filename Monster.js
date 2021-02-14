class Monster{
constructor(x,y,width,height){
    var options= {
        isStatic : false
    }
 this.body = Bodies.rectangle(x,y,width,height,options);
 this.x = x;
 this.y = y;
 this.width = width;
 this.height = height;
 this.image = loadImage("Monster.jpg");
 World.add(world,this.body);
 
}
display(){
    var pos = this.body.position
    
    imageMode(CENTER)
    image(this.image,pos.x,pos.y,50,50);
    
}
}

