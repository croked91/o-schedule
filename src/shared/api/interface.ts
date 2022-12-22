export interface ITVShow {
  name: string;
  time: string;
  length: 3600;
  announce: {
    id: string;
    title: string;
    short_text: string;
    agerating: string;
    year: string;
    type: string;
    genre: string;
    image: {
      title: string;
      path: string;
    };
  };
}
