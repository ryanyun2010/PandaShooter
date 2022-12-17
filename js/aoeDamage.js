function dealAoeDamage(x, y, range, damage) {
    var temp;
    for (var e of enemies) {
        if (getDistance(x, y, e.x, e.y) < range) {
            e.health -= damage;
            e.damagedframesleft = 10;
            if ((healthbar.currenthealth + (damage * playerStats.lifesteal * playerStats.explodinglifesteal)) < healthbar.maxhealth) {
                healthbar.currenthealth += damage * playerStats.lifesteal * playerStats.explodinglifesteal;
            } else {
                healthbar.currenthealth = healthbar.maxhealth;
            }
            if (e.health <= 0) {
                enemieskilled++;
                game.data.push(new Collectable(e.x, e.y, e.value));
                game.data.splice(game.data.indexOf(e), 1);
                enemies.splice(enemies.indexOf(e), 1);
            }
        }
    }
}