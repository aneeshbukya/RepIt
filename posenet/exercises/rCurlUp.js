//import { exercise } from './exercise.js';
class rCurlUp extends exercise {
        constructor(){
          super()
          this.repstate = 'down'
          this.repcount = 0;
        }
      
        checkpose(pose){
          if(pose.rightShoulder.confidence > .4 && pose.rightElbow.confidence > .4  && pose.rightWrist.confidence > .4 ){
            let elbowWrist = createVector(pose.rightWrist.x - pose.rightElbow.x, pose.rightWrist.y - pose.rightElbow.y);
            let elbowShoulder = createVector(pose.rightShoulder.x - pose.rightElbow.x, pose.rightShoulder.y - pose.rightElbow.y);
      
            let rangle = elbowWrist.angleBetween(elbowShoulder)
      
            if(this.repstate == 'down' && Math.abs(rangle) < 1 &&
                elbowWrist.mag() > elbowShoulder.mag()* .7){
              this.repstate = 'up';
              this.repcount++;
              console.log(this.repcount);
            }
            if(this.repstate == 'up' && Math.abs(rangle) > 2.6 &&
            elbowWrist.mag() > elbowShoulder.mag()* .7){
              this.repstate = 'down';
            }
          }else{
            textSize(50);
            textAlign(CENTER, CENTER);
            text('CANNOT SEE RIGHT ARM', width/2, height/2);
      
            //some exception
          }
        }
      }