var playerStats = {
    "attackdelay": 1,
    "damage": 1,
    "expmagnet": 1,
    "movementspeed": 1,
    "bulletspeed": 1,
    "regeneration": 1,
    "exploding": false,
    "explosionrange": 1,
    "lifesteal": 0,
    "truevampire": false,
    "dodge": 0,
    "armor": 1,
    "explodinglifesteal": 0.5,
    "coinmulti": 1,
    "maxguns": 6,
    "smgattackspeed": 1,
    "flamethrowerdamage": 1
}
var knightweapons = [];
var assassinweapons = [];
var gunoptions = [];
var explodingupgrades = [];
var smgupgrades = [];
var pistolupgrades = [];
var vampireupgrades = [];
var upgradeoptions = [];

function setupUpgrades() {
    knightweapons = [
        new Upgrade("Sword", "Advanced Weapon", "green", "A sword of a true knight", knightswordimg, function() {
            guns.push(new KnightSword(guns.length));
        }, 10000, 275)
    ]

    assassinweapons = [
        new Upgrade("Dagger", "Advanced Weapon", "green", "A dagger of an assassin", assassindaggerimg, function() {
            guns.push(new AssassinDagger(guns.length));
        }, 10000, 275)
    ]

    gunoptions = [
        new Upgrade("Pistol", "Basic Gun", "lightgrey", "A Basic Pistol", pistolimg, function() {
            guns.push(new Pistol(guns.length));
            if (charactertype == "multitasker") {
                playerStats.damage -= 0.04;
            }
        }, 10000, 175),
        new Upgrade("Shotgun", "Basic Gun", "lightgrey", "A Basic Shotgun", shotgunimg, function() {
            guns.push(new Shotgun(guns.length));
            if (charactertype == "multitasker") {
                playerStats.damage -= 0.04;
            }
        }, 10000, 250),
        new Upgrade("SMG", "Basic Gun", "lightgrey", "A Basic Machine Gun", smgimg, function() {
            guns.push(new SMG(guns.length));
            if (charactertype == "multitasker") {
                playerStats.damage -= 0.04;
            }
        }, 10000, 300),
        new Upgrade("Flamethr- ower", "Advanced Gun", "green", "A Fire Shooting Device, fire cannot explode", shotgunimg, function() {
            guns.push(new Flamethrower(guns.length));
            if (charactertype == "multitasker") {
                playerStats.damage -= 0.04;
            }
        }, 10000, 350),
    ]
    explodingupgrades = [
        new Upgrade("Better Explosions", "Advanced Upgrade", "green", "20% more explosion range", explosionimg, function() {
            playerStats.explosionrange += 0.2;
        }, 10000, 150, 10),
    ]

    smgupgrades = [
        new Upgrade("Minigun", "Advanced Gun Upgrade", "green", "An upgraded SMG", smgimg, function() {
            var t = "N/A";
            for (var gun of guns) {
                console.log(gun);
                console.log(gun.name == "SMG");
                if (gun.name == "SMG") {
                    t = guns.indexOf(gun);
                }
            }
            if (t != "N/A") {
                guns[t] = new Minigun(t);
            }
        }, 10000, 700)
    ]

    pistolupgrades = [
        new Upgrade("Water-Gun", "Epic Gun Upgrade", "green", "Upgrades your Pistol into a Water Gun that shoots bubbles that pop, leaving puddles that deal damage to those inside", pistolimg, function() {
            var t = "N/A";
            for (var gun of guns) {
                console.log(gun);
                console.log(gun.name == "Pistol");
                if (gun.name == "Pistol") {
                    t = guns.indexOf(gun);
                }
            }
            if (t != "N/A") {
                guns[t] = new WaterGun(t);
            }
        }, 10000, 1000)
    ]


    vampireupgrades = [

        new Upgrade("God of Vampires", "Legendary Upgrade", "orange", "-25% armor +25% Lifesteal but exploding bullets have an tenth of the lifesteal, but -3 Health, -50% health regeneration and -20% damage", lifestealimg, function() {
            playerStats.lifesteal += 0.25;
            playerStats.armor -= 0.25;
            playerStats.maxhealth -= 3;
            playerStats.explodinglifesteal = 0.1;
            if (healthbar.maxhealth < 1) {
                healthbar.maxhealth = 1;
            }
            playerStats.damage -= 0.2;
            playerStats.regeneration -= 0.5;
        }, 1, 500, 2),
        new Upgrade("Armor of a True Vampire", "Legendary Set Upgrade", "orange", "+5% lifesteal, +75% armor, -20% dodge, -20% damage", upgradeimgs.chestplate, function() {
            playerStats.lifesteal += 0.05;
            playerStats.armor += 0.75;
            playerStats.dodge -= 0.2;
            playerStats.damage -= 0.2;
        }, 1, 1000, 1),
        new Upgrade("Heart of a True Vampire", "Legendary Set Upgrade", "orange", "+5% lifesteal, +50 max health, -20% damage, -10% dodge", heartimg, function() {
            healthbar.maxhealth += 50;
            playerStats.lifesteal += 0.05;
            playerStats.damage -= 0.2;
        }, 1, 1000, 1),
        new Upgrade("Weaponry of a True Vampire", "Legendary Set Upgrade", "orange", "+25% lifesteal, +5% armor, -40% damage, -15% dodge", knightswordimg, function() {
            playerStats.lifesteal += 0.25;
            playerStats.armor += 0.05;
            playerStats.damage -= 0.4;
            playerStats.dodge -= 0.15;
        }, 1, 1000, 1),
    ]
    upgradeoptions = [
        new Upgrade("Faster Shots", "Basic Upgrade", "lightgrey", "Upgrade's your gun's attack speed by 8%", upgradeimgs.fastershots, function() {
            playerStats.attackdelay += 0.08;
        }, 10000, 50, 20),
        new Upgrade("Rapid Fire", "Advanced Upgrade", "green", "Upgrade's your gun's attack speed by 13% but 10% less armor", upgradeimgs.fastershots, function() {
            playerStats.attackdelay += 0.13;
            playerStats.armor -= 0.1;
            if (playerStats.armor < 0.01) {
                playerStats.armor = 0.01;
            }
        }, 10000, 75, 14),
        new Upgrade("Light Armor", "Advanced Upgrade", "green", "20% more movement speed but 15% less armor", speedimg, function() {
            playerStats.movementspeed += 0.2;
            playerStats.armor -= 0.15;
            if (playerStats.armor < 0.01) {
                playerStats.armor = 0.01;
            }
        }, 3, 125, 14),
        new Upgrade("Heavy Armor", "Advanced Upgrade", "green", "15% less movement speed but +20% armor", upgradeimgs.chestplate, function() {
            playerStats.movementspeed -= 0.15;
            if (playerStats.movementspeed < 0.01) {
                playerStats.movementspeed = 0.01;
            }
            playerStats.armor += 0.2;
        }, 3, 125, 14),
        new Upgrade("Insane Reflexes", "Advanced Upgrade", "green", "Dodge 5% of incomming attacks", dodgeimg, function() {
            playerStats.dodge += 0.05;
        }, 10, 150, 14),
        new Upgrade("Agility", "Advanced Upgrade", "green", "Dodge 2% of incomming attacks and Increase Movement Speed by 10%", speedimg, function() {
            playerStats.dodge += 0.02;
            playerStats.movementSpeed += 0.1;
        }, 10, 150, 14),
        new Upgrade("Stronger Bullets", "Basic Upgrade", "lightgrey", "Upgrade's your gun's damage by 8%", damageimg, function() {
            playerStats.damage += 0.08;
        }, 10000, 65, 20),
        new Upgrade("EXP Magnet", "Advanced Upgrade", "green", "Increases Drop Pickup Range by 25%", magnetimg, function() {
            playerStats.expmagnet += 0.25;
        }, 10000, 100, 12),
        new Upgrade("Speedy Boots", "Basic Upgrade", "lightgrey", "Increases Movement Speed by 8%", speedimg, function() {
            playerStats.movementspeed += 0.08;
        }, 10000, 60, 20),
        new Upgrade("Exploding Bullets", "Advanced Upgrade", "green", "Bullets have a 25% chance to explode, exploding bullets will only have half the lifesteal", explosionimg, function() {
            playerStats.exploding = true;
        }, 1, 200, 10),
        new Upgrade("Vampiric Bullets", "Advanced Upgrade", "green", "+3% Lifesteal but -10% damage", lifestealimg, function() {
            playerStats.lifesteal += 0.03;
            playerStats.damage -= 0.1;
        }, 10000, 150, 11),
        new Upgrade("True Vampire", "Epic Upgrade", "lightblue", "-25% armor, +15% Lifesteal, but -3 Health and -150% health regen, exploding bullets have a quarter of the lifesteal", lifestealimg, function() {
            playerStats.lifesteal += 0.15;
            playerStats.armor -= 0.25;
            healthbar.maxhealth -= 3;
            playerStats.truevampire = true;
            playerStats.explodingvampire = 0.25;
            if (healthbar.maxhealth < 1) {
                healthbar.maxhealth = 1;
            }
            playerStats.regeneration -= 1.5;
            if (healthbar.currenthealth > healthbar.maxhealth) { healthbar.currenthealth = healthbar.maxhealth; }
        }, 1, 350, 5),
        new Upgrade("Obsidian Heart", "Epic Set Upgrade", "lightblue", "-5% lifesteal, but +20 Health and -50% health regen", heartimg, function() {
            playerStats.lifesteal -= 0.05;
            healthbar.maxhealth += 20;
            playerStats.regeneration -= 0.5;
        }, 10000, 450, 3),
        new Upgrade("Obsidian Armor", "Epic Set Upgrade", "lightblue", "-5% lifesteal, but +50% armor and -50% health regen", upgradeimgs.chestplate, function() {
            playerStats.lifesteal -= 0.05;
            playerStats.armor += 0.5;
            playerStats.regeneration -= 0.5;
        }, 10000, 450, 3),
        new Upgrade("Obsidian Weaponry", "Epic Set Upgrade", "lightblue", "-5% lifesteal, but +20% damage and -50% health regen", knightswordimg, function() {
            playerStats.lifesteal -= 0.05;
            playerStats.damage += 0.2;
            playerStats.regeneration -= 0.5;
        }, 10000, 450, 3),
        new Upgrade("Steel Heart", "Advanced Set Upgrade", "green", "-2% lifesteal, but +8 Health and -30% health regen", heartimg, function() {
            playerStats.lifesteal -= 0.02;
            healthbar.maxhealth += 8;
            playerStats.regeneration -= 0.3;
        }, 10000, 250, 10),
        new Upgrade("Steel Armor", "Advanced Set Upgrade", "green", "-2% lifesteal, but +20% armor and -30% health regen", upgradeimgs.chestplate, function() {
            playerStats.lifesteal -= 0.02;
            playerStats.armor += 0.2;
            playerStats.regeneration -= 0.3;
        }, 10000, 250, 10),
        new Upgrade("Steel Weaponry", "Advanced Set Upgrade", "green", "-2% lifesteal, but +15% damage and -30% health regen", knightswordimg, function() {
            playerStats.lifesteal -= 0.02;
            playerStats.damage += 0.15;
            playerStats.regeneration -= 0.3;
        }, 10000, 250, 10),
        new Upgrade("Armor of the Panda Hero", "Legendary Set Upgrade", "orange", "-10% lifesteal, but +80% armor, -10% dodge, and +25% damage", upgradeimgs.chestplate, function() {
            playerStats.lifesteal -= 0.1;
            playerStats.armor += 0.8;
            playerStats.dodge -= 0.1;
            playerStats.damage += 0.25;
        }, 1, 1000, 1),
        new Upgrade("Weapon of the Panda Hero", "Legendary Set Upgrade", "orange", "-10% lifesteal, but +5% armor, -5% dodge, and +60% damage", knightswordimg, function() {
            playerStats.lifesteal -= 0.1;
            playerStats.armor += 0.05;
            playerStats.dodge -= 0.05;
            playerStats.damage += 0.6;
        }, 1, 1000, 1),
        new Upgrade("Heart of the Panda Hero", "Legendary Set Upgrade", "orange", "-10% lifesteal, but +50 health and +8% damage", heartimg, function() {
            playerStats.lifesteal -= 0.1;
            healthbar.maxhealth += 50;
            playerStats.damage += 0.08;
        }, 1, 1000, 1),
        new Upgrade("Speedy Shots", "Basic Upgrade", "lightgrey", "Upgrades your gun's bullet speed by 15%", upgradeimgs.fastershots, function() {
            playerStats.bulletspeed += 0.15;
        }, 10000, 45, 20),
        new Upgrade("Stronger Heart", "Basic Upgrade", "lightgrey", "+2 Health", heartimg, function() {
            healthbar.maxhealth += 2;
        }, 10000, 60, 20),
        new Upgrade("Strong Heart", "Basic Upgrade", "lightgrey", "+1 Health", heartimg, function() {
            healthbar.maxhealth += 1;
        }, 10000, 35, 20),
        new Upgrade("Faster Regeneration", "Basic Upgrade", "lightgrey", "Increases Health Regeneration by 25%", healthregenimg, function() {
            playerStats.regeneration += 0.25;
        }, 10000, 75, 20),
        new Upgrade("Stronger Armor", "Basic Upgrade", "lightgrey", "+5% Armor", upgradeimgs.chestplate, function() {
            playerStats.armor += 0.05;
        }, 10000, 80, 20),
        new Upgrade("Large Shield", "Advanced Upgrade", "green", "+10% Armor, but -7% dodge", armorimg, function() {
            playerStats.armor += 0.1;
            playerStats.dodge -= 0.07;
        }, 10000, 150, 14),
        new Upgrade("Small Shield", "Advanced Upgrade", "green", "+10% Dodge, but -7% armor", armorimg, function() {
            playerStats.dodge += 0.1;
            playerStats.armor -= 0.07;
        }, 10000, 150, 14),
        new Upgrade("Tank", "Epic Upgrade", "lightblue", "-30% Dodge, +20% armor, +5 health, -20% damage", armorimg, function() {
            playerStats.dodge -= 0.3;
            playerStats.armor += 0.2;
            healthbar.maxhealth += 5;
            playerStats.damage -= 0.2;
        }, 10000, 300, 7),
        new Upgrade("Glass Cannon", "Epic Upgrade", "lightblue", "-30% Dodge, -20% armor, -3 health, +35% damage", damageimg, function() {
            playerStats.dodge -= 0.3;
            playerStats.armor -= 0.2;
            healthbar.maxhealth -= 3;
            playerStats.damage += 0.35;
        }, 10000, 300, 7),
        new Upgrade("Steel Shield", "Advanced Set Upgrade", "green", "+7% armor", armorimg, function() {
            playerStats.armor += 0.07;
        }, 10000, 180, 14),
        new Upgrade("Obsidian Shield", "Epic Set Upgrade", "green", "+15% armor", armorimg, function() {
            playerStats.armor += 0.15;
        }, 10000, 300, 5),

    ];
}
var currentupgradechoices = [];
var upgrading = false;

