import {Component, OnInit} from '@angular/core';
import {Repository} from '../../data/repository';
import {ShtrafBall} from '../../data/shtraf';

@Component({
  selector: 'app-org3',
  templateUrl: './org3.component.html',
  styleUrls: ['./org3.component.scss']
})
export class Org3Component implements OnInit {
  shtrafBall: ShtrafBall[];
  name: string;
  ball: number;
  id: number;
  saveShtrafBall: Array<ShtrafBall> = [];

  constructor(private repository: Repository) {
  }

  ngOnInit() {
    this.repository.getShtrafBall().subscribe((res: any[]) => {
      this.shtrafBall = res;
    });
  }

  save() {
    this.saveShtrafBall.length = 0;
    if (this.id) {
      this.saveShtrafBall.push({shtrafname: this.name, shtrafball: this.ball, id: this.id, ball: 0, shtrafid: null});
    } else {
      this.saveShtrafBall.push({shtrafname: this.name, shtrafball: this.ball, id: null, ball: 0, shtrafid: null});
    }
    this.repository.saveShtraf(this.saveShtrafBall[0]).subscribe((saveshtraf: ShtrafBall) => {
      this.repository.getShtrafBall().subscribe((res: any[]) => {
        this.shtrafBall = res;
      });
    });
  }

  cancel() {
    this.saveShtrafBall.length = 0;
    this.id = null;
    this.name = null;
    this.ball = null;
  }
}
