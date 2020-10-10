
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
    public Division: string,
    public RatingChange: number,
    public Count: number,
    public Rating: number,
    public Position: number,
    public Member: string,
    public MemberID: string,
    public Town: string) {
  }
}

export class RatingPilotov {
  constructor(
    public MemberID: string,
    public Member: string,
    public Town: string,
    public League: Array<RatingPilotovLeague>
  ) {
  }
}

export class RatingPilotovLeague {
  constructor(
    public LeagueName: string,
    public Tournaments: Array<RatingPilotovLeagueTournaments>
  ) {
  }
}

export class RatingPilotovLeagueTournaments {
  constructor(
    public TournamentName: string,
    public TournamentPosition: number,
    public TournamentOrganizer: string,
    public TournamentDate: Date,
    public TournamentClass: string,
    public TournamentModel: string,
    public TournamentPenaltyPoints: number
  ) {
  }
}

export class VkPhoto {
  constructor(
    public photo_1280: string
  ) {
  }
}
export class VkWall {
  constructor(
    public copy_history: object,
    public owner_id: string,
    public text: string,
    public attachments: object,
    // public video: object,
    // public link: object,
    // public photo: object,
    // public photo_604: string
  ) {
  }
}
