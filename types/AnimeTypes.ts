export type AnimeCharacter = {
  character: {
    mal_id: number;
    url: string;
    images: {
      jpg: {
        image_url: string;
        small_image_url: string;
      };
      webp: {
        image_url: string;
        small_image_url: string;
      };
    };
    name: string;
  };
  role: string;
  voice_actors: {
    person: {
      mal_id: number;
      url: string;
      images: {
        jpg: {
          image_url: string;
        };
      };
      name: string;
    };
    language: string;
  }[];
};

export type AnimeEpisode = {
  mal_id: number;
  title: string;
  episode: string;
  url: string;
  images: {
    jpg: {
      image_url: string;
    };
  };
};

export type AnimeEntry = {
  entry: {
    mal_id: number;
    url: string;
    images: {
      jpg: {
        image_url: string;
        small_image_url: string;
        large_image_url: string;
      };
      webp: {
        image_url: string;
        small_image_url: string;
        large_image_url: string;
      };
    };
    title: string;
  };
};

type DateObject = {
  day: number;
  month: number;
  year: number;
};

type Aired = {
  from: string;
  to: string;
  prop: DateObject;
  string: string;
};

type Broadcast = {
  day: string | null;
  time: string | null;
  timezone: string | null;
  string: string | null;
};

type Demographics = {
  mal_id: number;
  name: string;
  type: string;
  url: string;
};

type Genres = {
  mal_id: number;
  name: string;
  type: string;
  url: string;
};

type ImageUrls = {
  image_url: string | null;
  large_image_url: string | null;
  small_image_url: string | null;
};

type ImageFormats = {
  jpg: ImageUrls;
  webp: ImageUrls;
};

type Trailer = {
  youtube_id: string;
  url: string;
  embed_url: string;
  images: Record<string, unknown>;
};

export type Anime = {
  aired: Aired;
  airing: boolean;
  approved: boolean;
  background: string;
  broadcast: Broadcast;
  demographics: Demographics[];
  duration: string;
  episodes: number;
  explicit_genres: string[];
  favorites: number;
  genres: Genres[];
  images: ImageFormats;
  licensors: string[];
  mal_id: number;
  members: number;
  popularity: number;
  producers: Record<string, unknown>[];
  rank: number;
  rating: string;
  score: number;
  scored_by: number;
  season: string | null;
  source: string;
  status: string;
  studios: Record<string, unknown>[];
  synopsis: string;
  themes: Record<string, unknown>[];
  title: string;
  title_english: string;
  title_japanese: string;
  title_synonyms: string[];
  titles: Record<string, unknown>[];
  trailer: Trailer;
  type: string;
  url: string;
  year: number | null;
};

export type AnimeStaff = {
  person: {
    mal_id: number;
    url: string;
    images: {
      jpg: {
        image_url: string;
      };
    };
    name: string;
  };
  positions: string[];
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
