function Bar() {
    Bar.superclass.constructor.call(this);
    this.sprite = new cc.Sprite({
        file: "images/bar.png"
    });
    this.addChild(this.sprite);
    this.contentSize = this.sprite.contentSize;
    
    this.topLimit = 0;
    this.bottomLimit = 0;
}

Bar.inherit(PhysicsNode, {
    type: "bar",
    speed: 5,
    // THIS IS STUPID, BUT IT WORKS TRY BINDING key up int he future
    stoppedForMovements: 0, // stopped until n movements were triggered
    
    update: function(dt) {
        Bar.superclass.update.call(this, dt);
        if (!this.canMoveUp() && this.body.GetLinearVelocity().y > 0) {
            this.body.SetLinearVelocity(new b2Vec2(0, 0))
        }
        if (!this.canMoveDown() && this.body.GetLinearVelocity().y < 0) {
            this.body.SetLinearVelocity(new b2Vec2(0, 0))
        }
    },
    
    canMoveUp: function() {
        return this.position.y < this.topLimit;
    },
    
    canMoveDown: function() {
        return this.position.y > this.bottomLimit;
    },

    createDefaultPhysics: function(world) {
        this.createPhysics(world, {fixedRotation:true, restitution: 1.1, isKinematic:true});
    },
    
    moveUp: function() {
        var currentSpeed = this.body.GetLinearVelocity().y;
        if (currentSpeed < this.speed) {
            if (this.stoppedForMovements > 0) {
                --this.stoppedForMovements;
                if (this.stoppedForMovements == 0) {
                    this.body.SetLinearVelocity(new b2Vec2(0, this.speed));
                    this.body.SetAwake(true);
                } else {
                    this.body.SetLinearVelocity(new b2Vec2(0, 0));
                }
                return;
            }
            // oh the horror
            if ((currentSpeed == 0 || currentSpeed+this.speed == 0) && this.stoppedForMovements == 0) {
                this.stoppedForMovements = 5;
                this.body.SetLinearVelocity(new b2Vec2(0, 0));
            }
        }
    },
    
    // lazy copy pasta
    moveDown: function() {
        var currentSpeed = this.body.GetLinearVelocity().y;
        if (currentSpeed > -this.speed) {
            if (this.stoppedForMovements > 0) {
                --this.stoppedForMovements;
                if (this.stoppedForMovements == 0) {
                    this.body.SetLinearVelocity(new b2Vec2(0, -this.speed));
                    this.body.SetAwake(true);
                } else {
                    this.body.SetLinearVelocity(new b2Vec2(0, 0));
                }
                return;
            }
        
            if ((currentSpeed == 0 || currentSpeed - this.speed == 0) && this.stoppedForMovements == 0) {
                this.stoppedForMovements = 5;
                this.body.SetLinearVelocity(new b2Vec2(0, 0));
            }
        }
    }
});
