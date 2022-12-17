class EnemyProjectile extends GameObject {
    constructor(lifespan, x, y, damage, speed, angle, img) {
        super(x, y, 30, 30);
        this.damage = damage;
        this.speed = speed;
        this.angle = angle;
        this.lifespan = lifespan;
        this.displayangle = 0;
        this.id = currentEnemyID;
        this.img = img;
        currentEnemyID++;
    }
    draw(x, y) {
        imageMode(CENTER);
        push();
        translate(x, y);
        rotate(this.displayangle);
        this.displayangle += 1;
        image(this.img, 0, 0, this.w, this.h);
        pop();
        imageMode(CORNER);
    }
    move() {
        let xspeed = this.speed * cos(this.angle);
        let yspeed = this.speed * sin(this.angle);
        this.x += xspeed;
        this.y += yspeed;
    }
    update() {
        this.lifespan--;
        if (this.lifespan < 1) {
            game.data.splice(game.data.indexOf(this), 1);
        }
        this.move();
        this.draw();
        this.checkCollision();
    }
    checkCollision() {
        var truex = this.x - game.x;
        var truey = this.y - game.y;
        if (getDistance(truex, truey, player.x, player.y) < 50) {
            healthbar.dealDamage(this.damage, this);
            game.data.splice(game.data.indexOf(this), 1);
        }
    }
}