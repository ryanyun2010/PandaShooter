var player = new Player();
var healthregenticks = 360;
var healthregenticksoriginal = healthregenticks;
var particlesystems = [];
var paused = true;
var backgroundImg;
var start = true;
var time = 3600;
var dead = false;
var currentEnemyID = 1;
var dodgetextframes = 0;
var choosingcharacter = false;
var gamepaused = false;
var winning = false;


function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
var game = new Game(1000, 700, 3000, 3000);
var guns;
var healthbar = new HealthBar(10);
var enemies = [];
var batImgs = [];
var tankImgs = [];
var heartimg;
var healthregenimg;
var damageimg;
var attackspeedimg;
var speedimg;
var bulletspeedimg;
var magnetimg;
var playerimgs = [];
var pistolimg;
var shotgunimg;
var smgimg;
var bulletimg;
var coins = 0;
var wave = 1;
var wavehealthmulti = 1;
var vigimg;
var coinsimg;
var axethrowerimgs = [];
var axeimg;
var startimg;
var explosionimg;
var lifestealimg;
var dodgeimg;
var armorimg;
var redballimg;
var sprayerimg;
var normalmusic;
var w15bossimg;
var tank2img;
var characters = [];
var characterLookingAt = "N/A";
var knightswordimg;
var charactertype = "N/A";
var assassindaggerimg;
var upgradeimgs = {};
var characterimgs = {};
var bubbleimg;
var deathimg;
var winimg;
var turretimg;
var watergunimg;
var laserrifleimg;

function preload() {
    backgroundImg = loadImage("img/background.png");
    batImgs.push(loadImage("img/enemies/bat.png"));
    batImgs.push(loadImage("img/enemies/bat2.png"));
    batImgs.push(loadImage("img/enemies/bat3.png"));
    batImgs.push(loadImage("img/enemies/bat4.png"));
    batImgs.push(loadImage("img/enemies/bat5.png"));
    batImgs.push(loadImage("img/enemies/bat6.png"));

    tankImgs.push(loadImage("img/enemies/tank.png"));
    tankImgs.push(loadImage("img/enemies/tank2.png"));
    tankImgs.push(loadImage("img/enemies/tank3.png"));
    tankImgs.push(loadImage("img/enemies/tank4.png"));
    playerimgs.push(loadImage("img/panda.png"))
    playerimgs.push(loadImage("img/panda.png"))
    playerimgs.push(loadImage("img/panda.png"))
    playerimgs.push(loadImage("img/panda.png"))
    playerimgs.push(loadImage("img/panda.png"))
    axethrowerimgs.push(loadImage("img/enemies/axethrower.png"));
    axethrowerimgs.push(loadImage("img/enemies/axethrower2.png"));
    axethrowerimgs.push(loadImage("img/enemies/axethrower3.png"));
    axethrowerimgs.push(loadImage("img/enemies/axethrower4.png"));
    heartimg = loadImage("img/heart.png");
    healthregenimg = loadImage("img/healthregen.png");
    damageimg = loadImage("img/damage.png");
    attackspeedimg = loadImage("img/attackspeed.png");
    speedimg = loadImage("img/speed.png");
    bulletspeedimg = loadImage("img/bulletspeed.png")
    magnetimg = loadImage("img/magnet.png");
    shotgunimg = loadImage("img/shotgun.png");
    smgimg = loadImage("img/smg.png");
    pistolimg = loadImage("img/pistol.png");
    bulletimg = loadImage("img/bullet.png");
    vigimg = loadImage("img/vig.png");
    coinsimg = loadImage("img/coins.png");
    axeimg = loadImage("img/axe.png");
    startimg = loadImage("img/start.png");
    explosionimg = loadImage("img/explosion.png");
    lifestealimg = loadImage("img/lifesteal.png");
    dodgeimg = loadImage("img/dodge.png");
    armorimg = loadImage("img/armor.png");
    redballimg = loadImage("img/redball.png");
    sprayerimg = loadImage("img/enemies/sprayer.png");
    normalmusic = loadSound("sound/PandaShooter.wav");
    flameimg = loadImage("img/flame.png");
    w15bossimg = loadImage("img/enemies/wave15boss.png");
    tank2img = loadImage("img/enemies/tankv2.png");
    knightswordimg = loadImage("img/knightsword.png");
    assassindaggerimg = loadImage("img/dagger.png");
    deathimg = loadImage("img/death.png");
    winimg = loadImage("img/win.png");
    watergunimg = loadImage("img/watergun.png");
    laserrifleimg = loadImage("img/laserrifle.png");

    tank3img = loadImage("img/enemies/tankv3.png");
    sprayer2img = loadImage("img/enemies/sprayerv2.png");
    w20bossimg = loadImage("img/enemies/wave20boss.png");
    turretimg = loadImage("img/turret.png");

    batFlashingImg = loadImage("img/enemies/flashing/bat.png");
    tankFlashingImg = loadImage("img/enemies/flashing/tank.png");
    tank2FlashingImg = loadImage("img/enemies/flashing/tankv2.png");
    tank3FlashingImg = loadImage("img/enemies/flashing/tankv3.png");
    w15bossFlashingImg = loadImage("img/enemies/flashing/wave15boss.png");
    axethrowerFlashingImg = loadImage("img/enemies/flashing/axethrower.png");
    sprayerFlashingImg = loadImage("img/enemies/flashing/sprayer.png");
    sprayer2FlashingImg = loadImage("img/enemies/flashing/sprayerv2.png");
    w20bossFlashingImg = loadImage("img/enemies/flashing/wave20boss.png");
    characterimgs.assassin = loadImage("img/assassin.png");
    characterimgs.bulletrain = loadImage("img/bulletrain.png");
    characterimgs.pyromancer = loadImage("img/pyromancer.png");
    characterimgs.sniper = loadImage("img/sniper.png");
    characterimgs.rich = loadImage("img/rich.png");
    characterimgs.knight = loadImage("img/knight.png");
    characterimgs.growth = loadImage("img/growth.png");
    characterimgs.multi = loadImage("img/multi.png");
    upgradeimgs.chestplate = loadImage("img/upgrades/chestplate.png");
    upgradeimgs.fastershots = loadImage("img/upgrades/fastershots.png");
    bubbleimg = loadImage("img/bubble.png");
    setupUpgrades();

}
var damagetaken = 0;
var coinscollected = 0;
var enemieskilled = 0;
var upgradetimes = 0;