function upgrades() {
    paused = true;
    wave++;
    rerollupgrades();
}


function clone(obj) {
    if (null == obj || "object" != typeof obj) return obj;
    var copy = obj.constructor();
    for (var attr in obj) {
        if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
    }
    return copy;
}

function rerollupgrades() {
    var possibleupgrades = [];

    for (var upgrade of upgradeoptions) {
        if (upgrade.stacksleft > 0) {
            for (var i = 0; i < upgrade.weight; i++) {
                possibleupgrades.push(upgrade);
            }
        }
    }
    if (playerStats.exploding) {
        for (var upgrade of explodingupgrades) {
            if (upgrade.stacksleft > 0) {
                for (var i = 0; i < upgrade.weight; i++) {
                    possibleupgrades.push(upgrade);
                }
            }
        }
    }
    if (playerStats.truevampire) {
        for (var upgrade of vampireupgrades) {
            if (upgrade.stacksleft > 0) {
                for (var i = 0; i < upgrade.weight; i++) {
                    possibleupgrades.push(upgrade);
                }
            }
        }
    }
    var smgowned = false;
    for (var gun of guns) {
        if (gun instanceof SMG) {
            smgowned = true;
        }
    }
    if (smgowned) {
        possibleupgrades.push(smgupgrades[0]);
        possibleupgrades.push(smgupgrades[0]);
        possibleupgrades.push(smgupgrades[0]);
        possibleupgrades.push(smgupgrades[0]);
        possibleupgrades.push(smgupgrades[0]);
        possibleupgrades.push(smgupgrades[0]);
        possibleupgrades.push(smgupgrades[0]);
        possibleupgrades.push(smgupgrades[0]);
        possibleupgrades.push(smgupgrades[0]);
    }
    var pistolowned = false;
    for (var gun of guns) {
        if (gun instanceof Pistol) {
            pistolowned = true;
        }
    }
    if (pistolowned) {
        possibleupgrades.push(pistolupgrades[0]);
        possibleupgrades.push(pistolupgrades[0]);
        possibleupgrades.push(pistolupgrades[0]);
        possibleupgrades.push(pistolupgrades[0]);
        possibleupgrades.push(pistolupgrades[0]);
        possibleupgrades.push(pistolupgrades[0]);
    }
    console.log(possibleupgrades);

    var temp = [];

    temp[1] = possibleupgrades[Math.round(random(0, possibleupgrades.length - 1))];
    temp[2] = possibleupgrades[Math.round(random(0, possibleupgrades.length - 1))];
    temp[3] = possibleupgrades[Math.round(random(0, possibleupgrades.length - 1))];
    if (guns.length < playerStats.maxguns) {
        if (charactertype == "knight") {
            if (Math.random() > 0.5) {
                temp[0] = gunoptions[Math.round(random(0, gunoptions.length - 1))];
            } else {
                temp[0] = knightweapons[Math.round(random(0, knightweapons.length - 1))];
            }
        } else if (charactertype == "assassin") {
            if (Math.random() > 0.5) {
                temp[0] = gunoptions[Math.round(random(0, gunoptions.length - 1))];
            } else {
                temp[0] = assassinweapons[Math.round(random(0, assassinweapons.length - 1))];
            }
        } else {
            temp[0] = gunoptions[Math.round(random(0, gunoptions.length - 1))];
        }

    } else {
        temp[0] = possibleupgrades[Math.round(random(0, possibleupgrades.length - 1))];
    }
    upgrading = true;
    upgradechoices = [];
    for (var t of temp) {
        upgradechoices.push(new Upgrade(t.name, t.type, t.typecolor, t.description, t.img, t.effect, t.stacksleft, t.cost));
    }
}