type UserData = {
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

type ReactionData = {
  overall: number;
  nice: number;
  love_it: number;
  funny: number;
  confusing: number;
  informative: number;
  well_written: number;
  creative: number;
};

type ReviewData = {
  user: UserData;
  mal_id: number;
  url: string;
  type: string;
  reactions: ReactionData;
  date: string;
  review: string;
  score: number;
  tags: string[];
  is_spoiler: boolean;
  is_preliminary: boolean;
};

type PaginationData = {
  last_visible_page: number;
  has_next_page: boolean;
};

type MangaReviewsData = {
  data: ReviewData[];
  pagination: PaginationData;
};

export default MangaReviewsData;
