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
    public su: number,
    public ball: number,
    public factor: boolean) {
  }
}

export class NameGamesView {
  constructor(
    public id: number,
    public namegames: string,
    public shtrafid: number,
    public shtrafname: string,
    public shtrafball: number,
    public ball: number,
    public factor: boolean) {
  }
}

export class RatingNN {
  constructor(
    public divisionUser: string,
    public changeRating: number,
    public numberOfCompetitions: number,
    public rating: number,
    public nomer: number,
    public user: string,
    public userID: string,
    public locality: string) {
  }
}
