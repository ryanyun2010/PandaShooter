class Upgrade {
    constructor(name, type, typecolor, description, img, effect, stacksleft, cost, weight) {
        this.name = name;
        this.type = type;
        this.typecolor = typecolor;
        this.description = description;
        this.effect = effect;
        this.img = img;
        this.stacksleft = stacksleft;
        this.cost = cost;
        this.weight = weight;
        this.bought = false;
    }
    draw(slot) {
        rectMode(CORNER)
        fill(30);
        noStroke();
        rect(70 + (slot) * 220, 200, 200, 240, 10, 10, 10, 10);
        fill("white");
        textStyle(BOLD)
        textLeading(23)
        textSize(25);
        textAlign(LEFT);
        if (this.name.length > 10) {
            textSize(20);
            textLeading(21);
        }
        if (this.name.includes("Panda Hero") || this.name.includes("of a True Vampire")) {
            textSize(18);
            textLeading(20);
        }
        text(this.name, 70 + slot * 220 + 70, 210, 120);
        textLeading(18)
        textStyle(NORMAL)
        textSize(17);
        textAlign(LEFT);
        fill(this.typecolor);
        if (this.name.length > 9) {
            text(this.type, 70 + slot * 220 + 70, 260, 120);
        } else {
            text(this.type, 70 + slot * 220 + 70, 239, 120);
        }
        fill(70);
        rect(80 + slot * 220, 218, 50, 50, 10, 10, 10, 10)
        fill("white");
        textSize(15);
        if (this.description.length > 60) {
            textSize(12);
            textLeading(12);
        }
        text(this.description, 90 + slot * 220, 300, 160)
        textAlign(CENTER);
        if (mouseX > 90 + slot * 220 && mouseX < 250 + slot * 220 && mouseY > 380 && mouseY < 410) {
            fill(240);
        } else {
            fill(70);
        }
        if (this.bought) {
            fill(0);
        }
        rect(90 + slot * 220, 380, 160, 30, 20, 20, 20, 20)

        if (mouseX > 90 + slot * 220 && mouseX < 250 + slot * 220 && mouseY > 380 && mouseY < 410) {
            fill(40);
        } else {
            fill("white");
        }

        if (this.bought) {
            fill(0);
        }
        textSize(20);
        textStyle(BOLD);
        text(this.cost, 90 + slot * 220, 384, 160);
        if (this.img != "N/A") {
            image(this.img, 80 + slot * 220 + 2.5, 228, 45, 30);
        }
    }
    checkClick(slot) {
        if (mouseX > 90 + slot * 220 && mouseX < 250 + slot * 220 && mouseY > 380 && mouseY < 410) {
            return true;
        }
        return false;
    }
    choose() {
        if (!this.bought) {
            if (coins >= this.cost) {
                this.bought = true;
                if (charactertype == "entrepreneur") {
                    playerStats.armor += 0.01;
                    playerStats.coinmulti += 0.01;
                    playerStats.attackdelay += 0.01;
                    healthbar.maxhealth += 0.25;
                    playerStats.dodge += 0.01;
                }
                coins -= this.cost;
                upgradetimes++;
                this.stacksleft--;
                for (var upgrade of upgradeoptions) {
                    if (upgrade.name == this.name) {
                        upgrade.stacksleft--;
                    }
                }
                for (var upgrade of explodingupgrades) {
                    if (upgrade.name == this.name) {
                        upgrade.stacksleft--;
                    }
                }
                for (var upgrade of vampireupgrades) {
                    if (upgrade.name == this.name) {
                        upgrade.stacksleft--;
                    }
                }
                if (this.stacksleft < 1) {
                    for (var upgrade of upgradechoices) {
                        if (upgrade.name == this.name) {
                            upgrade.bought = true;
                            upgrade.stacksleft--;
                        }
                    }
                }
                this.effect();
            }
        }
    }
}