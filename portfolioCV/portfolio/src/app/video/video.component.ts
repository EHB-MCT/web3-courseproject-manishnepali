import { Component, OnInit } from '@angular/core';
import {VideoList} from '../video-feed';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  constructor() { }
  videos = VideoList;
  ngOnInit(): void {
  }

}
