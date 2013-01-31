function PlayerBar() {
    PlayerBar.superclass.constructor.call(this);
}

PlayerBar.inherit(Bar, {
    update: function(dt) {
        PlayerBar.superclass.update.call(this, dt);
        
        // w
        if (Input.instance.keysDown[87]) {
            this.moveUp();
        }
        // s
        if (Input.instance.keysDown[83]) {
            this.moveDown();
        }
    }
});
