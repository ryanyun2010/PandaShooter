class Player {
    constructor() {
        this.x = 500;
        this.y = 350;
        this.speed = 5;
        this.exprange = 150;
        this.goingLeft = false;
    }
    draw() {
        if (dodgetextframes < 1) {
            push();
            imageMode(CENTER);
            translate(this.x, this.y);
            if (this.goingLeft) {
                scale(-1, 1);
            }
            if ((healthbar.currenthealth / healthbar.maxhealth) > 0.8) {
                image(playerimgs[0], 0, 0, 90, 110);
            } else if ((healthbar.currenthealth / healthbar.maxhealth) > 0.6) {
                image(playerimgs[1], 0, 0, 90, 110);
            } else if ((healthbar.currenthealth / healthbar.maxhealth) > 0.4) {

                image(playerimgs[2], 0, 0, 90, 110);
            } else if ((healthbar.currenthealth / healthbar.maxhealth) > 0.2) {

                image(playerimgs[3], 0, 0, 90, 110);
            } else {

                image(playerimgs[4], 0, 0, 90, 110);
            }
            pop();
        }
    }
    move() {
        if (register[87] || register[38]) {
            game.moveY(-this.speed * playerStats.movementspeed);
        }
        if (register[83] || register[40]) {
            game.moveY(this.speed * playerStats.movementspeed);
        }
        if (register[65] || register[37]) {
            this.goingLeft = true;
            game.moveX(-this.speed * playerStats.movementspeed)
        }
        if (register[68] || register[39]) {
            this.goingLeft = false;
            game.moveX(this.speed * playerStats.movementspeed)
        }
    }
    update() {
        this.draw();
        this.move();
    }
}