function setup() {
    guns = [new Pistol(0)];
    characters.push(new Character("Default", "a normal panda", function() {}, playerimgs[0]));
    characters.push(new Character("Assassin", "Assassin, starts with a dagger, +50% movement speed, +150% damage, -50% armor, -5 health", function() {
        guns = [new AssassinDagger(0)];
        playerStats.movementspeed = 1.5;
        playerStats.damage = 2.5;
        playerStats.armor = 0.5;
        healthbar.maxhealth = 5;
        healthbar.currenthealth = 5;
        charactertype = "assassin";
    }, characterimgs.assassin));
    characters.push(new Character("Bullet Rain", "an panda that really likes bullets, start with an SMG, +75% SMG attack speed, -50% damage, -2 health", function() {
        guns = [new SMG(0)];
        playerStats.smgattackspeed = 1.75;
        playerStats.damage = 0.5;
        healthbar.currenthealth = 8;
        healthbar.maxhealth = 8;
    }, characterimgs.bulletrain));
    characters.push(new Character("Pyromancer", "an panda that really likes fire, starts with a flame thrower, +50% flamethrower damage,  -40% attack speed, -30% armor, no base health regeneration", function() {
        guns = [new Flamethrower(0)];
        playerStats.attackdelay = 0.6;
        playerStats.flamethrowerdamage = 1.5;
        playerStats.armor = 0.7;
        playerStats.regeneration = 0;
    }, characterimgs.pyromancer));
    characters.push(new Character("Sniper", "a high precision sniper panda, starts with a pistol, -100% attack speed, +150% damage, +100% bullet speed", function() {
        guns = [new Pistol(0)];
        playerStats.attackdelay = 0.5;
        playerStats.damage = 2.5;
        playerStats.bulletspeed = 2;
    }, characterimgs.sniper));
    characters.push(new Character("Rich Panda", "rich and lazy, starts with 100 coins, 2x coin gain, starts with a pistol, 3 guns max, -20% attack speed", function() {
        guns = [new Pistol(0)];
        playerStats.coinmulti = 2;
        coins = 100;
        playerStats.attackdelay = 0.8;
        playerStats.maxguns = 3;
    }, characterimgs.rich));
    characters.push(new Character("Knight", "heavily armored panda, starts with a sword, -20% movement speed, +100% armor, -100% dodge, -50% attack speed, +10% damage", function() {
        guns = [new KnightSword(0)];
        playerStats.armor = 2;
        playerStats.dodge = -1;
        playerStats.attackdelay = 0.5;
        playerStats.damage = 1.1;
        playerStats.movementspeed = 0.8;
        charactertype = "knight";
    }, characterimgs.knight));
    characters.push(new Character("Poor Panda", "Poor but Strong, starts with a shotgun, +10% armor, +10% dodge, +10% damage, +10% attack speed, +3 health, 25% less coins", function() {
        guns = [new Shotgun(0)];
        playerStats.armor = 1.1;
        playerStats.dodge = 0.1;
        playerStats.attackdelay = 1.1;
        playerStats.damage = 1.1;
        healthbar.currenthealth = 13;
        healthbar.maxhealth = 13;
        playerStats.coinmulti = 0.75;
    }));
    characters.push(new Character("Growth", "has a 'Growth Mindset', starts with a pistol, -20% armor, -20% damage, -20% attackspeed, -2 health, 20% less coins, 4 max guns, but at the end of every wave gain +3% armor, +3% damage, +3% attackspeed, +2% coin gain, furthermore at the end of every 5th wave gain 1 max gun and 2 health", function() {

        guns = [new Pistol(0)];
        playerStats.armor = 0.8;
        playerStats.damage = 0.8;
        playerStats.attackdelay = 0.8;
        healthbar.currenthealth = 8;
        healthbar.maxhealth = 8;
        playerStats.coinmulti = 0.8;
        playerStats.maxguns = 4;
        charactertype = "growth";
    }, characterimgs.growth));
    characters.push(new Character("Multitasker", "lot of hands, starts with a shotgun, 12 max guns, -4% damage per gun", function() {
        guns = [new Shotgun(0)];
        playerStats.maxguns = 12;
        playerStats.damage = 0.96;
        charactertype = "multitasker"
    }, characterimgs.multi));
    characters.push(new Character("Entrepreneur", "really likes money, starts with a pistol, -20% coin gain, -20% armor, -20% damage, -20% attackspeed, -2 health, -20% dodge, for every upgrade purchased +1% coin gain, +1% armor, +1% damage, +1% attackspeed, +0.25 health, +1% dodge", function() {
        guns = [new Pistol(0)];
        playerStats.coinmulti = 0.8;
        playerStats.armor = 0.8;
        playerStats.damage = 0.8;
        playerStats.attackdelay = 0.8;
        healthbar.currenthealth = 8;
        healthbar.maxhealth = 8;
        playerStats.dodge = -0.2;
        charactertype = "entrepreneur"
    }, characterimgs.rich));
    characters.push(new Character("Swimmer", "really likes water, starts with a Water-Gun, -20% armor, -50% damage, Water Gun Puddles stay for 100% longer, -30% attackspeed, -3 health", function() {
        guns = [new WaterGun(0)];
        playerStats.armor -= 0.2;
        playerStats.damage -= 0.5;
        playerStats.attackdelay -= 0.3;
        healthbar.currenthealth = 7;
        healthbar.maxhealth = 7;
        charactertype = "swimmer"
    }, bubbleimg));
    var temp = document.createElement("div");
    temp.style.position = "absolute";
    temp.style.width = "1040px";
    temp.style.height = "740px";
    temp.style.background = "black";
    temp.style.zIndex = "-100";
    temp.style.borderRadius = "39px";
    temp.style.left = ((window.innerWidth - 1000) / 2) - 60 + "px";
    temp.style.top = ((window.innerHeight - 700) / 2) - 60 + "px";
    temp.setAttribute("id", "borderobject");
    document.body.appendChild(temp);
    createCanvas(1000, 700);

    for (var enemy of enemies) {
        game.data.push(enemy);
    }

}

