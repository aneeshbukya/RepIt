//import { exercise } from './exercise.js';
class lCurlUp extends exercise {
        constructor(p){
          super(p)
          this.repstate = 'down';
          this.repcount = 0;
        }

        checkpose(pose){
          if(pose.leftShoulder.confidence > .4 && pose.leftElbow.confidence > .4  && pose.leftWrist.confidence > .4 ){
            let elbowWrist = this.p.createVector(
              pose.leftWrist.x - pose.leftElbow.x,
              pose.leftWrist.y - pose.leftElbow.y
            );
            let elbowShoulder = this.p.createVector(
              pose.leftShoulder.x - pose.leftElbow.x,
              pose.leftShoulder.y - pose.leftElbow.y
            );

            let langle = elbowWrist.angleBetween(elbowShoulder)

            if(this.repstate == 'down' &&
               Math.abs(langle) < 1 &&
                elbowWrist.mag() > elbowShoulder.mag()* .7){
              this.repstate = 'up';
              this.repcount++;
              console.log(this.repcount);

              return true;
            }
            if(this.repstate == 'up' && Math.abs(langle) > 2.6 &&
            elbowWrist.mag() > elbowShoulder.mag()* .7){
              this.repstate = 'down';
            }
          }else{
            this.p.textSize(50);
            this.p.textAlign(this.p.CENTER, this.p.CENTER);
            this.p.text('CANNOT SEE LEFT ARM', this.p.width/2, this.p.height/2);

            //some exception
          }
        }
      }
