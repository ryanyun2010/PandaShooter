class Turret extends Enemy {
    constructor(x, y) {
        super(x, y, 0, 0.3, "N/A", "N/A", 0, "N/A");
        this.h = 60;
        this.timetilshoot = 20;
    }
    draw(x, y) {
        this.timetilshoot--;
        imageMode(CENTER);
        fill("white");
        image(turretimg, x, y, this.w, this.h);
        imageMode(CORNER);
        if (this.timetilshoot < 1) {
            this.timetilshoot = 20;
            this.shoot();
        }
    }
    move() {

    }
    shoot() {
        var closestEnemy = findClosestEnemyToXY(this.x, this.y)[1];
        if (findClosestEnemyToXY(this.x, this.y)[0] < 300) {
            var angle = atan2((closestEnemy.y) - (this.y), (closestEnemy.x) - (this.x));
            game.data.push(new TurretProjectile(30, this.x, this.y, this.damage, 10, angle));
        }
    }
}

function findClosestEnemyToXY(x, y) {
    var closest = [10000000, 0];
    for (var enemy of enemies) {
        if (getDistance(x, y, enemy.x, enemy.y) < closest[0]) {
            closest = [getDistance(x, y, enemy.x, enemy.y), enemy];
        }
    }
    return closest;
}
class TurretProjectile extends GameObject {
    constructor(lifespan, x, y, damage, speed, angle) {
        super(x, y, 30, 15);
        this.damage = damage;
        this.speed = speed;
        this.angle = angle;
        this.displayangle = 0;
        this.lifespan = lifespan;
    }
    draw(x, y) {
        this.move();
        this.lifespan--;
        if (this.lifespan < 1) {
            game.data.splice(game.data.indexOf(this), 1);
        }
        this.checkCollision();
        imageMode(CENTER);
        push();
        translate(x, y);
        rotate(this.angle + Math.PI);
        image(bulletimg, 0, 0, this.w, this.h);
        pop();
        imageMode(CORNER);
    }
    move() {
        let xspeed = this.speed * cos(this.angle);
        let yspeed = this.speed * sin(this.angle);
        this.x += xspeed;
        this.y += yspeed;
    }
    checkCollision() {
        for (var enemy of enemies) {
            if (getDistance(this.x, this.y, enemy.x, enemy.y) < (this.w * 0.5 + enemy.w * 0.75)) {
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