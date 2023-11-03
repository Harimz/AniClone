type AnimeDetailsData = {
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

export default AnimeDetailsData;
