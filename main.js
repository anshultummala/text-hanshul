noseX = 0
noseY = 0
leftwristX = 0
rightwristX = 0
difference = 0



function setup(){
c1 = createCanvas(550, 500)
c1.position(560, 150)
v1 = createCapture(VIDEO)
v1.size(550, 500)
pn = ml5.poseNet(v1, modelLoaded)
pn.on('pose', gotPoses)
}
function modelLoaded(){
    console.log("model has loaded")
}
function gotPoses(results){
if(results.length>0){
    console.log(results)
    noseX = results[0].pose.nose.x
    noseY = results[0].pose.nose.y
    rightwristX = results[0].pose.rightWrist.x
    leftwristX = results[0].pose.leftWrist.x
    difference = floor(leftwristX - rightwristX)
    console.log("difference = " + difference)
}




}
function draw(){
    background('black')
    fill('white')
    stroke('white')
text("hanshul", noseX, noseY)
textSize(difference)
document.getElementById("side").innerHTML = difference












































































































}

