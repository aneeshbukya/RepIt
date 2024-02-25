// @ts-nocheck

import { Component, OnDestroy, OnInit } from '@angular/core';
import * as p5 from 'p5';
import { ExerciseService } from '../excersise.service';
import { ExerciseType } from '../models/exercise';

@Component({
  selector: 'app-posenet',
  standalone: true,
  imports: [],
  templateUrl: './posenet.component.html',
  styleUrl: './posenet.component.scss',
})
export class PoseNetComponent implements OnInit, OnDestroy {
  video;

  pose;
  skeleton1;

  current_exercise = null;

  private p5;

  constructor(private exerciseService: ExerciseService) {
    exerciseService.newExerciseType.subscribe(type => {
      switch(type) {
        case ExerciseType.CURLS:
          this.current_exercise = new bCurlUp(this.p5);

          break;
        case ExerciseType.LATERAL_RAISES:
          this.current_exercise = new lateralRaise(this.p5);

          break;
        case ExerciseType.PUSH_UPS:
          this.current_exercise = new pushUp(this.p5);

          break;
        case ExerciseType.SHOULDER_PRESSES:
          this.current_exercise = new shoulderPress(this.p5);

          break;
        case ExerciseType.SQUATS:
          this.current_exercise = new squat(this.p5);

          break;
        default:
          this.current_exercise = null;
      }

      console.log(this.current_exercise);
    });
  }

  ngOnInit(): void {
    const sketch = (s: any) => {
      s.setup = () => {
        let canvas = s.createCanvas(640, 480);

        canvas.parent('sketch');

        this.video = s.createCapture(s.VIDEO);
        this.video.hide();

        // Initialize PoseNet
        // It's important to ensure that you're using the correct function name and case
        // The correct function is poseNet (camel case), not posenet (lowercase)
        let poseNet = ml5.poseNet(this.video, this.modelLoaded);
        poseNet.on('pose', (poses) => {
          if (poses.length > 0) {
            this.pose = poses[0].pose;
            this.skeleton1 = poses[0].skeleton;
          }
        });

        this.current_exercise = null;
      };

      s.draw = () => {
        s.push();
        s.translate(this.video.width, 0);
        s.scale(-1, 1);
        s.image(this.video, 0, 0, this.video.width, this.video.height);
        // Here you can also add your drawing logic based on poses
        s.fill(255, 0, 0);

        if (this.pose) {
          for (let i = 0; i < this.pose.keypoints.length; i++) {
            s.fill(0, 255, 0);
            s.ellipse(
              this.pose.keypoints[i].position.x,
              this.pose.keypoints[i].position.y,
              16,
              16
            );
          }

          for (let i = 0; i < this.skeleton1.length; i++) {
            let a = this.skeleton1[i][0];
            let b = this.skeleton1[i][1];
            s.strokeWeight(2);
            s.stroke(255);
            s.line(a.position.x, a.position.y, b.position.x, b.position.y);
          }

          s.pop();

          //console.log(this.current_exercise);

          if (this.current_exercise != null) {
            const result = this.current_exercise.checkpose(this.pose);

            if (result) {
              this.exerciseService.decrementCount();
            }
          }
        }
      };
    };

    this.p5 = new p5(sketch);
  }

  ngOnDestroy(): void {
    this.p5.noCanvas();
  }

  modelLoaded() {
    console.log('PoseNet Ready');
  }
}
