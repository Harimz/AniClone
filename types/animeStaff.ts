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

type AnimeStaffData = {
  data: AnimeStaff[];
};

export default AnimeStaffData;
