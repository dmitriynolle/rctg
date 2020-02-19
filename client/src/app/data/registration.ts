export class Etap {
  constructor(
    public id: number,
    public gameid: number,
    public userid: number,
    public nomeruser: number,
    public factoruser: number,
    public su1: number,
    public su2: number,
    public su3: number,
    public su4: number,
    public su5: number,
    public timesu1: number,
    public timesu2: number,
    public timesu3: number,
    public timesu4: number,
    public timesu5: number,
    public time: number,
    public summa: number
  ) {
  }
}

export class EtapView {
  constructor(
    public id: number,
    public gameid: number,
    public namegames: string,
    public userid: number,
    public nomeruser: number,
    public username: string,
    public factoruser: number,
    public su1: number,
    public su2: number,
    public su3: number,
    public su4: number,
    public su5: number,
    public timesu1: number,
    public timesu2: number,
    public timesu3: number,
    public timesu4: number,
    public timesu5: number,
    public time: number,
    public summa: number
  ) {
  }
}
