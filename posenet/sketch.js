
let video;
let poseNet; // Ensure this matches the casing and spelling used in ml5 documentation

let pose;
let skeleton;

let brain;

let repcount, repstate;

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.hide();
  // Initialize PoseNet
  // It's important to ensure that you're using the correct function name and case
  // The correct function is poseNet (camel case), not posenet (lowercase)
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);

  /*let options = {
    inputs: 34,
    outputs: 2,
    task: 'classification',
    debug: true,
  }
  brain = ml5.neuralNetwork()*/

  repcount = 0;
  repstate = 'down';
}

function gotPoses(poses){
  //console.log(poses);
  if(poses.length > 0) {
    pose = poses[0].pose;
    skeleton = poses[0].skeleton;
  }
}

function modelLoaded() {
  console.log('PoseNet Ready');
}

function draw() {
  push();
  translate(video.width, 0);
  scale(-1,1);
  image(video, 0, 0, video.width, video.height);
  // Here you can also add your drawing logic based on poses
  fill(255, 0, 0);
  if(pose){
    for (let i = 0; i < pose.keypoints.length; i++){
      fill(0, 255, 0);
      ellipse(pose.keypoints[i].position.x, pose.keypoints[i].position.y, 16, 16)    
    }

    for (let i = 0; i< skeleton.length; i++){
      let a = skeleton[i][0];
      let b = skeleton[i][1];
      strokeWeight(2);
      stroke(255);
      line(a.position.x, a.position.y, b.position.x, b.position.y);
    }

    pop();

    let rangle, langle = 0;;

    if(pose.rightShoulder.confidence > .4 && pose.rightElbow.confidence > .4  && pose.rightWrist.confidence > .4 ){
      let elbowWrist = createVector(pose.rightWrist.x - pose.rightElbow.x, pose.rightWrist.y - pose.rightElbow.y);
      let elbowShoulder = createVector(pose.rightShoulder.x - pose.rightElbow.x, pose.rightShoulder.y - pose.rightElbow.y);

      rangle = elbowWrist.angleBetween(elbowShoulder)

      //console.log("right arm angles: ", rangle);
    }

    if(pose.leftShoulder.confidence > .4 && pose.leftElbow.confidence > .4  && pose.leftWrist.confidence > .4 ){
      let elbowWrist = createVector(pose.leftWrist.x - pose.leftElbow.x, pose.leftWrist.y - pose.leftElbow.y);
      let elbowShoulder = createVector(pose.leftShoulder.x - pose.leftElbow.x, pose.leftShoulder.y - pose.leftElbow.y);

      langle = elbowWrist.angleBetween(elbowShoulder)

      //console.log("left arm angles: ", langle);

      if(repstate == 'down' && Math.abs(langle) < 1){
        repstate = 'up';
        repcount++;
        console.log(repcount);
      }
      if(repstate == 'up' && Math.abs(langle) > 2.6){
        repstate = 'down';
      }
    }

    if(langle != 0 && Math.abs(langle) < 1){
      textSize(72);
      textAlign(CENTER, CENTER);
      text('REPUP', width/2, height/2);
    }
  }
}
