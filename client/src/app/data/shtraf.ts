export class ShtrafBall {
  constructor(
    public id: number,
    public shtrafid: number,
    public shtrafname: string,
    public shtrafball: number,
    public ball = 0
  ) {
  }
}

export class UserEtapStata {
  public id?: number;
  public nomeretap: number;
  public nameetap: string;
  public nomersu: number;
  public nomeruser: number;
  public nameuser: string;
  public nameshtraf: string;
  public sum: number
}
