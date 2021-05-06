class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
    
        image(this.sling1,215,25);
        image(this.sling2,190,25);

        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;


            push();
            if(pointA.x < 215){


            
            image(this.sling3,pointA.x - 30, pointA.y - 5, 15,20)


            strokeWeight(4);
            stroke(48,22,8)
            line(pointA.x - 20, pointA.y + 10, pointB.x, pointB.y);
            line(pointA.x - 20, pointA.y + 10, pointB.x - 30, pointB.y);
        }
            else {

                strokeWeight(4);
                stroke(48,22,8)
                line(pointA.x - 20, pointA.y + 10, pointB.x, pointB.y);
                line(pointA.x - 20, pointA.y + 10, pointB.x - 30, pointB.y);
                image(this.sling3,pointA.x + 25, pointA.y - 5, 15,20)
            }
            pop();
        }


    }
    
}