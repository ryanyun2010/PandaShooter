class GameObject{
    constructor(x,y,w,h){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.color = "white";
        this.stroke = "black";
        this.strokeWeight = 3;
    }
    draw(x,y){
        rectMode(CENTER);
        fill(this.color)
        stroke(this.stroke);
        strokeWeight(this.strokeWeight)
        rect(x,y,this.w,this.h);
    }
}