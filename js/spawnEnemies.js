var wavedamagemulti;

function spawnEnemies() {
    wavehealthmulti = waveHealthMulti(wave);
    wavedamagemulti = waveDamageMulti(wave);
    if (wave == 1) {
        if (time % 90 == 0) {
            var xy = randomEnemyXY();
            enemies.push(new Bat(xy[0], xy[1]));
            game.data.push(enemies[enemies.length - 1]);
        }
    }
    if (wave == 2) {
        if (time % 60 == 0) {
            var xy = randomEnemyXY();
            enemies.push(new Bat(xy[0], xy[1]));
            game.data.push(enemies[enemies.length - 1]);
        }
    }
    if (wave == 3) {
        if (time % 90 == 0) {
            var xy = randomEnemyXY();
            enemies.push(new Bat(xy[0], xy[1]));
            game.data.push(enemies[enemies.length - 1]);
        }
        if (time % 90 == 0) {
            var xy = randomEnemyXY();
            enemies.push(new Tank(xy[0], xy[1]));
            game.data.push(enemies[enemies.length - 1]);
        }
    }
    if (wave == 4) {
        if (time % 120 == 0) {
            var xy = randomEnemyXY();
            enemies.push(new Bat(xy[0], xy[1]));
            game.data.push(enemies[enemies.length - 1]);
        }
        if (time % 60 == 0) {
            var xy = randomEnemyXY();
            enemies.push(new Tank(xy[0], xy[1]));
            game.data.push(enemies[enemies.length - 1]);
        }
    }
    if (wave == 5) {
        if (time % 90 == 0) {
            var xy = randomEnemyXY();
            enemies.push(new Bat(xy[0], xy[1]));
            game.data.push(enemies[enemies.length - 1]);
        }
        if (time % 45 == 0) {
            var xy = randomEnemyXY();
            enemies.push(new Tank(xy[0], xy[1]));
            game.data.push(enemies[enemies.length - 1]);
        }
    }
    if (wave == 6) {
        if (time % 60 == 0) {
            var xy = randomEnemyXY();
            enemies.push(new Tank(xy[0], xy[1]));
            game.data.push(enemies[enemies.length - 1]);
        }
        if (time % 90 == 0) {
            var xy = randomEnemyXY();
            enemies.push(new AxeThrower(xy[0], xy[1]));
            game.data.push(enemies[enemies.length - 1]);
        }
    }
    if (wave == 7) {
        if (time % 8 == 0) {
            var xy = randomEnemyXY();
            enemies.push(new Bat(xy[0], xy[1]));
            game.data.push(enemies[enemies.length - 1]);
        }
    }
    if (wave == 8) {
        if (time % 60 == 0) {
            var xy = randomEnemyXY();
            enemies.push(new Tank(xy[0], xy[1]));
            game.data.push(enemies[enemies.length - 1]);
        }
        if (time % 40 == 0) {
            var xy = randomEnemyXY();
            enemies.push(new AxeThrower(xy[0], xy[1]));
            game.data.push(enemies[enemies.length - 1]);
        }
    }
    if (wave == 9) {
        if (time % 50 == 0) {
            var xy = randomEnemyXY();
            enemies.push(new Tank(xy[0], xy[1]));
            game.data.push(enemies[enemies.length - 1]);
        }
        if (time % 30 == 0) {
            var xy = randomEnemyXY();
            enemies.push(new AxeThrower(xy[0], xy[1]));
            game.data.push(enemies[enemies.length - 1]);
        }
    }
    if (wave == 10) {
        if (time % 120 == 0) {
            var xy = randomEnemyXY();
            enemies.push(new Tank(xy[0], xy[1]));
            game.data.push(enemies[enemies.length - 1]);
        }
        if (time % 80 == 0) {
            var xy = randomEnemyXY();
            enemies.push(new AxeThrower(xy[0], xy[1]));
            game.data.push(enemies[enemies.length - 1]);
        }
        if (time % 140 == 0) {
            var xy = randomEnemyXY();
            enemies.push(new Sprayer(xy[0], xy[1]));
            game.data.push(enemies[enemies.length - 1]);
        }
    }
    if (wave == 11) {
        if (time % 110 == 0) {
            var xy = randomEnemyXY();
            enemies.push(new Tank(xy[0], xy[1]));
            game.data.push(enemies[enemies.length - 1]);
        }
        if (time % 70 == 0) {
            var xy = randomEnemyXY();
            enemies.push(new AxeThrower(xy[0], xy[1]));
            game.data.push(enemies[enemies.length - 1]);
        }
        if (time % 120 == 0) {
            var xy = randomEnemyXY();
            enemies.push(new Sprayer(xy[0], xy[1]));
            game.data.push(enemies[enemies.length - 1]);
        }
    }
    if (wave == 12) {
        if (time % 110 == 0) {
            var xy = randomEnemyXY();
            enemies.push(new Tank(xy[0], xy[1]));
            game.data.push(enemies[enemies.length - 1]);
        }
        if (time % 120 == 0) {
            var xy = randomEnemyXY();
            enemies.push(new AxeThrower(xy[0], xy[1]));
            game.data.push(enemies[enemies.length - 1]);
        }
        if (time % 90 == 0) {
            var xy = randomEnemyXY();
            enemies.push(new Sprayer(xy[0], xy[1]));
            game.data.push(enemies[enemies.length - 1]);
        }
    }
    if (wave == 13) {
        if (time % 120 == 0) {
            var xy = randomEnemyXY();
            enemies.push(new AxeThrower(xy[0], xy[1]));
            game.data.push(enemies[enemies.length - 1]);
        }
        if (time % 120 == 0) {
            var xy = randomEnemyXY();
            enemies.push(new Sprayer(xy[0], xy[1]));
            game.data.push(enemies[enemies.length - 1]);
        }
        if (time % 110 == 0) {
            var xy = randomEnemyXY();
            enemies.push(new Tank2(xy[0], xy[1]));
            game.data.push(enemies[enemies.length - 1]);
        }
    }
    if (wave == 14) {
        if (time % 100 == 0) {
            var xy = randomEnemyXY();
            enemies.push(new AxeThrower(xy[0], xy[1]));
            game.data.push(enemies[enemies.length - 1]);
        }
        if (time % 100 == 0) {
            var xy = randomEnemyXY();
            enemies.push(new Sprayer(xy[0], xy[1]));
            game.data.push(enemies[enemies.length - 1]);
        }
        if (time % 80 == 0) {
            var xy = randomEnemyXY();
            enemies.push(new Tank2(xy[0], xy[1]));
            game.data.push(enemies[enemies.length - 1]);
        }
    }
    if (wave == 15) {
        if (time > 3598) {
            game.x = 1500;
            game.y = 1600;
            player.x = 500;
            player.y = 350;
            enemies.push(new W15Boss(2500, 1900));
            game.data.push(enemies[enemies.length - 1]);
        }
        if (time % 120 == 0) {
            if (Math.random() < 0.5) {
                enemies[0].x = player.x + random(200, 400) + game.x;
            } else {
                enemies[0].x = player.x - random(200, 400) + game.x;
            }
            if (Math.random() < 0.5) {
                enemies[0].y = player.y + game.y + random(200, 400);
            } else {
                enemies[0].y = player.y - random(200, 400) + game.y;
            }
            var xy = randomEnemyXY();
            enemies.push(new Sprayer(xy[0], xy[1]));
            game.data.push(enemies[enemies.length - 1]);
        }
        if (time % 100 == 0) {
            var xy = randomEnemyXY();
            enemies.push(new Tank2(xy[0], xy[1]));
            game.data.push(enemies[enemies.length - 1]);
        }
    }
    if (wave == 16) {
        if (time % 120 == 0) {
            var xy = randomEnemyXY();
            enemies.push(new Sprayer2(xy[0], xy[1]));
            game.data.push(enemies[enemies.length - 1]);
        }
        if (time % 60 == 0) {
            var xy = randomEnemyXY();
            enemies.push(new Tank2(xy[0], xy[1]));
            game.data.push(enemies[enemies.length - 1]);
        }
    }
    if (wave == 17) {
        if (time % 80 == 0) {
            var xy = randomEnemyXY();
            enemies.push(new Sprayer2(xy[0], xy[1]));
            game.data.push(enemies[enemies.length - 1]);
        }
        if (time % 60 == 0) {
            var xy = randomEnemyXY();
            enemies.push(new Tank2(xy[0], xy[1]));
            game.data.push(enemies[enemies.length - 1]);
        }
    }
    if (wave == 18) {
        if (time % 80 == 0) {
            var xy = randomEnemyXY();
            enemies.push(new Sprayer2(xy[0], xy[1]));
            game.data.push(enemies[enemies.length - 1]);
        }
        if (time % 90 == 0) {
            var xy = randomEnemyXY();
            enemies.push(new Tank3(xy[0], xy[1]));
            game.data.push(enemies[enemies.length - 1]);
        }
    }
    if (wave == 19) {
        if (time % 60 == 0) {
            var xy = randomEnemyXY();
            enemies.push(new Sprayer2(xy[0], xy[1]));
            game.data.push(enemies[enemies.length - 1]);
        }
        if (time % 60 == 0) {
            var xy = randomEnemyXY();
            enemies.push(new Tank3(xy[0], xy[1]));
            game.data.push(enemies[enemies.length - 1]);
        }
    }
    if (wave == 20) {
        if (time > 3598) {
            game.x = 1500;
            game.y = 1600;
            player.x = 500;
            player.y = 350;
            enemies.push(new W20Boss(2500, 1900));
            game.data.push(enemies[enemies.length - 1]);
        }
        if (time % 100 == 0) {
            if (Math.random() < 0.5) {
                enemies[0].x = player.x + random(150, 300) + game.x;
            } else {
                enemies[0].x = player.x - random(150, 300) + game.x;
            }
            if (Math.random() < 0.5) {
                enemies[0].y = player.y + game.y + random(150, 300);
            } else {
                enemies[0].y = player.y - random(150, 300) + game.y;
            }
            var xy = randomEnemyXY();
            enemies.push(new Sprayer2(xy[0], xy[1]));
            game.data.push(enemies[enemies.length - 1]);
        }
        if (time % 100 == 0) {
            var xy = randomEnemyXY();
            enemies.push(new Tank3(xy[0], xy[1]));
            game.data.push(enemies[enemies.length - 1]);
        }
    }
}

