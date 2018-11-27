class Square{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.filledWith = "";
  }
  //Is the mouse inside this object
  isMouseInside(mX, mY){
    if(mX > this.x & mX < this.x + w & mY > this.y & mY < this.y + h){
      return true;
    }
  }
  //Called when the object is clicked on
  onClick(){
    if(this.filledWith === ""){
      switch (turn) {
        case 0:
          this.filledWith = "O";
          turn = 1;
          break;
        default:
          this.filledWith = "X";
          turn = 0;
      }
    }
  }
  
  show(){
    rect(this.x, this.y, w, h);
    fill(0);
    text(this.filledWith, this.x+w/2, this.y+h/2)
  }

  update(){
    if(this.isMouseInside(mouseX, mouseY)){
      fill(240);
    }else{
      fill(255);
    }
    this.show();
  }
}
