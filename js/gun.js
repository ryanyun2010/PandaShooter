var enemytoShoot;
class Gun {
    constructor(name, attackdelay, damage, position, speed, img, w, h) {
        this.name = name;
        this.attackdelay = attackdelay;
        this.damage = damage;
        this.position = position;
        this.canAttackIn = 0;
        this.angle = 0;
        this.speed = speed;
        this.img = img;
        this.w = w;
        this.h = h;
    }
    draw() {
        this.canAttackIn--;
        if (this.position == 0) {

            this.x = player.x + 40;
            this.y = player.y + 10;
        } else if (this.position == 1) {
            this.x = player.x - 40;
            this.y = player.y + 10;
        } else if (this.position == 2) {
            this.x = player.x + 39;
            this.y = player.y - 10;
        } else if (this.position == 3) {
            this.x = player.x - 39;
            this.y = player.y - 10;
        } else if (this.position == 4) {
            this.x = player.x;
            this.y = player.y + 50;
        } else if (this.position == 5) {
            this.x = player.x;
            this.y = player.y - 48;
        }else if (this.position == 6) {

            this.x = player.x + 50;
            this.y = player.y + 10;
        } else if (this.position == 7) {
            this.x = player.x - 59;
            this.y = player.y + 10;
        } else if (this.position == 8) {
            this.x = player.x + 49;
            this.y = player.y - 10;
        } else if (this.position == 9) {
            this.x = player.x - 59;
            this.y = player.y - 10;
        } else if (this.position == 10) {
            this.x = player.x;
            this.y = player.y + 60;
        } else if (this.position == 11) {
            this.x = player.x;
            this.y = player.y - 38;
        }
        //    enemytoShoot = findClosestEnemyToPlayer();
        //    if(enemytoShoot[0]  < 300){
        //    this.angle = atan2((enemytoShoot[1].y) - (this.y + game.y), (enemytoShoot[1].x)- (this.x + game.x));
        if (this.canAttackIn < 1 && !paused) {
            this.shoot();
            this.canAttackIn = this.attackdelay / playerStats.attackdelay;
        }
        //    }
        this.angle = atan2((mouseY) - (this.y), (mouseX) - (this.x));
        push();
        translate(this.x, this.y)
        rotate(this.angle)
        imageMode(CORNER);
        image(this.img, 0, 0, this.w, this.h);
        pop();
    }
    shoot() {
        if (playerStats.exploding && Math.random() < 0.25) {
            game.data.push(new BombProjectile(30, this.speed * playerStats.bulletspeed, this.damage * playerStats.damage, this.x + game.x, this.y + game.y, simplifyAngle(this.angle)));
        } else {
            game.data.push(new Projectile(10, 30, this.speed * playerStats.bulletspeed, this.damage * playerStats.damage, this.x + game.x, this.y + game.y, simplifyAngle(this.angle)));
        }
    }

}

function simplifyAngle(angle) {
    let reduce = angle % (PI * 2);
    if (reduce < 0) {
        return (PI * 2) - abs(reduce);
    } else {
        return reduce;
    }

}

function findClosestEnemyToPlayer() {
    var closest = [10000000, 0];
    for (var enemy of enemies) {
        if (getDistance(player.x + game.x, player.y + game.y, enemy.x, enemy.y) < closest[0]) {
            closest = [getDistance(player.x + game.x, player.y + game.y, enemy.x, enemy.y), enemy];
        }
    }
    return closest;
}