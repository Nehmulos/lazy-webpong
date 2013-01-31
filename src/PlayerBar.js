function PlayerBar() {
    PlayerBar.superclass.constructor.call(this);
}

PlayerBar.inherit(Bar, {
    update: function(dt) {
        PlayerBar.superclass.update.call(this, dt);
        
        // w || arrowup
        if (Input.instance.keysDown[87] || Input.instance.keysDown[38]) {
            this.moveUp();
        }
        // s || arrowdown
        if (Input.instance.keysDown[83] || Input.instance.keysDown[40]) {
            this.moveDown();
        }
    }
});
