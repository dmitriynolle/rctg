import {Component, OnInit} from '@angular/core';
import {Repository} from '../data/repository';
import {Subscription, timer} from 'rxjs';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {VkPhoto} from "../data/user.model";

@Component({
  selector: 'app-main',
  animations: [
    trigger('expandedPanel', [
      state('initial', style({opacity: 0})),
      state('expanded', style({opacity: 1})),
      transition('initial <=> expanded', animate('0.5s'))
    ])
  ],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {
  private photosVk: Array<VkPhoto> = [];
  private photoVk: Array<object> = [];
  private i: number;
  private timer: Subscription;
  imgs = new Array();
  isExpanded = false
  state = 'expanded'

  constructor(private repository: Repository) {
  }

  ngOnInit(): void {
    this.i = Math.round(Math.random() * 1000);
    this.repository.getVkPhoto().subscribe((rec: any) => {
      this.photosVk = rec.response.items;
      this.pload(this.photosVk[this.i].photo_1280);
      // console.log(this.photosVk[0]);
      this.timer = timer(1, 5000).subscribe(t => {
        this.photoVk[0] = this.imgs[0];
        this.i = Math.round(Math.random() * 1000);
        this.pload(this.photosVk[this.i].photo_1280);
        // console.log(this.photosVk[0].photo_1280);
      });
    });
  }

  pload(args: string):void {
    if (args == null) {
      this.i = Math.round(Math.random() * 1000);
      this.pload(this.photosVk[this.i].photo_1280);
    } else {
      this.imgs[0] = new Image();
      this.imgs[0].src = args;
      console.log(args);
    }
  }

  expand() {
    this.isExpanded = !this.isExpanded;
    this.state = this.isExpanded ? 'expanded' : 'initial';
  }

}