function draw() {
    document.getElementById("defaultCanvas0").style.position = "absolute";
    document.getElementById("defaultCanvas0").style.display = "block";
    document.getElementById("defaultCanvas0").style.left = ((window.innerWidth - 1000) / 2) - 40 + "px";
    document.getElementById("defaultCanvas0").style.top = ((window.innerHeight - 700) / 2) - 40 + "px";
    // document.getElementById("defaultCanvas0").style.border = "20px solid black";
    document.getElementById("defaultCanvas0").style.borderRadius = "30px";

    document.getElementById("borderobject").style.left = ((window.innerWidth - 1000) / 2) - 60 + "px";
    document.getElementById("borderobject").style.top = ((window.innerHeight - 700) / 2) - 60 + "px";

    document.body.style.background = "#303030";

    for (var p of game.data) {
        if (p instanceof Projectile || p instanceof BombProjectile || p instanceof EnemyProjectile || p instanceof WaterGunProjectile || p instanceof BombEffect || p instanceof WaterEffect || p instanceof TurretProjectile) {
            if (p.x < game.x || p.y < game.y || p.x > game.x + game.sw || p.y > game.y + game.sh) {
                game.data.splice(game.data.indexOf(p), 1);
            }
        }
    }
    if (dead) {
        rectMode(CORNER);
        image(backgroundImg, -game.x, -game.y, 6000, 6000);
        fill(0, 0, 0, 100);
        rect(0, 0, 1000, 700);
        fill(30);
        rect(300, 100, 400, 500, 50, 50, 50, 50);
        fill("white");
        textAlign(CENTER);
        textSize(50);
        textStyle(BOLD);
        if (winning) {
            image(winimg, 0, 0, 1000, 700);
        } else {
            image(deathimg, 0, 0, 1000, 700);
        }
        textStyle(NORMAL);
        textSize(20);
        textAlign(LEFT);
        if (!winning) {
            text("You survived until", 340, 250);
            text("Wave " + wave, 580, 250);
            text("You survived for", 340, 280);
            text(timeToText(3600 - time + (wave - 1) * 3600), 580, 280);
        }
        text("You took", 340, 310);
        text(damagetaken + " damage", 580, 310);
        text("You collected", 340, 340);
        text(Math.floor(coinscollected) + " coins", 580, 340);
        text("You killed", 340, 370);
        text(enemieskilled + " enemies", 580, 370);
        text("You bought", 340, 400);
        text(upgradetimes + " things", 580, 400);
        return;
    }
    dodgetextframes--;
    if (!paused) {

        if (healthbar.currenthealth < 1) {
            death();
        }
        time--;
        spawnEnemies();
        healthregenticks--;
        if (healthregenticks < 1) {
            if (playerStats.regeneration < 0) {
                healthbar.currenthealth -= 1;
            } else {
                if (healthbar.currenthealth + 1 <= healthbar.maxhealth) {
                    healthbar.currenthealth += 1;
                }
            }
            if (playerStats.regeneration < 0) {
                healthregenticks = -1 * (healthregenticksoriginal / playerStats.regeneration);
            } else {
                healthregenticks = healthregenticksoriginal / playerStats.regeneration;
            }
        }
        image(backgroundImg, -game.x, -game.y, 6000, 6000);
        player.update();
        game.draw();
        for (var enemy of enemies) {
            enemy.move();
            enemy.checkCollisions();
        }
        for (var gun of guns) {
            gun.draw();
        }
        for (var dp of game.data) {
            if (dp instanceof Collectable) {
                dp.move();
            }
            if (dp instanceof EnemyProjectile) {
                dp.update();
            }
        }
        if (upgrading) {
            for (var i = 0; i < 4; i++) {
                upgradechoices[i].draw(i);
            }
        }
        for (var system of particlesystems) {
            system.update();
        }

        image(vigimg, 0, 0, 1000, 700);
        healthbar.draw();
        if (dodgetextframes > 0) {
            fill("white");
            stroke("white");
            strokeWeight(1);
            textSize(26);
            textStyle(BOLD);
            text("DODGE", player.x + 30, player.y - 20);
        }
        fill(30);
        noStroke();
        rect(850, 10, 130, 40, 20, 20, 20, 20);
        fill("white");
        textSize(25);
        textAlign(CENTER);
        text("PAUSE", 850, 15, 130);

    } else {
        if (!start) {
            image(backgroundImg, -game.x, -game.y, 6000, 6000);
            player.draw();
            game.draw();
            for (var gun of guns) {
                gun.draw();
            }
            if (upgrading) {
                noStroke();
                rectMode(CORNER)
                fill(0, 0, 0, 100);
                rect(0, 0, 1000, 700);
                rectMode(CENTER);
            }
            if (!gamepaused) {
                healthbar.draw();
            } else {
                fill(30, 30, 30, 200);
                rect(0, 0, 1000, 700);
                fill("white");
                textSize(60);
                textAlign(CENTER);
                text("GAME PAUSED", 50, 150, 900);
                textSize(50);
                text("ON WAVE " + wave, 50, 250, 900);
                text(timeToText(time) + " LEFT IN WAVE", 50, 330, 900);
                rectMode(CORNER);
                rect(400, 400, 200, 50, 20, 20, 20);
                fill("black")
                textSize(30);
                text("Resume", 400, 406, 200)

                return;
            }
        }
        if (upgrading) {
            for (var i = 0; i < 4; i++) {
                upgradechoices[i].draw(i);
            }
            fill(30);
            noStroke();
            rect(100, 450, 800, 240);
            fill("white");
            image(heartimg, 140, 480, 30, 30);
            textStyle(NORMAL);
            textSize(15);
            textAlign(LEFT);
            text("Health: " + healthbar.currenthealth + " / " + healthbar.maxhealth, 200, 500);
            image(healthregenimg, 140, 520, 30, 30);
            if (playerStats.regeneration > 0) {
                text("Health Regeneration: 1 / " + 6 / playerStats.regeneration + "s", 200, 540);
            } else if (playerStats.regeneration == 0) {
                text("Health Regeneration: 0 / Infinity s", 200, 540);
            } else {
                text("Health Regeneration: -1 / " + -6 / playerStats.regeneration + "s", 200, 540);
            }
            image(damageimg, 140, 560, 20, 20);
            text("Damage Multiplier: " + Math.floor(((playerStats.damage) * 100)) + "%", 200, 575);
            image(attackspeedimg, 140, 590, 20, 20);
            text("Attack Speed Multiplier: " + Math.floor(((playerStats.attackdelay) * 100)) + "%", 200, 605);
            image(speedimg, 140, 620, 40, 20);
            text("Movement Speed Multiplier: " + Math.floor(((playerStats.movementspeed) * 100)) + "%", 200, 635);
            image(armorimg, 140, 648, 20, 20);
            text("Armor %: " + Math.floor(((playerStats.armor) * 100)) + "%", 200, 665);
            textSize(20);
            image(bulletspeedimg, 530, 480, 30, 30);
            text("Bullet Speed Multiplier: " + Math.floor(((playerStats.bulletspeed) * 100)) + "%", 580, 500);
            image(magnetimg, 530, 520, 30, 30);
            text("EXP Magnet Range Multiplier: " + Math.floor(((playerStats.expmagnet) * 100)) + "%", 580, 540);
            image(explosionimg, 530, 560, 30, 30);
            text("Explosion Range Multiplier: " + Math.floor(((playerStats.explosionrange) * 100)) + "%", 580, 580);
            image(lifestealimg, 530, 600, 30, 30);
            text("Lifesteal %: " + Math.floor(((playerStats.lifesteal) * 100)) + "%", 580, 620);
            image(dodgeimg, 530, 640, 30, 30);
            text("Dodge Chance: " + Math.floor(((playerStats.dodge) * 100)) + "%", 580, 660);
            fill(30);
            if (mouseX > 150 && mouseX < 300 && mouseY > 100 && mouseY < 160) {
                fill(220);
            }
            rect(150, 100, 150, 60, 20, 20, 20, 20);
            fill(30);
            if (mouseX > 750 && mouseX < 900 && mouseY > 100 && mouseY < 160) {
                fill(220);
            }
            rect(750, 100, 150, 60, 20, 20, 20, 20);
            textStyle(BOLD);
            textSize(25);
            textAlign(CENTER);
            fill("white");
            if (mouseX > 750 && mouseX < 900 && mouseY > 100 && mouseY < 160) {
                fill(30);
            }
            text("Start Wave", 750, 115, 150);
            fill("white");
            if (mouseX > 150 && mouseX < 300 && mouseY > 100 && mouseY < 160) {
                fill(30);
            }
            text("Reroll: 20", 150, 115, 150);
            healthbar.currenthealth = healthbar.maxhealth;
            if (playerStats.lifesteal < 0) {
                playerStats.lifesteal = 0;
            }
            if (playerStats.dodge > 0.7) {
                playerStats.dodge = 0.7;
            }
        }
        if (start) {
            imageMode(CORNER);
            image(startimg, 0, 0, 1000, 700);
            return;
        }
        if (choosingcharacter) {
            imageMode(CORNER);
            image(backgroundImg, 0, 0, 1000, 700);
            fill(30);
            rectMode(CORNER);
            rect(200, 100, 600, 300);
            rect(100, 450, 800, 214);
            for (var character of characters) {
                character.draw();
            }
            if (characterLookingAt != "N/A") {
                characterLookingAt.drawFull();
            }
            fill(30);
            rect(800, 30, 140, 50);
            textSize(25);
            textAlign(CENTER);
            fill("white");
            textStyle(BOLD);
            text("Start", 800, 40, 140);
            return;
        }
    }
    textAlign(CENTER);
    fill("white");
    noStroke();
    textStyle(BOLD);
    textSize(45)
    text("Wave " + wave, 0, 10, 1000);
    textSize(60);
    text(timeToText(this.time), 0, 60, 1000);
    textSize(40);
    textAlign(LEFT);
    imageMode(CORNER);
    image(coinsimg, 20, 50, 40, 40);
    text(Math.floor(coins), 75, 48, 1000);
    if (time < 1) {

        paused = true;
        if (wave == 20) {
            dead = true;
            winning = true;
            return;
        }
        if (charactertype == "growth") {
            playerStats.armor += 0.03;
            playerStats.damage += 0.03;
            playerStats.attackdelay += 0.03;
            playerStats.coinmulti += 0.02;
            if (wave % 5 == 0) {
                playerStats.maxguns += 1;
                healthbar.maxhealth += 2;
            }
        }
        game.data = [];
        enemies = [];
        healthbar.currenthealth = healthbar.maxhealth;
        upgrades();
        time = 3600;
        upgrading = true;
    }
}


