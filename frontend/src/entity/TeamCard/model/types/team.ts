interface Country {
  name: string;
  code: string;
  flag: string;
}

export interface Team {
  team: {
    id: string;
    name: string;
    logo: string;
    founded: number;
  };
  league: {
    id: string;
    name: string;
    logo: string;
    country: Country;
  };
  venue: {
    name: string;
    image: string;
    capacity: number;
    address: string;
  };
  stats: {
    played: number;
    wins: number;
    draws: number;
    loses: number;
    goals: number;
  };
}
