type AnimePicturesResponse = {
  data: AnimePicture[];
};

type AnimePicture = {
  jpg: {
    image_url: string | null;
    large_image_url: string | null;
    small_image_url: string | null;
  };
  webp: {
    image_url: string | null;
    large_image_url: string | null;
    small_image_url: string | null;
  };
};

export default AnimePicturesResponse;
