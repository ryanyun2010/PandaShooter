class HealthBar {
    constructor(maxhealth) {
        this.maxhealth = maxhealth;
        this.currenthealth = this.maxhealth;
        this.iframes = [];
    }

    draw() {
        for (var frame of this.iframes) {
            frame[1]--;
            if (frame[1] < 1) {
                this.iframes.splice(this.iframes.indexOf(frame), 1);
            }
        }
        rectMode(CORNER);
        fill("grey");
        stroke("black");
        strokeWeight(5);
        rect(20, 20, 300, 20);
        fill("red");
        noStroke();
        rect(20, 20, (this.currenthealth / this.maxhealth) * 300, 20);
    }
    dealDamage(damage, source) {
        for (var frame of this.iframes) {
            if (frame[0].id == source.id) {
                return;
            }
        }
        this.iframes.push([source, 30]);

        if (Math.random() > playerStats.dodge) {
            this.currenthealth -= damage / playerStats.armor;
            damagetaken += damage / playerStats.armor;
        } else {
            dodgetextframes = 7;
        }
    }
}