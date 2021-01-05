class Polygon {

    constructor(x,y,w,h){
    
        var options={
            isStatic: true
         
           }
    
    this.body = Bodies.rectangle(x,y,w,h,options);
    this.w = w;
    this.h = h;
    this.image = loadImage("polygon.png");
    World.add(world, this.body);
      
    }
        
    display(){
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    imageMode(CENTER);
    image(this.image,0,0,this.w,this.h);
    pop();
    
    
    
    }
    
    
    
    
}
