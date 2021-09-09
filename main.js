function setup()
{
    canvas=createCanvas(550,500);
    canvas.position(560,150);

    video=createCapture(VIDEO);
    video.size(550,500);

    poseNet=ml5.poseNet(video,modeloaded);
    poseNet.on("pose",Gotposes);
}
noseX=0;
noseY=0;
difference=0;
leftwristx=0;
rightwristx=0;
function draw()
{
    background('##9e3e4e');
    fill("#e86507");
    stroke("#0d0d0c");
    square(noseX,noseY,difference);
   
}
function modeloaded()
{
    console.log("The website is working.this message is ensuring that the wrist traking is working");
}
function Gotposes(results,error)
{
if (results.length > 0)
{
    console.log(results);
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    console.log("nose x="+noseX+" nose y ="+noseY);
    leftwristx=results[0].pose.leftWrist.x;
    rightwristx=results[0].pose.rightWrist.x;
    difference=floor(leftwristx-rightwristx);
    console.log("leftwristx="+leftwristx+" Right wrist x ="+rightwristx+" difference="+difference);
     document.getElementById("squareside").innerHTML="the width and height of the square is="+difference+"px";  
    
}
else
{
    console.log(error);
}

}