class Pistol extends Gun {
    constructor(position) {
        super("Pistol", 20, 1, position, 20, pistolimg, 40, 19);
    }
}
class Rifle extends Gun {
    constructor(position) {
        super("Rifle", 1, 0.07, position, 20, laserrifleimg, 40, 19);
    }
    shoot() {
        game.data.push(new RifleProjectile(10, 100, this.speed * playerStats.bulletspeed, this.damage * playerStats.damage, this.x + game.x + Math.cos(this.angle) * 50, this.y + game.y + Math.sin(this.angle) * 50, simplifyAngle(this.angle)));
    }
}
class WaterGun extends Gun {
    constructor(position) {
        super("WaterGun", 60, 0.1, position, 20, watergunimg, 40, 19);
    }
    shoot() {
        game.data.push(new WaterGunProjectile(getDistance(this.x, this.y, mouseX, mouseY) / (this.speed * playerStats.bulletspeed), this.speed * playerStats.bulletspeed, this.damage * playerStats.damage, this.x + game.x, this.y + game.y, simplifyAngle(this.angle)));
    }
}
class SMG extends Gun {
    constructor(position) {
        super("SMG", 5 / playerStats.smgattackspeed, 0.35, position, 15, smgimg, 50, 21);
    }
    shoot() {
        if (playerStats.exploding && Math.random() < 0.25) {
            game.data.push(new BombProjectile(30, this.speed * playerStats.bulletspeed, this.damage * playerStats.damage, this.x + game.x, this.y + game.y, simplifyAngle(this.angle) + random(-0.15, 0.15)));
        } else {
            game.data.push(new Projectile(10, 30, this.speed * playerStats.bulletspeed, this.damage * playerStats.damage, this.x + game.x, this.y + game.y, simplifyAngle(this.angle) + random(-0.15, 0.15)));
        }
    }
}
class Minigun extends Gun {
    constructor(position) {
        super("Minigun", 2, 0.25, position, 15, smgimg, 50, 21);
    }
    shoot() {
        if (playerStats.exploding && Math.random() < 0.25) {
            game.data.push(new BombProjectile(30, this.speed * playerStats.bulletspeed, this.damage * playerStats.damage, this.x + game.x, this.y + game.y, simplifyAngle(this.angle) + random(-0.08, 0.08)));
        } else {
            game.data.push(new Projectile(10, 30, this.speed * playerStats.bulletspeed, this.damage * playerStats.damage, this.x + game.x, this.y + game.y, simplifyAngle(this.angle) + random(-0.08, 0.08)));
        }
    }
}
class Shotgun extends Gun {
    constructor(position) {
        super("Shotgun", 30, 0.6, position, 30, shotgunimg, 50, 15);
    }
    shoot() {
        if (playerStats.exploding) {
            if (Math.random() < 0.25) {
                game.data.push(new BombProjectile(8, 25 * playerStats.bulletspeed, this.damage, this.x + game.x, this.y + game.y, simplifyAngle(this.angle + random(0.13, 0.17))));
            } else {
                game.data.push(new Projectile(10, 8, 25 * playerStats.bulletspeed, this.damage, this.x + game.x, this.y + game.y, simplifyAngle(this.angle + random(0.13, 0.17))));
            }
            if (Math.random() < 0.25) {
                game.data.push(new BombProjectile(8, 25 * playerStats.bulletspeed, this.damage, this.x + game.x, this.y + game.y, simplifyAngle(this.angle + random(0.7, 0.12))));
            } else {
                game.data.push(new Projectile(10, 8, 25 * playerStats.bulletspeed, this.damage, this.x + game.x, this.y + game.y, simplifyAngle(this.angle + random(0.7, 0.12))));
            }
            if (Math.random() < 0.25) {
                game.data.push(new BombProjectile(8, 25 * playerStats.bulletspeed, this.damage, this.x + game.x, this.y + game.y, simplifyAngle(this.angle + random(0.02, 0.05))));
            } else {
                game.data.push(new Projectile(10, 8, 25 * playerStats.bulletspeed, this.damage, this.x + game.x, this.y + game.y, simplifyAngle(this.angle + random(0.02, 0.05))));
            }
            if (Math.random() < 0.25) {
                game.data.push(new BombProjectile(8, 25 * playerStats.bulletspeed, this.damage, this.x + game.x, this.y + game.y, simplifyAngle(this.angle + random(-0.25, 0.25))));
            } else {
                game.data.push(new Projectile(10, 8, 25 * playerStats.bulletspeed, this.damage, this.x + game.x, this.y + game.y, simplifyAngle(this.angle + random(-0.25, 0.25))));
            }
            if (Math.random() < 0.25) {
                game.data.push(new BombProjectile(8, 25 * playerStats.bulletspeed, this.damage, this.x + game.x, this.y + game.y, simplifyAngle(this.angle - random(0.02, 0.05))));
            } else {
                game.data.push(new Projectile(10, 8, 25 * playerStats.bulletspeed, this.damage, this.x + game.x, this.y + game.y, simplifyAngle(this.angle - random(0.02, 0.05))));
            }
            if (Math.random() < 0.25) {
                game.data.push(new BombProjectile(8, 25 * playerStats.bulletspeed, this.damage, this.x + game.x, this.y + game.y, simplifyAngle(this.angle - random(0.7, 0.12))));
            } else {
                game.data.push(new Projectile(10, 8, 25 * playerStats.bulletspeed, this.damage, this.x + game.x, this.y + game.y, simplifyAngle(this.angle - random(0.7, 0.12))));
            }

            if (Math.random() < 0.25) {
                game.data.push(new BombProjectile(8, 25 * playerStats.bulletspeed, this.damage, this.x + game.x, this.y + game.y, simplifyAngle(this.angle - random(0.13, 0.17))));
            } else {
                game.data.push(new Projectile(10, 8, 25 * playerStats.bulletspeed, this.damage, this.x + game.x, this.y + game.y, simplifyAngle(this.angle - random(0.13, 0.17))));
            }
        }
        game.data.push(new Projectile(10, 8, 25 * playerStats.bulletspeed, this.damage, this.x + game.x, this.y + game.y, simplifyAngle(this.angle + random(0.13, 0.17))));
        game.data.push(new Projectile(10, 8, 25 * playerStats.bulletspeed, this.damage, this.x + game.x, this.y + game.y, simplifyAngle(this.angle + random(0.7, 0.12))));
        game.data.push(new Projectile(10, 8, 25 * playerStats.bulletspeed, this.damage, this.x + game.x, this.y + game.y, simplifyAngle(this.angle + random(0.02, 0.05))));
        game.data.push(new Projectile(10, 8, 25 * playerStats.bulletspeed, this.damage, this.x + game.x, this.y + game.y, simplifyAngle(this.angle + random(-0.25, 0.25))));
        game.data.push(new Projectile(10, 8, 25 * playerStats.bulletspeed, this.damage, this.x + game.x, this.y + game.y, simplifyAngle(this.angle - random(0.02, 0.05))));
        game.data.push(new Projectile(10, 8, 25 * playerStats.bulletspeed, this.damage, this.x + game.x, this.y + game.y, simplifyAngle(this.angle - random(0.7, 0.12))));
        game.data.push(new Projectile(10, 8, 25 * playerStats.bulletspeed, this.damage, this.x + game.x, this.y + game.y, simplifyAngle(this.angle - random(0.13, 0.17))));
    }
}
class God extends Gun {
    constructor(position) {
        super("God", 1, 1000, position, 30, shotgunimg, 50, 15);
    }
    shoot() {
        for (var i = 0; i < Math.PI * 2; i += 0.1) {
            game.data.push(new Projectile(100, 8000, 50, this.damage, this.x + game.x, this.y + game.y, i));
        }

    }
}

