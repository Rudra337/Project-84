
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

car1_width = 120;
car1_height = 70;

car2_width = 120;
car2_height = 70;

 var car1_image = "car1.png";
 var car2_image = "car2.png";

car1_x = 10;
car1_y = 10;

car2_x = 10;
car2_y = 100;
window.addEventListener("keydown", my_keydown);
   

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '38')
    {
        up();
        console.log("up");
    }
    if(keyPressed == '40')
    {
        down();
        console.log("down");
    }
    if(keyPressed == '37')
    {
        left();
        console.log("left");
    }
    if(keyPressed == '39')
    {
        right();
        console.log("right");
    }
    
}
    
     background_image = "depositphotos_63506699-stock-illustration-racing-background-checkered-flag-wawing.jpg";
     background_image1 = "depositphotos_63506699-stock-illustration-racing-background-checkered-flag-wawing.jpg";



function uploadBackground1() {
    ctx.drawImage(background_imgTag1, 0, 0, canvas.width, canvas.height);
}
function uploadBackground2() {
    ctx.drawImage(background_imgTag2, 0, 0, canvas.width, canvas.height);
}
function uploadcar1() {
    ctx.drawImage(car1_imgTag1, car1_x, car1_y, car1_width, car1_height)
}
function uploadcar2() {
    ctx.drawImage(car2_imgTag2, car2_x, car2_y, car2_width, car2_height)
}

function add1() {
    
    background_imgTag1 = new Image();
    background_imgTag1.onload = uploadBackground1;
    background_imgTag1.src =  background_image;

    car1_imgTag1 = new Image();
    car1_imgTag1.onload = uploadcar1;
    car1_imgTag1.src = car1_image;
    

    background_imgTag2 = new Image();
    background_imgTag2.onload = uploadBackground1;
    background_imgTag2.src =  background_image1;

    car2_imgTag2 = new Image();
    car2_imgTag2.onload = uploadcar2;
    car2_imgTag2.src = car2_image;
}


