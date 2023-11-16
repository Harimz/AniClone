type Image = {
  image_url: string;
  small_image_url: string;
  large_image_url: string;
};

type Title = {
  type: string;
  title: string;
};

type DateProp = {
  day: number;
  month: number;
  year: number;
};

type Published = {
  from: string;
  to: string;
  prop: {
    from: DateProp;
    to: DateProp;
    string: string;
  };
};

type Person = {
  mal_id: number;
  type: string;
  name: string;
  url: string;
};

type Genre = {
  mal_id: number;
  type: string;
  name: string;
  url: string;
};

// Now define the main data type

export type Manga = {
  mal_id: number;
  url: string;
  images: {
    jpg: Image;
    webp: Image;
  };
  approved: boolean;
  titles: Title[];
  title: string;
  title_english: string;
  title_japanese: string;
  type: "Manga";
  chapters: number;
  volumes: number;
  status: "Finished";
  publishing: boolean;
  published: Published;
  score: number;
  scored_by: number;
  rank: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string;
  background: string;
  authors: Person[];
  serializations: Person[];
  genres: Genre[];
  explicit_genres: Genre[];
  themes: Genre[];
  demographics: Genre[];
};

export type MangaCharacterData = {
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
};

export type MangaReviewItem = {
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
