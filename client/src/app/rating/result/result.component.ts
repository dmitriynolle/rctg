import {Component, OnInit} from '@angular/core';
import {NameGames, NameGamesView} from '../../data/user.model';
import {Repository} from '../../data/repository';
import {EtapView} from '../../data/registration';
import {sortBy} from 'sort-by-typescript';
import {UserEtapStata} from '../../data/shtraf';

@Component({
  selector: 'app-org2',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  name = '0';
  gamesName: Array<NameGames> = [];
  gameName: Array<NameGames> = [];
  gameOpis: Array<NameGamesView> = [];
  gameOpisOne: Array<NameGamesView> = [];
  userEtapStata: Array<UserEtapStata> = [];
  etap: Array<EtapView> = [];
  etapK: Array<EtapView> = [];
  time: Array<any> = [];
  popupVisible = true;
  index: number;
  timer: number;

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
      this.repository.getNameGame(this.name).subscribe((rec: any) => this.gameOpis = rec);
      for (let i = 0; i < this.etap.length; i++) {
        this.timer = this.etap[i].timesu1 + this.etap[i].timesu2 + this.etap[i].timesu3 + this.etap[i].timesu4 + this.etap[i].timesu5;
        if (this.timer % 60 < 10) {
          this.time[i] = Math.trunc(this.timer / 60) + ' : 0' + this.timer % 60;
        } else {
          this.time[i] = Math.trunc(this.timer / 60) + ' : ' + this.timer % 60;
        }
        this.etap[i].time = this.time[i];
      }
      this.etap = this.etap.sort(sortBy('time'));
      this.etap = this.etap.sort(sortBy('summa'));
      this.getKResult(0);
    });
  }

  allInfo(gameId: number, userId: number, index: number) {
    if (this.etap[index].su1 < 9000 || this.etap[index].su2 < 9000 || this.etap[index].su3 < 9000 || this.etap[index].su4 < 9000 || this.etap[index].su5 < 9000) {
      this.repository.getUserEtapStata(gameId, userId).subscribe((rec: any) => {
        this.userEtapStata = rec;
        this.popupVisible = false;
        this.userEtapStata = this.userEtapStata.sort(sortBy('nomersu'));
        this.index = index;
        console.log(this.userEtapStata, this.gameOpis, this.gameName);
      })
    }
  }

  timermath(i: number) {
    if (this.etap[this.index]['timesu' + i] % 60 < 10) {
      return (Math.trunc(this.etap[this.index]['timesu' + i] / 60) + ' : 0' + this.etap[this.index]['timesu' + i] % 60);
    } else {
      return (Math.trunc(this.etap[this.index]['timesu' + i] / 60) + ' : ' + this.etap[this.index]['timesu' + i] % 60);
    }
  }

  shtraffbal(nameshtraf: string): any {
    this.gameOpisOne = this.gameOpis.filter(rec => rec.shtrafname == nameshtraf);
    return (this.gameOpisOne[0].shtrafball);
  }

  getKResult(idCategory: number) {
    if (idCategory != 0) {
      this.etapK = this.etap.filter((res: EtapView) => res.factoruser == idCategory);
    } else {
      this.etapK = this.etap;
    }
  }
}
