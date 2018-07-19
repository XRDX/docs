// Let us code the future
var title = new Text("LeapLearnerLeapLearnerLeapLearnerLeapLearnerLeapLearnerLeapLearnerLeapLearnerLeapLearner", 100, 150, 70);

Text.prototype.print = function(width=canvas.width){
    let text = this.clone();
    let src = this.src;
    
    text.src = " ";
    width = width - text.width;
    if(width < 0){
       width = 0; 
    } 
    while(src){
        text.src = "";
        for(var i=0; i<src.length; i++){
            text.src += src[i];
            if(text.width < width && i<src.length-1){
                continue;
            }
            text.draw();
            text.y += this.h;
            break;
        }
        src = src.slice(i+1);
    }
};

title.print(400);