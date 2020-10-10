import {Component, OnInit} from '@angular/core';
import {Repository} from '../data/repository';
import {Subscription, timer} from 'rxjs';
import {VkPhoto, VkWall} from '../data/user.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {
  private photosVk: Array<VkWall> = [];
  private photoVk: Array<object> = [];
  private i: number;
  private timer: Subscription;
  private imgs: any;
  private height = window.innerHeight - 150;
  private width = window.innerWidth - 50;
  private text2: Array<string>;
  constructor(private repository: Repository) {
  }

  ngOnInit(): void {
    this.repository.getVkPhoto().subscribe((rec: any) => {
      this.photosVk = rec.response.items;
      // this.timer = timer(1, 5000).subscribe(t => {
      //   this.i = Math.round(Math.random() * this.photosVk.length);
      //   this.pload(this.photosVk[this.i].photo_1280);
      //   this.photoVk[0] = this.imgs;
      //   // console.log(this.height);
      // });
      // console.log(this.photosVk);
      for (let j = 0; j < this.photosVk.length; j++) {
        this.photosVk[j].text = this.photosVk[j].text.replace('https', '|');
        this.text2 = this.photosVk[j].text.split(/[[|\]]/g);
        this.photosVk[j].text = '';
        for (let k = 0; k < this.text2.length; k++) {
          if (this.text2[k].substr(0, 2) != 'id' && this.text2[k].substr(0, 4) != 'club' && this.text2[k].substr(0, 1) != ':'){
            this.photosVk[j].text = this.photosVk[j].text + this.text2[k];
          }
        }
        // this.photosVk[j].text = this.photosVk[j].text.replace(/[[*|*\]]/g, ' ');
        // this.photosVk[j].text = this.photosVk[j].text.replace(/[[id|]/g, '');
        // this.photosVk[j].text = this.photosVk[j].text.replace(/[.]]/g, '');
        // this.photosVk[j].text = this.photosVk[j].text.replace(/[club]/g, '');
        console.log(this.text2);
        console.log(this.photosVk[j].text);
      }
    });

  }

  // pload(args: string) {
  //   if (args == null) {
  //     this.i = Math.round(Math.random() * this.photosVk.length);
  //     this.pload(this.photosVk[this.i].photo_1280);
  //   } else {
  //     this.imgs = new Image();
  //     this.imgs.src = args;
  //   }
  // }
  // replayse(text: string) {
  //
  // }
}
