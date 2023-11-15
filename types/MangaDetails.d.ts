type MangaDetailsData = {
  data: {
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
    approved: boolean;
    titles: Array<{
      type: string;
      title: string;
    }>;
    title: string;
    title_english: string;
    title_japanese: string;
    title_synonyms: string[];
    type: string;
    chapters: number;
    volumes: number;
    status: string;
    publishing: boolean;
    published: {
      from: string;
      to: string;
      prop: {
        from: {
          day: number;
          month: number;
          year: number;
        };
        to: {
          day: number;
          month: number;
          year: number;
        };
        string: string;
      };
    };
    score: number;
    scored_by: number;
    rank: number;
    popularity: number;
    members: number;
    favorites: number;
    synopsis: string;
    background: string;
    authors: Array<{
      mal_id: number;
      type: string;
      name: string;
      url: string;
    }>;
    serializations: Array<{
      mal_id: number;
      type: string;
      name: string;
      url: string;
    }>;
    genres: Array<{
      mal_id: number;
      type: string;
      name: string;
      url: string;
    }>;
    explicit_genres: Array<{
      mal_id: number;
      type: string;
      name: string;
      url: string;
    }>;
    themes: Array<{
      mal_id: number;
      type: string;
      name: string;
      url: string;
    }>;
    demographics: Array<{
      mal_id: number;
      type: string;
      name: string;
      url: string;
    }>;
    relations: Array<{
      relation: string;
      entry: Array<{
        mal_id: number;
        type: string;
        name: string;
        url: string;
      }>;
    }>;
    external: Array<{
      name: string;
      url: string;
    }>;
  };
};

export default MangaDetailsData;
