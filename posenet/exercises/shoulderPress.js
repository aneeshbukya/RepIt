//import { exercise } from './exercise.js';
class shoulderPress extends exercise {
    constructor(){
      super()
      this.repstate = 'down'
      this.repcount = 0;
    }
  
    checkpose(pose){
      if(pose.rightShoulder.confidence > .4 && pose.rightElbow.confidence > .4  && pose.rightWrist.confidence > .4 &&
        pose.leftShoulder.confidence > .4 && pose.leftElbow.confidence > .4  && pose.leftWrist.confidence > .4 ){
        //right arm
        let relbowWrist = createVector(pose.rightWrist.x - pose.rightElbow.x, pose.rightWrist.y - pose.rightElbow.y);
        let relbowShoulder = createVector(pose.rightShoulder.x - pose.rightElbow.x, pose.rightShoulder.y - pose.rightElbow.y);
  
        let rangle = relbowWrist.angleBetween(relbowShoulder)

        //left arm
        let lelbowWrist = createVector(pose.leftWrist.x - pose.leftElbow.x, pose.leftWrist.y - pose.leftElbow.y);
        let lelbowShoulder = createVector(pose.leftShoulder.x - pose.leftElbow.x, pose.leftShoulder.y - pose.leftElbow.y);
  
        let langle = lelbowWrist.angleBetween(lelbowShoulder)
  
        if(this.repstate == 'down' && Math.abs(rangle) > 2.6 &&
            relbowWrist.mag() > relbowShoulder.mag()* .7
            && Math.abs(langle) >2.6 &&
            lelbowWrist.mag() > lelbowShoulder.mag()* .7){
          
          this.repstate = 'up';
          this.repcount++;
          console.log(this.repcount);
        }
        if(this.repstate == 'up' && Math.abs(rangle) < 1.3 &&
        relbowWrist.mag() > relbowShoulder.mag()* .7
        && Math.abs(langle) < 1.3 &&
        lelbowWrist.mag() > lelbowShoulder.mag()* .7){

          this.repstate = 'down';
        }
      }else{
        
        textSize(50);
        textAlign(CENTER, CENTER);
        text('CANNOT SEE BOTH ARMS', width/2, height/2);
  
        //some exception
      }
    }
  }