function waveHealthMulti(wave) {
    switch (wave) {
        case 1:
            return 1;
        case 2:
            return 1.04;
        case 3:
            return 1.08;
        case 4:
            return 1.12;
        case 5:
            return 1.16;
        case 6:
            return 1.21;
        case 7:
            return 1.26;
        case 8:
            return 1.35;
        case 9:
            return 1.45;
        case 10:
            return 1.6;
        case 11:
            return 1.75;
        case 12:
            return 1.94;
        case 13:
            return 2.3;
        case 14:
            return 2.54;
        case 15:
            return 2.78;
        case 16:
            return 3;
        case 17:
            return 3.3;
        case 18:
            return 3.7;
        case 19:
            return 4.15;
        case 20:
            return 4.7;
        case 21:
            return 5.3;
        case 22:
            return 5.8;
        case 23:
            return 6.5;
        case 24:
            return 7.4;
        case 25:
            return 10;
    }
}

function waveDamageMulti(wave) {
    switch (wave) {
        case 1:
            return 1;
        case 2:
            return 1;
        case 3:
            return 1;
        case 4:
            return 1;
        case 5:
            return 1.5;
        case 6:
            return 1.5;
        case 7:
            return 1.5;
        case 8:
            return 1.75;
        case 9:
            return 1.75;
        case 10:
            return 2;
        case 11:
            return 2.25;
        case 12:
            return 2.5;
        case 13:
            return 2.5;
        case 14:
            return 3;
        case 15:
            return 3.5;
        case 16:
            return 3.5;
        case 17:
            return 3.5;
        case 18:
            return 4;
        case 19:
            return 5;
        case 20:
            return 6;
        case 21:
            return 7;
        case 22:
            return 8;
        case 23:
            return 9;
        case 24:
            return 10;
        case 25:
            return 15;
    }
}


function randomEnemyXY() {
    var rando = Math.random();
    if (rando < 0.25) {
        return [random(0, game.x), random(0, game.y)];
    }
    if (rando < 0.5) {
        return [random(0, game.x), random(game.y + game.sh, 3000)];
    }
    if (rando < 0.75) {
        return [random(game.x + game.sw, 3000), random(0, game.y)];
    }
    if (rando < 1) {
        return [random(game.x + game.sw, 3000), random(game.y + game.sh, 3000)]
    }
}