difference=0;
right_wrist_X=0;
left_wrist_X=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,500);
    canvas.position(590,140);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses);
}

function modelLoaded()
{
    console.log("pose on");
}

function gotPoses(results)
{
    if(results.length > 0){
        console.log(results);
        left_wrist_X=results[0].pose.leftWrist.x;
        right_wrist_X=results[0].pose.rightWrist.x;
        difference=floor(left_wrist_X-right_wrist_X);
    }
}

function draw(){
    background("#03e3fc");
    document.getElementById("text_font").innerHTML="Width and Height of a text will be ="+difference+"px";
    fill('#f542a7');
    textSize(difference);
    text('Jaanvi',50,400);
}