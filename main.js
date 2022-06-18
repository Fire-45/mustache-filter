function preload(){

}

function setup(){

    canvas = createCanvas(400,250);
    canvas.position(480,300);

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPose);
}

function draw(){

     image(video,0,0,400,250);
}

function modelLoaded(){
    console.log("model loaded");

}

function gotPose(result){
    if(result.length > 0){
        console.log(result);

    }
}