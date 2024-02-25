//import { exercise } from './exercise.js';
class squat extends exercise {
    constructor(p){
      super(p)
      this.repstate = 'up'
      this.repcount = 0;
    }

    checkpose(pose){
      if(pose.rightHip.confidence > .4 && pose.rightKnee.confidence > .4  && pose.rightAnkle.confidence > .4 &&
        pose.leftHip.confidence > .4 && pose.leftKnee.confidence > .4  && pose.leftAnkle.confidence > .4 ){

        //console.log(pose.rightHip.y)

        let rshin = this.p.createVector(
          pose.rightKnee.x - pose.rightAnkle.x,
          pose.rightKnee.y - pose.rightAnkle.y
        );
        let lshin = this.p.createVector(
          pose.leftKnee.x - pose.leftAnkle.x,
          pose.leftKnee.y - pose.leftAnkle.y
        );



        //console.log(pose.rightHip.y - (pose.rightKnee.y  + .2 * rshin.mag()))


        if(this.repstate == 'up' &&
        pose.rightHip.y > pose.rightKnee.y  - 0.2 * rshin.mag() &&
        pose.leftHip.y > pose.leftKnee.y  - 0.2 * lshin.mag()){
          this.repstate = 'down';
          this.repcount++;
          console.log(this.repcount);

          return true;
        }


        if(this.repstate == 'down' &&
        pose.rightHip.y < pose.rightKnee.y  - 0.7 * rshin.mag() &&
        pose.leftHip.y < pose.leftKnee.y  - 0.7 * lshin.mag()){
          this.repstate = 'up';
        }

      }else{
        this.p.textSize(50);
        this.p.textAlign(this.p.CENTER, this.p.CENTER);
        this.p.text(
          "CANNOT SEE HIPS AND LEGS",
          this.p.width / 2,
          this.p.height / 2
        );

        //some exception
      }
    }
  }
