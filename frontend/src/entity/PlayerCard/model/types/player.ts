export interface PlayersList {
  page: number;
  total: number;
  totalPages: number;
  players: Player[];
}

export interface Player {
  player: {
    id: string;
    name: string;
    age: number;
    photo: string;
    birth: string;
    height: string;
    weight: string;
  };
  team: {
    name: string;
    logo: string;
  };
  league: {
    name: string;
    logo: string;
  };
  games: {
    appearances: number;
    position: string;
    rating: number;
    captain: boolean;
  };
  goals: {
    total: number;
    conceded: number;
    assists: number;
    saves: number;
  };
  passes: {
    total: number;
    key: number;
  };
  cards: {
    yellow: number;
    yellowred: number;
    red: number;
  };
  penalty: {
    won: number;
    committed: number;
    scored: number;
    missed: number;
    saved: number;
  };
  duels: {
    total: number;
    won: number;
  };
}
