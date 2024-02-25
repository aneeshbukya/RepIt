//import { exercise } from './exercise.js';
class pushUp extends exercise {
    constructor(){
      super()
      this.repstate = 'up'
      this.repcount = 0;
    }
  
    checkpose(pose){
      if(pose.rightShoulder.confidence > .4 && pose.rightElbow.confidence > .4  && pose.rightWrist.confidence > .4 &&
        pose.rightAnkle.confidence > .2){
        let relbowWrist = createVector(pose.rightWrist.x - pose.rightElbow.x, pose.rightWrist.y - pose.rightElbow.y);
  
        if(this.repstate == 'up' && 
        pose.rightShoulder.y > pose.rightElbow.y - relbowWrist.mag() * .2){
          this.repstate = 'down';
          
        }
        if(this.repstate == 'up' && 
        pose.rightShoulder.y < pose.rightElbow - relbowWrist.mag()* .6){
            this.repcount++;
            console.log(this.repcount);
        }
      }else{
        textSize(50);
        textAlign(CENTER, CENTER);
        text('CANNOT SEE FULL BODY', width/2, height/2);
  
        //some exception
      }
    }
  }