var canvas=new fabric.Canvas('myCanvas');

//player x and y
player_x=10;
player_y=10;

//block height and width
block_img_width=30;
block_img_height=30;

//blank as we will add functions to add the images
var player_object="";
var blockimg_object="";

//to update the player's size, location and image
function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,left:player_x
        });
        canvas.add(player_object);
    });
}
//to update the block image
function newimage(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        blockimg_object=Img;
        blockimg_object.scaleToWidth(block_img_width);
        blockimg_object.scaleToHeight(block_img_height);
        blockimg_object.set({
            top:player_y,left:player_x
        });
        canvas.add(blockimg_object);
    });
}
window.addEventListener("keydown",mykeydown)
function mykeydown(e){
    var keypressed=e.KeyCode;
    console.log(keypressed);
    //increses the size of the block
    if(e.shiftkey==true&&keypressed=='80'){
        console.log("p and shift pressed together")
        block_img_width=block_img_width+10;
        block_img_height=block_img_height+10;
        document.getElementById("current_width").innerHTML=block_img_width;
        document.getElementById("current_height").innerHTML=block_img_height;
    }
    if(e.shiftkey==true&&keypressed=='77'){
        console.log("m and shift pressed together")
        block_img_width=block_img_width-10;
        block_img_height=block_img_height-10;
        document.getElementById("current_width").innerHTML=block_img_width;
        document.getElementById("current_height").innerHTML=block_img_height;
    }
    if(keypressed=='38'){
        up();
        console.log("up");
    }
    if(keypressed=='40'){
        down();
        console.log("down");
    }
    if(keypressed=='37'){
        left();
        console.log("left");
    }
    if(keypressed=='39'){
        right();
        console.log("right");
    }
    //set image for background
    if(keypressed=='87'){
        newimage('wall.jpg');
        console.log("w");
    }
    if(keypressed=='71'){
        newimage('ground.png');
        console.log('g');
    }
    if(keypressed=='76'){
        newimage('light_green.png');
        console.log('l');
    }
    if(keypressed=='84'){
        newimage('trunk.jpg');
        console.log("t");
    }
    if(keypressed=='82'){
        newimage('roof.jpg');
        console.log("r");
    }
    if(keypressed=='89'){
        newimage('yellow_wall.png');
        console.log("y");
    }
    if(keypressed=='68'){
        newimage('dark_green.jpg');
        console.log("d");
    }
    if(keypressed=='85'){
        newimage('unique.png');
        console.log("u");
    }
    if(keypressed=='67'){
        newimage('cloud.jpg');
        console.log("c");
    }
}
//functions for moving the player
function up(){
    if(player_y>=0){
        player_y=player_y-block_img_height;
        console.log("block img height="+block_img_height);
        console.log("when up arrow key is pressed,then X="+player_x+"Y="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function down(){
    if(player_y<=500){
        player_y=player_y+block_img_height;
        console.log("block img height="+block_img_height);
        console.log("when down arrow key is pressed,then X="+player_x+"Y="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function left(){
    if(player_x>0){
        player_x=player_x-block_img_width;
        console.log("block img width="+block_img_width);
        console.log("when left key is pressed,then X="+player_x+"Y="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function right(){
    if(player_x<=850){
        player_x=player_x+block_img_width;
        console.log("block img width="+block_img_width);
        console.log("when right key is pressed,then X="+player_x+"Y="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}