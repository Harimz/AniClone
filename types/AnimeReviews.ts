type AnimeReviewsData = {
  data: ReviewItem[];
  pagination: {
    last_visible_page: number;
    has_next_page: boolean;
  };
};

export type ReviewItem = {
  user: {
    username: string;
    url: string;
    images: {
      jpg: {
        image_url: string;
      };
      webp: {
        image_url: string;
      };
    };
  };
  mal_id: number;
  url: string;
  type: string;
  reactions: {
    overall: number;
    nice: number;
    love_it: number;
    funny: number;
    confusing: number;
    informative: number;
    well_written: number;
    creative: number;
  };
  date: string;
  review: string;
  score: number;
  tags: string[];
  is_spoiler: boolean;
  is_preliminary: boolean;
  episodes_watched: number;
};

export default AnimeReviewsData;
