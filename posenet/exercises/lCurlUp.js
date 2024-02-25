//import { exercise } from './exercise.js';
class lCurlUp extends exercise {
        constructor(){
          super()
          this.repstate = 'down'
          this.repcount = 0;
        }
      
        checkpose(pose){
          if(pose.leftShoulder.confidence > .4 && pose.leftElbow.confidence > .4  && pose.leftWrist.confidence > .4 ){
            let elbowWrist = createVector(pose.leftWrist.x - pose.leftElbow.x, pose.leftWrist.y - pose.leftElbow.y);
            let elbowShoulder = createVector(pose.leftShoulder.x - pose.leftElbow.x, pose.leftShoulder.y - pose.leftElbow.y);
      
            let langle = elbowWrist.angleBetween(elbowShoulder)
      
            if(this.repstate == 'down' &&
               Math.abs(langle) < 1 &&
                elbowWrist.mag() > elbowShoulder.mag()* .7){
              this.repstate = 'up';
              this.repcount++;
              console.log(this.repcount);
            }
            if(this.repstate == 'up' && Math.abs(langle) > 2.6 &&
            elbowWrist.mag() > elbowShoulder.mag()* .7){
              this.repstate = 'down';
            }
          }else{
            textSize(50);
            textAlign(CENTER, CENTER);
            text('CANNOT SEE LEFT ARM', width/2, height/2);
      
            //some exception
          }
        }
      }