
canvas = new fabric.Canvas("myCanvas");
 blockImageWidth = 30;
 blockImageHeight = 30;
 playerX = 10;
 playerY = 10;
var playerObject = "";

function playerUpdate() {
    fabric.Image.fromURL("player.png", function(Img) {
        playerObject = Img;
        playerObject.scaleToWidth(150);
        playerObject.scaleToHeight(140);
        playerObject.set({top: playerY, left: playerX});
        canvas.add(playerObject);
    });
}

function newImage(getImage) {

    fabric.Image.fromURL(getImage, function(Img) {
        blockImageObject = Img;
        blockImageObject.scaleToWidth(blockImageWidth);
        blockImageObject.scaleToHeight(blockImageHeight);
        blockImageObject.set({top: playerY, left: playerX});
        canvas.add(blockImageObject);
    });

}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {

    keyPressed = e.keyCode;
    console.log(keyPressed);

    //for shift P key (block size goes up)
    if(e.shiftKey == true && keyPressed == "80") {
        blockImageHeight = blockImageHeight + 5;
        blockImageWidth = blockImageWidth + 5;
        document.getElementById("current_width").innerHTML = blockImageWidth;
        document.getElementById("current_height").innerHTML = blockImageHeight;
    }

    //for shift M key (block size goes down)
    if(e.shiftKey == true && keyPressed == "77") {
        blockImageHeight = blockImageHeight - 5;
        blockImageWidth = blockImageWidth - 5;
        document.getElementById("current_height").innerHTML = blockImageHeight;
        document.getElementById("current_width").innerHTML = blockImageWidth;
    }

    // for up
    if(keyPressed == "38") {
        up();
        console.log("up");
    }

    //for down
    if(keyPressed == "40") {
        down();
        console.log("down");
    }

    //for left
    if(keyPressed == "37") {
        left();
        console.log("left");
    }

    //for right
    if(keyPressed == "39") {
        right();
        console.log("right");
    }

    // for wall (W)
    if(keyPressed == "87") {
        newImage("wall.jpg");
        console.log("W");
    }

    // for ground (G)
    if(keyPressed == "71") {
        newImage("ground.png");
        console.log("G");
    }

    // for roof (R)
    if(keyPressed == "82") {
        newImage("roof.jpg");
        console.log("R");
    }

    // for cloud (C)
    if(keyPressed == "67") {
        newImage("cloud.jpg");
        console.log("C");
    }

    // for dark_green (D)
    if(keyPressed == "68") {
        newImage("dark_green.png");
        console.log("D");
    }

    // for light_green (L)
    if(keyPressed == "76") {
        newImage("light_green.png");
        console.log("L");
    }

    // for trunk (T)
    if(keyPressed == "84") {
        newImage("trunk.jpg");
        console.log("T");
    }

    // for unique (U)
    if(keyPressed == "85") {
        newImage("unique.png");
        console.log("U");
    }

    // for dog (D)
    if(keyPressed == "68") {
        newImage("dog.png");
        console.log("D");
    }

    // for yellow_wall (Y)
    if(keyPressed == "89") {
        newImage("yellow_wall.png");
        console.log("Y");
    }

    //for X key (delete) 
    if(keypressed == 8) {
        canvas.remove('cloud.jpg');
    }

}

function up() {
    if(playerY >= 5) {
        playerY = playerY - blockImageHeight;
        console.log("blockImageHeight =" + blockImageHeight);
        console.log("when up arrow key is pressed, X =" + playerX, + "Y =" + playerY);
        canvas.remove(playerObject);
        playerUpdate();
    }
}


function down() {
    if(playerY <= 690) {
        playerY = playerY + blockImageHeight;
        console.log("blockImageHeight =" + blockImageHeight);
        console.log("when down arrow key is pressed, X =" + playerX, + "Y =" + playerY);
        canvas.remove(playerObject);
        playerUpdate();
    }
}



function right() {
    if(playerX <= 850) {
        playerX = playerX + blockImageWidth;
        console.log("blockImageHeight =" + blockImageWidth);
        console.log("when right arrow key is pressed, X =" + playerX, + "Y =" + playerY);
        canvas.remove(playerObject);
        playerUpdate();
    }
}



function left() {
    if(playerX >= 0) {
        playerX = playerX - blockImageWidth;
        console.log("blockImageHeight =" + blockImageWidth);
        console.log("when left arrow key is pressed, X =" + playerX, + "Y =" + playerY);
        canvas.remove(playerObject);
        playerUpdate();
    }
}