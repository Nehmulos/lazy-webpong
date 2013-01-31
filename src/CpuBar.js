function CpuBar(ball, playerBar) {
    CpuBar.superclass.constructor.call(this);
    this.ball = ball;
    this.playerBar = playerBar;
}

CpuBar.inherit(Bar, {
    update: function(dt) {
        CpuBar.superclass.update.call(this, dt);
        
        if (this.ball.position.y > this.position.y) {
            this.moveUp();
        }
        if (this.ball.position.y < this.position.y) {
            this.moveDown();
        }
    }
});
