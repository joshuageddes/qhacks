var input = document.getElementById("image-input");
var canvas = document.getElementById("image-canvas");
var ctx = canvas.getContext("2d");


var input2 = document.getElementById("image-input2");
var canvas2 = document.getElementById("image-canvas2");
var ctx2 = canvas2.getContext("2d");

 
function loadImage() {
   
 
    var img = new Image();
    img.src = URL.createObjectURL(input.files[0]);
    img.onload = function() {
      // get current canvas size
    var canvasWidth = canvas.width;
    var canvasHeight = canvas.height;

    // calculate new image size
    var newImgWidth = img.width;
    var newImgHeight = img.height;

    if (img.width > img.height) {
        if (img.width > canvasWidth) {
            newImgWidth = canvasWidth;
            newImgHeight = (img.height * canvasWidth) / img.width;
        }
    } else {
        if (img.height > canvasHeight) {
            newImgHeight = canvasHeight;
            newImgWidth = (img.width * canvasHeight) / img.height;
        }
    }

    // resize image
    ctx.drawImage(img, 0, 0, newImgWidth, newImgHeight);
  
  }
}

  function loadImage2() {
   
 
    var img2 = new Image();
    img2.src = URL.createObjectURL(input2.files[0]);
    img2.onload = function() {
      // get current canvas size
    var canvasWidth = canvas2.width;
    var canvasHeight = canvas2.height;

    // calculate new image size
    var newImgWidth = img2.width;
    var newImgHeight = img2.height;

    if (img2.width > img2.height) {
        if (img2.width > canvasWidth) {
            newImgWidth = canvasWidth;
            newImgHeight = (img2.height * canvasWidth) / img2.width;
        }
    } else {
        if (img2.height > canvasHeight) {
            newImgHeight = canvasHeight;
            newImgWidth = (img2.width * canvasHeight) / img2.height;
        }
    }

    // resize image
    ctx2.drawImage(img2, 0, 0, newImgWidth, newImgHeight);
  
  }
}

      /*canvas.width = 300;
      canvas.height = 300;
      img.width = canvas.width;
      img.height = canvas.height;
      ctx.drawImage(img, 0, 0);
    };
  }*/



/*
  function loadImage2() {
   
 
    var img2 = new Image();
    img2.src = URL.createObjectURL(input2.files[0]);
    img2.onload = function() {
      canvas2.width = img2.width;
      canvas2.height = img2.height;
      ctx2.drawImage(img2, 0, 0);
    };
  }

*/





