function setup() {
  createCanvas(500,400);
}
var num1 = random(0,225)
var num2 = random(0,225)
function draw() {
  var x = 2;

  background('gray');
  fill(250)
  
   for ( var row = 0; row <10; row += 1){
       for ( var count = 0; count < 10; count += 1){
          if (count % 2 === 0){
            fill('white')
           } else {
              fill('black')
           }
           rect(x + (50 * count), 50 * row, 50, 50)
           
  for ( var row = 0; row < 10; row += 1 ) {
      if(row % 2 === 0){
      var firstColor = 'black'
      var secondColor = 'white'
     } else {
        var firstColor = 'white'
        var secondColor = 'black'
      
  }
    for (var count = 0; count < 10; count += 1) {
        if (count % 2 === 0) {
     fill(firstColor)
        } else {
            fill(secondColor)
        }
        rect(x +(50 * count),50 * row, 50,50)
            
        }
    }
  }
           
        }
   }
