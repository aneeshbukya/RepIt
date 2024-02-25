//import { exercise } from './exercise.js';
class pushUp extends exercise {
    constructor(p){
      super(p)
      this.repstate = 'up'
      this.repcount = 0;
    }

    checkpose(pose){
      if(pose.rightShoulder.confidence > .4 && pose.rightElbow.confidence > .4  && pose.rightWrist.confidence > .4 &&
        pose.rightAnkle.confidence > .2){
        let relbowWrist = this.p.createVector(
          pose.rightWrist.x - pose.rightElbow.x,
          pose.rightWrist.y - pose.rightElbow.y
        );

        if(this.repstate == 'up' &&
        pose.rightShoulder.y > pose.rightElbow.y - relbowWrist.mag() * .2){
          this.repstate = 'down';

        }
        if(this.repstate == 'up' &&
        pose.rightShoulder.y < pose.rightElbow - relbowWrist.mag()* .6){
            this.repcount++;
            console.log(this.repcount);

            return true;
        }
      }else{
        this.p.textSize(50);
        this.p.textAlign(this.p.CENTER, this.p.CENTER);
        this.p.text(
          "CANNOT SEE FULL BODY",
          this.p.width / 2,
          this.p.height / 2
        );

        //some exception
      }
    }
  }
