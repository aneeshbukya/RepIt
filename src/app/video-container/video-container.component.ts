import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-video-container',
  standalone: true,
  imports: [],
  templateUrl: './video-container.component.html',
  styleUrl: './video-container.component.scss'
})
export class VideoContainerComponent implements AfterViewInit {
  @ViewChild("video") video!: ElementRef;

  ngAfterViewInit(): void {
    navigator.mediaDevices.getUserMedia({
      video: {
        facingMode: "user"
      }
    }).then(stream => {
      this.video.nativeElement.srcObject = stream;
    })
  }
}
