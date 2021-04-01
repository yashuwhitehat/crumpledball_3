class Rope {
    constructor(A,B){
      var options = {
          bodyA: A,
          pointB: B,
          stiffness:0.04,
          length:10
      }

      this.pointB = B;
      this.rope= Matter.Constraint.create(options);
       World.add(world,this.rope);
    }

    fly(){
        this.rope.bodyA=null;
    }

    display(){
      if(this.rope.bodyA){ var a = this.rope.bodyA.position;
       var b = this.pointB;

       strokeWeight(2);
       line(a.x,a.y,b.x,b.y);

      }
    }
 }