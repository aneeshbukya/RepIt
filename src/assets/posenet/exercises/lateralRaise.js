//import { exercise } from './exercise.js';
class lateralRaise extends exercise {
    constructor(p){
      super(p)
      this.repstate = 'down'
      this.repcount = 0;
    }

    checkpose(pose){
      if(pose.rightShoulder.confidence > .4 && pose.rightElbow.confidence > .4  && pose.rightWrist.confidence > .4 &&
        pose.leftShoulder.confidence > .4 && pose.leftElbow.confidence > .4  && pose.leftWrist.confidence > .4 &&
        pose.leftHip.confidence > .4 && pose.rightHip.confidence > .4){

        //torso is calculated for scaling purposes
        let rtorso = this.p.createVector(
          pose.rightHip.x - pose.rightShoulder.x,
          pose.rightHip.y - pose.rightShoulder.y
        );
        let ltorso = this.p.createVector(pose.leftHip.x - pose.leftShoulder.x, pose.leftHip.y - pose.leftShoulder.y);

        //right arm
        let relbowWrist = this.p.createVector(
          pose.rightWrist.x - pose.rightElbow.x,
          pose.rightWrist.y - pose.rightElbow.y
        );
        let relbowShoulder = this.p.createVector(
          pose.rightShoulder.x - pose.rightElbow.x,
          pose.rightShoulder.y - pose.rightElbow.y
        );

        let rangle = relbowWrist.angleBetween(relbowShoulder)

        //left arm
        let lelbowWrist = this.p.createVector(
          pose.leftWrist.x - pose.leftElbow.x,
          pose.leftWrist.y - pose.leftElbow.y
        );
        let lelbowShoulder = this.p.createVector(
          pose.leftShoulder.x - pose.leftElbow.x,
          pose.leftShoulder.y - pose.leftElbow.y
        );

        let langle = lelbowWrist.angleBetween(lelbowShoulder)

        //both check if the hands are as high as they need to be and also check that the arms are not bent
        if(this.repstate == 'down' &&
        pose.rightWrist.y < pose.rightShoulder.y + .1 * rtorso.mag() &&
        pose.leftWrist.y < pose.leftShoulder.y + .1 * ltorso.mag() &&
        Math.abs(rangle) > 2.7 && Math.abs(langle) > 2.7

        ){
          this.repstate = 'up';
          this.repcount++;
          console.log(this.repcount);

          return true;
        }
        if(this.repstate == 'up' &&
        pose.rightWrist.y > pose.rightHip.y - .2 * rtorso.mag() &&
        pose.leftWrist.y > pose.leftHip.y - .2 * ltorso.mag()){

          this.repstate = 'down';
        }
      }else{

        this.p.textSize(50);
        this.p.textAlign(this.p.CENTER, this.p.CENTER);
        this.p.text(
          "CANNOT SEE FULL TORSO",
          this.p.width / 2,
          this.p.height / 2
        );

        //some exception
      }
    }
  }
