//import { exercise } from './exercise.js';
class rCurlUp extends exercise {
        constructor(p){
          super(p)
          this.repstate = 'down'
          this.repcount = 0;
        }

        checkpose(pose){
          if(pose.rightShoulder.confidence > .4 && pose.rightElbow.confidence > .4  && pose.rightWrist.confidence > .4 ){
            let elbowWrist = this.p.createVector(
              pose.rightWrist.x - pose.rightElbow.x,
              pose.rightWrist.y - pose.rightElbow.y
            );
            let elbowShoulder = this.p.createVector(
              pose.rightShoulder.x - pose.rightElbow.x,
              pose.rightShoulder.y - pose.rightElbow.y
            );

            let rangle = elbowWrist.angleBetween(elbowShoulder)

            if(this.repstate == 'down' && Math.abs(rangle) < 1 &&
                elbowWrist.mag() > elbowShoulder.mag()* .7){
              this.repstate = 'up';
              this.repcount++;
              console.log(this.repcount);

              return true;
            }
            if(this.repstate == 'up' && Math.abs(rangle) > 2.6 &&
            elbowWrist.mag() > elbowShoulder.mag()* .7){
              this.repstate = 'down';
            }
          }else{
            this.p.textSize(50);
            this.p.textAlign(this.p.CENTER, this.p.CENTER);
            this.p.text(
              "CANNOT SEE RIGHT ARM",
              this.p.width / 2,
              this.p.height / 2
            );

            //some exception
          }
        }
      }
