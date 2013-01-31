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

    applyInitialImpulse: function(startTowardsLeftSide) {
        var x = startTowardsLeftSide ? 1 : -1;
        this.body.ApplyImpulse(new b2Vec2(x, randomInRange(2, -2)), 
                               this.body.GetWorldCenter());
    },

    createDefaultPhysics: function(world) {
        this.createPhysics(world, {});
    }
});
