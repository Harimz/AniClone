export type AnimeStats = {
  watching: number;
  completed: number;
  on_hold: number;
  dropped: number;
  plan_to_watch: number;
  total: number;
  scores: {
    score: number;
    votes: number;
    percentage: number;
  };
};

type AnimeStatsData = {
  data: AnimeStats;
};

export default AnimeStatsData;