class Flamethrower extends Gun {
    constructor(position) {
        super("Flamethrower", 3 * playerStats.flamethrowerdamage, 0.1, position, 1, shotgunimg, 50, 15);
    }
    shoot() {
        console.log(game.x, game.y);
        game.data.push(new Projectile(30, 8, 6 * playerStats.bulletspeed, this.damage, this.x + game.x + (Math.cos(this.angle) * 60), this.y + game.y + (Math.sin(this.angle) * 60), this.angle - 0.45, flameimg));
        game.data.push(new Projectile(30, 8, 6 * playerStats.bulletspeed, this.damage, this.x + game.x + (Math.cos(this.angle) * 60), this.y + game.y + (Math.sin(this.angle) * 60), this.angle - 0.3, flameimg));
        game.data.push(new Projectile(30, 8, 6 * playerStats.bulletspeed, this.damage, this.x + game.x + (Math.cos(this.angle) * 60), this.y + game.y + (Math.sin(this.angle) * 60), this.angle, flameimg));
        game.data.push(new Projectile(30, 8, 6 * playerStats.bulletspeed, this.damage, this.x + game.x + (Math.cos(this.angle) * 60), this.y + game.y + (Math.sin(this.angle) * 60), this.angle + 0.3, flameimg));
        game.data.push(new Projectile(30, 8, 6 * playerStats.bulletspeed, this.damage, this.x + game.x + (Math.cos(this.angle) * 60), this.y + game.y + (Math.sin(this.angle) * 60), this.angle + 0.45, flameimg));
    }
}
class MeleeWeapon extends Gun {
    constructor(name, attackdelay, damage, position, speed, img, w, h, lifespan) {
        super(name, attackdelay, damage, position, speed, img, w, h);
        this.lifespan = lifespan;
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
        game.data.push(new MeleeWeaponProjectile(this.h * 1.5, this.lifespan, this.speed, this.damage * playerStats.damage, this.x + game.x, this.y + game.y, simplifyAngle(this.angle)));
    }
}
class KnightSword extends MeleeWeapon {
    constructor(position) {
        super("Knight Sword", 1, 0.07, position, 40, knightswordimg, 200, 50, 4);
    }
}
class AssassinDagger extends MeleeWeapon {
    constructor(position) {
        super("Dagger", 1, 0.1, position, 40, assassindaggerimg, 100, 40, 2);
    }
}