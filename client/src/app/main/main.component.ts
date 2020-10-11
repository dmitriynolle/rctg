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
  private text3: Array<string>;
  private visible = false;
  private bigFoto = '';
  constructor(private repository: Repository) {
  }

  ngOnInit(): void {
    this.repository.getVkPhoto().subscribe((rec: any) => {
      this.photosVk = rec.response.items;
      for (let j = 0; j < this.photosVk.length; j++) {
        this.photosVk[j].text = this.photosVk[j].text.replace(/https/g, '|');
        this.photosVk[j].text = this.photosVk[j].text.replace(/\n/g, '<br>');
        this.text2 = this.photosVk[j].text.split(/[[|\]]/g);
        this.photosVk[j].text = '';
        for (let k = 0; k < this.text2.length; k++) {
          if (this.text2[k].substr(0, 2) != 'id' && this.text2[k].substr(0, 4) != 'club') {
            if (this.text2[k].substr(0, 3) == '://') {
              this.text3 = this.text2[k].split(/<br>/, 1);
              for (let l = 0; l < this.text3.length; l++) {
                if (this.text3[l].substr(0, 3) == '://') {
                  this.text2[k] = this.text2[k].replace(this.text3[l], '<a target="_blank" href=https' + this.text3[l] + '>Ссылка</a>');
                }
              }
            }
            this.photosVk[j].text = this.photosVk[j].text + this.text2[k];
          }
        }
        console.log(this.text2);
        console.log(this.text3);
        console.log(this.photosVk[j].text);
      }
    });

  }
  loadBigFoto(i: number) {
    this.height = window.innerHeight - 150;
    this.width = window.innerWidth - 50;
    this.visible = true;
    this.bigFoto = this.photosVk[i].attachments[0].photo.sizes[this.photosVk[i].attachments[0].photo.sizes.length - 1].url;
  }
}
