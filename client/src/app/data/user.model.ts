export class UserModel {
  constructor(
    public id: number,
    public usernumber: number,
    public username: string,
    public factor: number) {
  }
}
export class NameGames {
  constructor(
    public id: number,
    public namegames: string,
    public priznak: number,
    public shtrafid: number,
    public su: number) {
  }
}
