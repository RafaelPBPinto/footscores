import type { Fixture } from "../types/fixture";
import type { Standings } from "../types/standings";

export const dummyFixture: Fixture[] = [
    {
        fixture: {
                id: 239625,
                referee: null,
                timezone: "UTC",
                date: "2020-02-06T14:00:00+00:00",
                timestamp: 1580997600,
                periods: {
                first: 1580997600,
                second: null,
            },
                venue: {
                id: 1887,
                name: "Stade Municipal",
                city: "Oued Zem",
            },
                status: {
                long: "Halftime",
                short: "HT",
                elapsed: 45,
                extra: null,
            },
        },
        league: {
            id: 200,
            name: "Botola Pro",
            country: "Morocco",
            logo: "https://media.api-sports.io/football/leagues/115.png",
            flag: "https://media.api-sports.io/flags/ma.svg",
            season: 2019,
            round: "Regular Season - 14",
        },
        teams: {
            home: {
                id: 967,
                name: "Rapide Oued ZEM",
                logo: "https://media.api-sports.io/football/teams/967.png",
                winner: false,
            },
            away: {
                id: 968,
                name: "Wydad AC",
                logo: "https://media.api-sports.io/football/teams/968.png",
                winner: true,
            },
        },
        goals: {
            home: 0,
            away: 1,
        },
        score: {
            halftime: {
                home: 0,
                away: 1,
            },
            fulltime: {
                home: null,
                away: null,
            },
            extratime: {
                home: null,
                away: null,
            },
            penalty: {
                home: null,
                away: null,
            },
        },
    },
];

export const dummyStandings: Standings = {
  id: 39,
  name: "Premier League",
  country: "England",
  logo: "https://media.api-sports.io/football/leagues/39.png",
  flag: "https://media.api-sports.io/flags/gb.svg",
  season: 2019,
  standings: [
    {
      rank: 1,
      team: { id: 40, name: "Liverpool", logo: "https://media.api-sports.io/football/teams/40.png" },
      points: 70,
      goalsDiff: 41,
      group: "Premier League",
      form: "WWWWW",
      status: "same",
      description: "Promotion - Champions League (Group Stage)",
      all: { played: 24, win: 23, draw: 1, lose: 0, goals: { for: 56, against: 15 } },
      home: { played: 12, win: 12, draw: 0, lose: 0, goals: { for: 31, against: 9 } },
      away: { played: 12, win: 11, draw: 1, lose: 0, goals: { for: 25, against: 6 } },
      update: "2020-01-29T00:00:00+00:00"
    },
    {
      rank: 2,
      team: { id: 41, name: "Manchester City", logo: "https://media.api-sports.io/football/teams/50.png" },
      points: 65,
      goalsDiff: 35,
      group: "Premier League",
      form: "WWDWW",
      status: "same",
      description: "Promotion - Champions League (Group Stage)",
      all: { played: 24, win: 21, draw: 2, lose: 1, goals: { for: 60, against: 25 } },
      home: { played: 12, win: 11, draw: 1, lose: 0, goals: { for: 32, against: 12 } },
      away: { played: 12, win: 10, draw: 1, lose: 1, goals: { for: 28, against: 13 } },
      update: "2020-01-29T00:00:00+00:00"
    },
    {
      rank: 3,
      team: { id: 42, name: "Manchester United", logo: "https://media.api-sports.io/football/teams/33.png" },
      points: 58,
      goalsDiff: 25,
      group: "Premier League",
      form: "WDWWW",
      status: "same",
      description: "Promotion - Champions League (Group Stage)",
      all: { played: 24, win: 18, draw: 4, lose: 2, goals: { for: 50, against: 25 } },
      home: { played: 12, win: 10, draw: 2, lose: 0, goals: { for: 28, against: 10 } },
      away: { played: 12, win: 8, draw: 2, lose: 2, goals: { for: 22, against: 15 } },
      update: "2020-01-29T00:00:00+00:00"
    },
    {
      rank: 4,
      team: { id: 43, name: "Chelsea", logo: "https://media.api-sports.io/football/teams/49.png" },
      points: 55,
      goalsDiff: 18,
      group: "Premier League",
      form: "WWDWL",
      status: "same",
      description: "Promotion - Champions League (Group Stage)",
      all: { played: 24, win: 17, draw: 4, lose: 3, goals: { for: 45, against: 27 } },
      home: { played: 12, win: 9, draw: 2, lose: 1, goals: { for: 23, against: 10 } },
      away: { played: 12, win: 8, draw: 2, lose: 2, goals: { for: 22, against: 17 } },
      update: "2020-01-29T00:00:00+00:00"
    },
    {
      rank: 5,
      team: { id: 44, name: "Leicester City", logo: "https://media.api-sports.io/football/teams/46.png" },
      points: 50,
      goalsDiff: 15,
      group: "Premier League",
      form: "WDWWW",
      status: "same",
      description: "Promotion - Europa League (Group Stage)",
      all: { played: 24, win: 15, draw: 5, lose: 4, goals: { for: 42, against: 27 } },
      home: { played: 12, win: 8, draw: 3, lose: 1, goals: { for: 22, against: 12 } },
      away: { played: 12, win: 7, draw: 2, lose: 3, goals: { for: 20, against: 15 } },
      update: "2020-01-29T00:00:00+00:00"
    }
  ]
};
