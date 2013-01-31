function Ball() {
    Ball.superclass.constructor.call(this);
    this.sprite = new cc.Sprite({
        file: "images/ball.png"
    });
    this.addChild(this.sprite);
    this.contentSize = this.sprite.contentSize;
}

Ball.inherit(PhysicsNode, {
    type: "ball",
    minSpeedX: 1.2,

    applyInitialImpulse: function(startTowardsLeftSide) {
        var x = startTowardsLeftSide ? this.minSpeedX : -this.minSpeedX;
        this.body.ApplyImpulse(new b2Vec2(x, randomInRange(2, -2)), 
                               this.body.GetWorldCenter());
    },

    createDefaultPhysics: function(world) {
        this.createPhysics(world, {});
    },
    
    update: function(dt) {
        Ball.superclass.update.call(this, dt);
        
        // don't get to slow
        var speed = this.body.GetLinearVelocity();
        if (Math.abs(speed.x) < this.minSpeedX) {
            if (speed.x > 0) {
                this.body.SetLinearVelocity(new b2Vec2(this.minSpeedX, speed.y));
            } else {
                this.body.SetLinearVelocity(new b2Vec2(this.minSpeedX, speed.y));
            }
        }
    }
});
