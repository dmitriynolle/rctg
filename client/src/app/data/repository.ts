import {Injectable} from '@angular/core';
import {NameGames, UserModel} from './user.model';
import {HttpClient} from '@angular/common/http';
import {Etap} from './registration';
import {ShtrafBall, UserEtapStata} from './shtraf';

@Injectable({providedIn: 'root'})
export class Repository {
  path = 'http://rctrophy.ru/api/';
  // path = 'http://localhost:8080/'

  constructor(private http: HttpClient) {
  }

  getSecret() {
    return this.http.get('assets/secret.json');
  }

  getRatingNN() {
    return this.http.get('assets/ReytingRCTG_Nizniy_Novgorod.json');
  }

  getRatingGlobal() {
    return this.http.get('assets/ReytingGlobalnaya_liga.json');
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

  getUserEtapStata(gameId: number, userId: number) {
    return this.http.get(this.path + 'selectstata?nomeretap=' + gameId + '&nomeruser=' + userId);
  }

  saveNameGames(nameGames: NameGames[]) {
    return this.http.post(this.path + 'savenamegames', nameGames);
  }

  saveNameUser(nameUser: UserModel) {
    return this.http.post(this.path + 'saveusername', nameUser);
  }

  saveEtap(etap: Etap) {
    return this.http.post(this.path + 'saveetap', etap)
  }

  saveShtraf(shtraf: ShtrafBall) {
    return this.http.post(this.path + 'saveshtraf', shtraf);
  }

  saveUserEtapStata(userEtapStata: UserEtapStata[]) {
    return this.http.post(this.path + 'savestata', userEtapStata);
  }

  saveSprint(sprint: Etap[]) {
    return this.http.post(this.path + 'savesprint', sprint);
  }
}
