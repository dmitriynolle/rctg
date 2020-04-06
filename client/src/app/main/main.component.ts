import {Component, OnInit} from '@angular/core';
import {Repository} from '../data/repository';
import {Subscription, timer} from 'rxjs';
import {VkPhoto} from '../data/user.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {
  private photosVk: Array<VkPhoto> = [];
  private photoVk: Array<object> = [];
  private i: number;
  private timer: Subscription;
  private imgs: any;
  private height = window.innerHeight - 150;
  private width = window.innerWidth - 50
  constructor(private repository: Repository) {
  }

  ngOnInit(): void {
    this.repository.getVkPhoto().subscribe((rec: any) => {
      this.photosVk = rec.response.items;
      this.timer = timer(1, 5000).subscribe(t => {
        this.i = Math.round(Math.random() * this.photosVk.length);
        this.pload(this.photosVk[this.i].photo_1280);
        this.photoVk[0] = this.imgs;
        // console.log(this.height);
      });
    });
  }

  pload(args: string) {
    if (args == null) {
      this.i = Math.round(Math.random() * this.photosVk.length);
      this.pload(this.photosVk[this.i].photo_1280);
    } else {
      this.imgs = new Image();
      this.imgs.src = args;
    }
  }
}
