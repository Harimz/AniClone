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

type Links = {
  first: string | null;
  last: string | null;
  next: string | null;
  prev: string | null;
};

type MetaLinks = {
  active: boolean | null;
  label: string | null;
  url: string | null;
};

type Meta = {
  current_page: number | null;
  from: number | null;
  last_page: number | null;
  links: MetaLinks[];
  path: string;
  per_page: number;
  to: number;
  total: number;
};

type PaginationItem = {
  count: number;
  per_page: number;
  total: number;
};

type Pagination = {
  current_page: number;
  has_next_page: true;
  items: PaginationItem[];
  last_visible_page: number;
};

type TrendingAnimeResponseData = {
  data: Anime[];
  links: Links;
  meta: Meta;
  pagination: Pagination;
};

type AnimeResponse = {
  data: {
    mal_id: number;
    url: string;
    images: {
      jpg: ImageDetails;
      webp: ImageDetails;
    };
    trailer: {
      youtube_id: string;
      url: string;
      embed_url: string;
    };
    approved: boolean;
    titles: TitleType[];
    title: string;
    title_english: string;
    title_japanese: string;
    title_synonyms: string[];
    type: string;
    source: string;
    episodes: number;
    status: string;
    airing: boolean;
    aired: {
      from: string;
      to: string;
      prop: Record<string, unknown>;
    };
    duration: string;
    rating: string;
    score: number;
    scored_by: number;
    rank: number;
    popularity: number;
    members: number;
    favorites: number;
    synopsis: string;
    background: string;
    season: string;
    year: number;
    broadcast: {
      day: string;
      time: string;
      timezone: string;
      string: string;
    };
    producers: OrganizationType[];
    licensors: OrganizationType[];
    studios: OrganizationType[];
    genres: OrganizationType[];
    explicit_genres: OrganizationType[];
    themes: OrganizationType[];
    demographics: OrganizationType[];
    relations: RelationType[];
    theme: {
      openings: string[];
      endings: string[];
    };
    external: ExternalType[];
    streaming: ExternalType[];
  };
};

type ImageDetails = {
  image_url: string;
  small_image_url: string;
  large_image_url: string;
};

type TitleType = {
  type: string;
  title: string;
};

type OrganizationType = {
  mal_id: number;
  type: string;
  name: string;
  url: string;
};

type RelationType = {
  relation: string;
  entry: OrganizationType[];
};

type ExternalType = {
  name: string;
  url: string;
};

export default TrendingAnimeResponseData;
