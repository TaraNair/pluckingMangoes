class Tree{
    constructor(x, y, w, h){
        var options = {
            'isStatic':true,
            'density': 0.02
        }
        this.image = loadImage("tree.png");  

        this.width = w;
        this.height = h;
        this.body = Bodies.rectangle(x, y, w, 10, options);         
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