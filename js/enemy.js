class Enemy extends GameObject {
    constructor(x, y, health, damage, imgs, animationtime, speed, flashingimg) {
        super(x, y, 70, 25);
        this.health = health;
        this.damage = damage;
        this.color = "red";
        this.speed = speed;
        this.stroke = "black";
        this.strokeWeight = 2;
        this.value = 0;
        this.animationimgs = imgs;
        this.animationframe = 0;
        this.timetilnextanimationchange = animationtime;
        this.timebetweenanimations = this.timetilnextanimationchange;
        this.flashingimg = flashingimg;
        this.damagedframesleft = 0;
    }
    draw(x, y) {
        this.damagedframesleft--;
        this.timetilnextanimationchange--;
        if (this.timetilnextanimationchange < 1) {
            this.animationframe++;
            if (this.animationframe > this.animationimgs.length - 1) {
                this.animationframe = 0;
            }
            this.timetilnextanimationchange = this.timebetweenanimations;
        }
        imageMode(CENTER);
        if (this.damagedframesleft > 0) {
            image(this.flashingimg, x, y, this.w, this.h);
        } else {
            image(this.animationimgs[this.animationframe], x, y, this.w, this.h);
        }
        imageMode(CORNER);
    }
    move() {
        this.angle = atan2((game.y + player.y) - this.y, (player.x + game.x) - this.x);
        let xspeed = this.speed * cos(this.angle);
        let yspeed = this.speed * sin(this.angle);
        this.x += xspeed;
        this.y += yspeed;
    }
    checkCollisions() {
        if (getDistance(this.x, this.y, player.x + game.x, player.y + game.y) < 30) {
            healthbar.dealDamage(this.damage, this);
        }

    }
}

function getDistance(x1, y1, x2, y2) {
    let y = x2 - x1;
    let x = y2 - y1;

    return Math.sqrt(x * x + y * y);
}