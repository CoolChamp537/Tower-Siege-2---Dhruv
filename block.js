class Block{
    constructor(x, y,width,height,options) {
        var options = {
          isStatic: false,
          restitution: 0.8
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.image = loadImage("Squircle.png")
        this.width = width
        this.height = height
        this.Visibility = 255
        World.add(world, this.body,options);
      }
      display(){
       if(this.body.speed < 3){
        var angle = this.body.angle;
        var pos= this.body.position;
        angleMode(RADIANS)
        push();
        translate(pos.x, pos.y);
        rotate(angle)
        rectMode(CENTER)
        rect(0,0,this.width,this.height)
        pop();
       }

      else{
          World.remove(world,this.body)
          this.Visibility = this.Visibility - 5;
          push();
          noStroke()
          fill(40,this.Visibility)
          rect(this.body.position.x,this.body.position.y,this.width,this.height)
          pop()
      }
}
}
