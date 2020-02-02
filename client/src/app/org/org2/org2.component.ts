import {Component, OnInit} from '@angular/core';
import {NameGames} from '../../data/user.model';
import {Repository} from '../../data/repository';
import {EtapView} from '../../data/registration';
import {sortBy} from 'sort-by-typescript';

@Component({
  selector: 'app-org2',
  templateUrl: './org2.component.html',
  styleUrls: ['./org2.component.scss']
})
export class Org2Component implements OnInit {
  name: string;
  gamesName: Array<NameGames> = [];
  gameName: Array<NameGames> = [];
  etap: Array<EtapView> = [];
  time: Array<any> = [];

  constructor(private repository: Repository) {
  }

  ngOnInit() {

    this.repository.getNameGames(2).subscribe((res: any[]) => {
      this.gamesName = res;
    });

  }

  getSelectNameGames() {
    this.etap.length = 0;
    this.gameName = this.gamesName.filter(res => this.name == res.namegames);
    this.repository.getSelectUsers(this.gameName[0].id).subscribe((res: any[]) => {
      this.etap = res;
      for (let i = 0; i < this.etap.length; i++) {
        this.etap[i].summa = this.etap[i].su1 + this.etap[i].su2 + this.etap[i].su3 + this.etap[i].su4 + this.etap[i].su5;
        if (this.etap[i].timeuser % 60 < 10) {
          this.time[i] = Math.trunc(this.etap[i].timeuser / 60) + ' : 0' + this.etap[i].timeuser % 60;
        } else {
          this.time[i] = Math.trunc(this.etap[i].timeuser / 60) + ' : ' + this.etap[i].timeuser % 60;
        }
        this.etap[i].timeuser = this.time[i];
      }
      this.etap = this.etap.sort(sortBy('summa'));
    });
  }
}