function timeToText(time) {
    seconds = time / 60;
    mins = seconds / 60;
    hours = mins / 60;
    mins = mins % 60;
    seconds = seconds % 60;
    if (Math.floor(mins) < 1) {
        return Math.floor(seconds) + "s";
    }
    if (Math.floor(hours) < 1) {
        return Math.floor(mins) + "m " + Math.floor(seconds) + "s";
    }
    return Math.floor(hours) + "h " + Math.floor(mins) + "m " + Math.floor(seconds) + "s";
}

function mousePressed() {
    if (upgrading) {
        for (var i = 0; i < 4; i++) {
            if (upgradechoices[i].checkClick(i)) {
                upgradechoices[i].choose();
            }
        }
        if (mouseX > 750 && mouseX < 900 && mouseY > 100 && mouseY < 160) {
            if (!normalmusic.isPlaying()) {
                normalmusic.play();
            }
            upgrading = false;
            paused = false;

        }
        if (mouseX > 150 && mouseX < 300 && mouseY > 100 && mouseY < 160) {
            if (coins >= 20) {
                coins -= 20;
                rerollupgrades();
            }

        }
    }
    if (start) {
        if (mouseX > 350 && mouseX < 650 && mouseY > 520 && mouseY < 620) {

            choosingcharacter = true;
            start = false;

        }
    }
    if (choosingcharacter) {
        for (var character of characters) {
            if (character.checkHover()) {
                characterLookingAt = character;

            }
        }
        if (mouseX > 800 && mouseX < 940 && mouseY > 30 && mouseY < 80 && characterLookingAt != "N/A") {
            choosingcharacter = false;
            paused = false;
            characterLookingAt.choose();
            if (!normalmusic.isPlaying()) {
                normalmusic.play();
            }
        }
    }

    if (!choosingcharacter && !start && !upgrading && !paused) {
        console.log("TEST")
        if (mouseX > 850 && mouseY > 10 && mouseX < 980 && mouseY < 50) {
            paused = true;
            gamepaused = true;
        }
    }
    if (gamepaused) {
        if (mouseX > 400 && mouseX < 600 && mouseY > 400 && mouseY < 450) {
            paused = false;
            gamepaused = false;
        }
    }
}

function death() {
    paused = true;
    dead = true;
    game.data = [];
}
class BombEffect {
    constructor(x, y, range) {
        this.x = x;
        this.y = y;
        this.range = range;
        this.lifespan = 10;
    }

    draw(x, y) {
        this.lifespan--;
        imageMode(CENTER);
        image(explosionimg, x, y, this.range, this.range);
        imageMode(CORNER);
        if (this.lifespan < 1) {
            game.data.splice(game.data.indexOf(this), 1);
        }
    }
}