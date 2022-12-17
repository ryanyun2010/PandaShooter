class Projectile extends GameObject {
    constructor(size, lifespan, speed, damage, x, y, angle, img) {
        super(x, y, size * 2, size);
        this.damage = damage;
        this.x = x;
        this.y = y;
        this.angle = angle;
        this.speed = speed;
        this.lifespan = lifespan;
        this.img = img || bulletimg;
    }
    draw(x, y) {

        push();
        translate(x, y);
        rotate(this.angle + Math.PI);
        imageMode(CENTER);
        image(this.img, 0, 0, this.w, this.h);
        pop();
    }
    move() {
        let xspeed = this.speed * cos(this.angle);
        let yspeed = this.speed * sin(this.angle);
        this.x += xspeed;
        this.y += yspeed;
        this.lifespan--;
        if (this.lifespan < 1) {
            game.data.splice(game.data.indexOf(this), 1);
        }
        this.checkCollision();
    }
    checkCollision() {
        for (var enemy of enemies) {
            if (getDistance(this.x, this.y, enemy.x, enemy.y) < (this.w * 0.5 + this.speed + enemy.w * 0.75)) {
                enemy.health -= this.damage;
                if (healthbar.currenthealth + this.damage * playerStats.lifesteal < healthbar.maxhealth) {
                    healthbar.currenthealth += this.damage * playerStats.lifesteal;
                } else {
                    healthbar.currenthealth = healthbar.maxhealth;
                }
                enemy.damagedframesleft = 10;
                if (enemy.health <= 0) {
                    enemieskilled++;
                    game.data.push(new Collectable(enemy.x, enemy.y, enemy.value))
                    game.data.splice(game.data.indexOf(enemy), 1)
                    enemies.splice(enemies.indexOf(enemy), 1)
                }
                game.data.splice(game.data.indexOf(this), 1);
                return;
            }
        }
    }
}