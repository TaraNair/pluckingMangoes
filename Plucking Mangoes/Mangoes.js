class Mangoes{
    constructor(x, y, w, h){
        var options = {
            'isStatic':true,
            'restitution': 0,
            'friction': 1,
        }
        this.image = loadImage("mango.png");  

        this.width = w;
        this.height = h;
        this.r = 30; 
        this.body = Bodies.circle(x, y, 30, options);        
        World.add(world, this.body);
     }

    display(){
        var pos=this.body.position;
        push();
        fill("green");
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.width, this.height);
        pop();
    }
}