class Character {
    constructor(name, desc, effect, img) {
        this.name = name;
        this.desc = desc;
        this.effect = effect;
        this.firstrun = true;
        this.img = img || playerimgs[0];

    }
    draw() {
        if (this.firstrun) {
            this.firstrun = false;

            this.x = characters.indexOf(this) * 98;
            this.y = 470
            if (characters.indexOf(this) > 7) {
                this.x = characters.indexOf(this) * 98 - 784;
                this.y = 568;
            }
        }
        fill(80);
        rect(this.x + 120, this.y, 75, 75);
        fill("white");
        textStyle(BOLD);
        textSize(12);
        imageMode(CORNER)
        image(this.img, this.x + 130, this.y + 20, 55, 55);
        textAlign(CENTER)
        text(this.name, this.x + 120, this.y + 10, 75);

    }
    checkHover() {
        if (mouseX > this.x + 120 && mouseX < this.x + 120 + 75 && mouseY > this.y && mouseY < this.y + 75) {
            return true;
        }
    }
    drawFull() {
        textSize(50);
        text(this.name, 200, 120, 600);
        if (this.name.includes("Growth") || this.name.includes("Entrepreneur")) {
            textSize(20);
        } else {
            textSize(30);
        }
        textStyle(NORMAL);
        text(this.desc, 200, 200, 600)
    }
    choose() {
        this.effect();
    }
}