import type { Player } from "./types/player";

export const playerMockData: Player = {
  player: {
    id: "1",
    name: "Bukayo Saka",
    age: 29,
    photo: "src/entity/PlayerCard/ui/mockImages/Player.svg",
    birth: "September 5, 2001",
    height: "1,78m",
    weight: "69kg",
  },
  team: {
    name: "Arsenal F.C",
    logo: "src/entity/PlayerCard/ui/mockImages/ClubIcon.svg",
  },
  league: {
    name: "UEFA Champions League",
    logo: "/src/entity/TeamCard/ui/mockImgs/UEFA.svg",
  },
  games: {
    appearances: 11,
    position: "Forward",
    rating: 6,
    captain: true,
  },
  goals: {
    total: 4,
    conceded: 2,
    assists: 6,
    saves: 12,
  },
  passes: {
    total: 25,
    key: 2,
  },
  cards: {
    yellow: 0,
    yellowred: 0,
    red: 0,
  },
  penalty: {
    won: 1,
    committed: 2,
    scored: 1,
    missed: 0,
    saved: 3,
  },
  duels: {
    total: 65,
    won: 27,
  },
};
