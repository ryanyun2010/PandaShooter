class Collectable extends GameObject {
    constructor(x, y, value) {
        super(x, y, 20, 20);
        this.color = "yellow";
        this.stroke = "black";
        this.strokeWeight = 1;
        this.speed = 12;
        this.value = value;
    }
    draw(x, y) {
        imageMode(CENTER);
        image(coinsimg, x, y, this.w, this.h);
        imageMode(CORNER)
    }
    move() {
        if (getDistance(this.x, this.y, (player.x + game.x), (player.y + game.y)) < player.exprange * playerStats.expmagnet) {
            let theta = atan2((game.y + player.y) - this.y, (player.x + game.x) - this.x);
            let xspeed = this.speed * cos(theta);
            let yspeed = this.speed * sin(theta);
            this.x += xspeed;
            this.y += yspeed;
        }
        if (getDistance(this.x, this.y, (player.x + game.x), (player.y + game.y)) < this.w) {
            coins += this.value * playerStats.coinmulti;
            coinscollected += this.value * playerStats.coinmulti;
            game.data.splice(game.data.indexOf(this), 1);
        }
    }
}