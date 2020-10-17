class Rope {
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        var options={
            length:150,
            bodyA:body1,
            bodyB:body2,
            stiffness:0.8,
            pointB:{x:this.offsetX,y:this.offsetY}
            
            

        }
        this.rope=Constraint.create(options);
        World.add(world,this.rope);
        
    }
    display(){
        var bodyA=this.rope.bodyA.position;
        var bodyB=this.rope.bodyB.position;

        strokeWeight(2);

        var anchor1X=bodyA.x;
        var anchor1Y=bodyA.y; 

        var anchor2Y=bodyB.y+this.offsetY;
        var anchor2X=bodyB.x+this.offsetX;

        line (anchor1X,anchor1Y,anchor2X,anchor2Y);
    }  
    
}