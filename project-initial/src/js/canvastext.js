//Construct Function
const CanvasText = function (positionX, positionY,font,fontSize,fontWeight,fontColor) {
    this.name = font;
    this.size = fontSize;
    this.weight = fontWeight;
    this.font = "80px Arial Bold";
    this.color = fontColor;
    this.originX = positionX;
    this.originY = positionY;
};

CanvasText.prototype.render = function(canvas,text,stroke){
    canvas.font = this.font;

    if (stroke == true) {
        canvas.strokeStyle = this.color;
        canvas.strokeText(text, this.originX, this.originY);
    } else {
        canvas.fillStyle = this.color;
        canvas.fillText(text, this.originX, this.originY);
    }

};




