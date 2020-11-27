class Rope{
    constructor(bodyA, bodyB){
        var properties={
            bodyA: bodyA,
            bodyB:bodyB,
            stiffness:.5,
            length:10   
        }
        this.rope=Constraint.create(properties)
        World.add(world, this.rope)
    }

display(){

    line(this.rope.bodyA.position.x,this.rope.bodyA.position.y, this.rope.bodyB.position.x,this.rope.bodyB.position.y)
}

}