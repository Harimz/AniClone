type AnimeEpisode = {
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

interface Pagination {
  last_visible_page: number;
  has_next_page: boolean;
}

interface AnimeEpisodesData {
  data: AnimeEpisode[];
  pagination: Pagination;
}

export default AnimeEpisodesData;
