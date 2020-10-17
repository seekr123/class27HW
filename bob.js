class Bob {
    constructor(x, y,r) {
      var options = {
          isStatic:false,
          'restitution':1,
          'friction':0,
          'density':0.2
      }

      this.x=x;
      this.y=y;
      this.r=r;

      this.body = Bodies.circle(x, y, r/2, options);
      

      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;      
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(CENTER);
      strokeWeight(4);
      stroke(0);
      fill('red');
      ellipse(0, 0, this.r, this.r);
      pop();
    }
  };