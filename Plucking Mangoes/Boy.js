class Boy{
    constructor(x, y, w, h){
        var options = {
            'isStatic':true,
        }
        this.image = loadImage("boy.png");  

        this.width = w;
        this.height = h;
        this.body = Bodies.rectangle(x, y, w/2, h/2, options);         
        World.add(world, this.body);
     }

    display(){
        var pos=this.body.position;
        push();
        fill("black");
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.width, this.height);
        pop();
    }
}