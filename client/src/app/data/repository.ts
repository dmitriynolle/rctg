import {Injectable} from '@angular/core';
import {NameGames, UserModel} from './user.model';
import {HttpClient} from '@angular/common/http';
import {Etap} from './registration';
import {ShtrafBall} from './shtraf';

@Injectable({providedIn: 'root'})
export class Repository {
//  users: UserModel [];
  path = 'http://rctrophy.ru/api/';

  constructor(private http: HttpClient) {
  }

  getUsers() {
    return this.http.get(this.path + 'users');
  }

  getShtrafBall() {
    return this.http.get(this.path + 'shtrafball');
  }

  getNameGames(priznak: number) {
    return this.http.get(this.path + 'namegames?priznak=' + priznak);
  }

  getGameOpis(namegame: string) {
    return this.http.get(this.path + 'opis?namegames=' + namegame);
  }

  getGamesId(gameid: number) {
    return this.http.get(this.path + 'gameid?gameid=' + gameid);
  }

  getSelectUsers(gameid: number) {
    return this.http.get(this.path + 'selectusers?gameid=' + gameid);
  }

  getUserEtap(gameid: number, userid?: number) {
    return this.http.get(this.path + 'selectuser?gameid=' + gameid + '&userid=' + userid);
  }

  getNameGame(gamename) {
    return this.http.get(this.path + 'selectgame?gamename=' + gamename);
  }

  saveNameGames(nameGames: NameGames[]) {
    return this.http.post(this.path + 'savenamegames', nameGames);
  }

  saveNameUser(nameUser: UserModel) {
    return this.http.post(this.path + 'saveusername', nameUser);
  }

  saveEtap(etap: Etap) {
    return this.http.post(this.path + 'saveetap', etap).subscribe((saveEtap: Etap) => {
      this.getUsers();
    });
  }

  saveShtraf(shtraf: ShtrafBall) {
    return this.http.post(this.path + 'saveshtraf', shtraf);
  }
}
