function Goal(x, height) {
    Goal.superclass.constructor.call(this);
    this.position = new cc.Point(x, height/2);
    this.contentSize = new cc.Size(5, height);
}

Goal.inherit(PhysicsNode, {
    type: "goal",

    createDefaultPhysics: function(world) {
        this.createPhysics(world, {isSensor: true});
    }
});
