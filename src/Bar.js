function Bar() {
    Bar.superclass.constructor.call(this);
    this.sprite = new cc.Sprite({
        file: "images/bar.png"
    });
    this.addChild(this.sprite);
    this.contentSize = this.sprite.contentSize;
}

Bar.inherit(PhysicsNode, {
    type: "bar",

    createDefaultPhysics: function(world) {
        this.createPhysics(world, {fixedRotation:true, restitution: 1.1});
    }
});
