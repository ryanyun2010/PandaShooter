class Game{
    constructor(sw,sh,w,h){
        this.w = w;
        this.h = h;
        this.sw = sw;
        this.sh = sh;
        this.x = this.w / 2 - this.sw / 2;
        this.y = this.h / 2 - this.sh / 2;
        this.data = [];
    }
    draw(){
        for(var dp of this.data){
            if(dp instanceof Projectile){
                dp.move();
            }
        }
        for(var dp of this.data){
            if(dp.x > this.x && dp.y > this.y && dp.x < this.x + this.sw && dp.y < this.y + this.sh){
                dp.draw(dp.x - this.x,dp.y - this.y);
            }
        }
    }
    moveX(x){
        if(player.x > 500 && x < 0){
            if((player.x + x) < 500){
                player.x = 500;
            }else{
                player.x += x;
            }
            return;
        }
        if(player.x < 500 && x > 0){
            if((player.x + x) > 500){
                player.x = 500;
            }else{
                player.x += x;
            }
            return;
        }
        
        if(player.x < 100){
            return;
        }
        if(player.x > this.sw - 100){
            return;
        }
        
        if(this.x + x > 0 && this.x + x < this.w){
            this.x += x;
        }else{
            
            player.x += x;
            
        }
    }
    moveY(y){
        if(player.y > 350 && y < 0){
            if((player.y + y) < 350){
                player.y = 350;
            }else{
                player.y += y;
            }
            return;
        }
        if(player.y < 350 && y > 0){
            if((player.y + y) > 350){
                player.y = 350;
            }else{
                player.y += y;
            }
            return;
        }
        
        if(player.y > this.sh -100){
            return;
        }
        if(player.y < 100){
            return;
        }
        if(this.y + y > 0 && this.y + y < this.h){
            this.y += y;
        }else{
            player.y += y;
        }
    }
}