import {Component, OnInit} from '@angular/core';
import {Subscription, timer} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {ShtrafBall} from '../../data/shtraf';
import {Repository} from '../../data/repository';
import {Etap, EtapView} from '../../data/registration';

@Component({
  selector: 'app-su',
  templateUrl: './su2.component.html',
  styleUrls: ['./su2.component.scss']
})
export class Su2Component implements OnInit {
  private subscription: Subscription;
  private timer: Subscription;
  game: number;
  user: number;
  su: number;
  allSec = 0;
  sec = 0;
  min = 0;
  bg: boolean[] = [true, false, false];
  userEtap: Array<EtapView> = [];
  nameGamesOpis: Array<ShtrafBall> = [];
  summa: Array<number> = [];
  allSumma = 0;
  etap: Array<Etap> = [];

  constructor(private activateRoute: ActivatedRoute, private repository: Repository) {
    this.subscription = activateRoute.params.subscribe(data => {
      this.game = data.game;
      this.user = data.user;
      this.su = data.su;
    });
  }

  ngOnInit() {
    this.repository.getUserEtap(this.game, this.user).subscribe((res: any[]) => {
      this.userEtap = res;
      this.repository.getNameGame(this.userEtap[0].namegames).subscribe((rec: any[]) => {
        this.nameGamesOpis = rec;
        for (let i = 0; i < this.nameGamesOpis.length; i++) {
          this.nameGamesOpis[i].ball = 0;
        }
        console.log(this.nameGamesOpis);
      });
    });
  }

  onOffTimer() {
    if (this.bg[0] == true) {
      this.timer = timer(1000, 1000).subscribe(t => {
        this.sec++;
        this.allSec++;
        if (this.sec == 60) {
          this.sec = 0;
          this.min++;
        }
        if (this.min >= 5) {
          this.bg[2] = true;
          this.bg[0] = false;
        } else {
          this.bg[1] = true;
          this.bg[0] = false;
        }
        if (this.min == 10) {
          this.stopTimer();
        }
      });
    }
    if (this.bg[0] == false) {
      this.stopTimer();
    }
  }

  stopTimer() {
    this.timer.unsubscribe();
    this.stopSchet();
    this.bg[0] = true;
    this.bg[1] = false;
    this.bg[2] = false;

  }

  stopSchet() {
    for (let i = 0; i < this.nameGamesOpis.length; i++) {
      if (this.nameGamesOpis[i].shtrafid == 1) {
        this.summa[i] = this.nameGamesOpis[i].ball * this.nameGamesOpis[i].shtrafball * this.userEtap[0].factoruser;
      } else {
        if (this.nameGamesOpis[i].shtrafid == 7) {
          if (this.min - 5 > 0) {
            this.summa[i] = (this.min - 5) * this.nameGamesOpis[i].shtrafball * this.userEtap[0].factoruser;
          } else {
            this.summa[i] = this.nameGamesOpis[i].ball * this.nameGamesOpis[i].shtrafball;
          }
        } else {
          this.summa[i] = this.nameGamesOpis[i].ball * this.nameGamesOpis[i].shtrafball;
        }
      }
    }
    this.allSumma = this.summa.reduce((a, b) => a + b);
    console.log(this.summa);

  }

  increment(id: number) {
    this.nameGamesOpis[id].ball++;
    this.stopSchet();
  }

  decrement(id: number) {
    this.nameGamesOpis[id].ball--;
    this.stopSchet();
  }

  saveEtap() {
    switch (this.su) {
      // @ts-ignore
      case '1': {
        this.userEtap[0].su1 = this.allSumma;
        break;
      }
      // @ts-ignore
      case '2': {
        this.userEtap[0].su2 = this.allSumma;
        break;
      }
      // @ts-ignore
      case '3': {
        this.userEtap[0].su3 = this.allSumma;
        break;
      }
      // @ts-ignore
      case '4': {
        this.userEtap[0].su4 = this.allSumma;
        break;
      }
      // @ts-ignore
      case '5': {
        this.userEtap[0].su5 = this.allSumma;
        break;
      }
    }
    this.userEtap[0].summa = this.userEtap[0].su1 + this.userEtap[0].su2 + this.userEtap[0].su3
      + this.userEtap[0].su4 + this.userEtap[0].su5;
    this.etap.push({
      id: this.userEtap[0].id, gameid: this.userEtap[0].gameid, userid: this.userEtap[0].userid,
      nomeruser: this.userEtap[0].nomeruser, factoruser: this.userEtap[0].factoruser, su1: this.userEtap[0].su1,
      su2: this.userEtap[0].su2, su3: this.userEtap[0].su3, su4: this.userEtap[0].su4, su5: this.userEtap[0].su5,
      summa: this.userEtap[0].summa, timeuser: this.userEtap[0].timeuser + this.allSec
    });
    console.log(this.userEtap, this.etap);
    this.repository.saveEtap(this.etap[0]);
  }
}
