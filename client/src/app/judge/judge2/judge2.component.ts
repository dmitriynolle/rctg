import {Component, OnInit} from '@angular/core';
import {Subscription, timer} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {ShtrafBall, UserEtapStata} from '../../data/shtraf';
import {Repository} from '../../data/repository';
import {Etap, EtapView} from '../../data/registration';

@Component({
  selector: 'app-su',
  templateUrl: './judge2.component.html',
  styleUrls: ['./judge2.component.scss']
})
export class Judge2Component implements OnInit {
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
  userEtapStata: Array<UserEtapStata> = [];
  summa: Array<number> = [];
  allSumma = 0;
  etap: Array<Etap> = [];
  popupwindow: boolean = true;
  popuptext: string;

  constructor(private activateRoute: ActivatedRoute, private repository: Repository, private router: Router) {
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
      this.timer = timer(1, 1000).subscribe(t => {
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
            this.summa[i] = (this.min - 5) * this.nameGamesOpis[i].shtrafball;
          } else {
            this.summa[i] = this.nameGamesOpis[i].ball * this.nameGamesOpis[i].shtrafball;
          }
        } else {
          this.summa[i] = this.nameGamesOpis[i].ball * this.nameGamesOpis[i].shtrafball;
        }
      }
    }
    this.allSumma = this.summa.reduce((a, b) => a + b);
    // console.log(this.summa);

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
    // switch (this.su) {
    //   // @ts-ignore
    //   case '1': {
    this.userEtap[0]['su' + this.su] = this.allSumma;
    this.userEtap[0]['timesu' + this.su] = this.allSec;
    //     break;
    //   }
    //   // @ts-ignore
    //   case '2': {
    //     this.userEtap[0].su2 = this.allSumma;
    //     break;
    //   }
    //   // @ts-ignore
    //   case '3': {
    //     this.userEtap[0].su3 = this.allSumma;
    //     break;
    //   }
    //   // @ts-ignore
    //   case '4': {
    //     this.userEtap[0].su4 = this.allSumma;
    //     break;
    //   }
    //   // @ts-ignore
    //   case '5': {
    //     this.userEtap[0].su5 = this.allSumma;
    //     break;
    //   }
    // }
    // this.userEtap[0].summa = this.userEtap[0].su1 + this.userEtap[0].su2 + this.userEtap[0].su3
    //   + this.userEtap[0].su4 + this.userEtap[0].su5;
    this.etap.push({
      id: this.userEtap[0].id, gameid: this.userEtap[0].gameid, userid: this.userEtap[0].userid,
      nomeruser: this.userEtap[0].nomeruser, factoruser: this.userEtap[0].factoruser, su1: this.userEtap[0].su1,
      su2: this.userEtap[0].su2, su3: this.userEtap[0].su3, su4: this.userEtap[0].su4, su5: this.userEtap[0].su5,
      timesu1: this.userEtap[0].timesu1, timesu2: this.userEtap[0].timesu2, timesu3: this.userEtap[0].timesu3,
      timesu4: this.userEtap[0].timesu4, timesu5: this.userEtap[0].timesu5
    });
    for (let i = 0; i < this.nameGamesOpis.length; i++) {
      if (this.nameGamesOpis[i].ball != 0) {
        this.userEtapStata.push({
          nomeretap: this.userEtap[0].gameid,
          nameetap: this.userEtap[0].namegames,
          nomersu: this.su,
          nomeruser: this.userEtap[0].userid,
          nameuser: this.userEtap[0].username,
          nameshtraf: this.nameGamesOpis[i].shtrafname,
          sum: this.nameGamesOpis[i].ball
        });
      }
    }
    console.log(this.userEtapStata);
    this.popup(1);
    this.repository.saveEtap(this.etap[0]).subscribe(rec => {
      this.repository.saveUserEtapStata(this.userEtapStata).subscribe(rec => {
        this.popupwindow = true;
        this.router.navigate(['/su1', this.game])
      }, error => {
        this.popup(2);
      });
    }, error => {
      this.popup(2);
    });

  }

  private popup(i: number) {
    this.popupwindow = false;
    if (i == 2) {
      this.popuptext = "Ошибка записи. Проверте интернет и повторите попытку";
    } else {
      this.popuptext = 'Идет запись. Пожалуйста подождите';
    }
  }
}
