noseX = 0;
noseY = 0;

differance = 0;
rightWristX = 0;
leftWristX = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video ,modelLoaded);
    poseNet.on("pose", gotPoses);
}

function draw(){
    background("#00ff44");
    fill("#0b006e");
    stroke("#0b006e");
    textSize(differance);
    text("Chakrika", noseX, noseY);
    document.getElementById("result").innerHTML= "Size of the text =" + differance + "px";
}

function modelLoaded(){
    console.log("PoseNet is Initialized");
}

function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);

        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX =" + noseX + ",noseY =" + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        differance = floor(leftWristX - rightWristX);
        console.log("leftWristX =" + leftWristX + ",rightWristX =" + rightWristX + ",differance =" + differance);
    }
    
}