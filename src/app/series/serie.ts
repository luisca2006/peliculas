export class Serie {
  id: number;
  name: string;
  channel: string;
  seasons: number;
  cover: string;
  synopsis: string;

  constructor(
    id: number,
    name: string,
    channel: string,
    seasons: number,
    cover: string,
    synopsis: string
  ) {
    this.id = id;
    this.name = name;
    this.channel = channel;
    this.seasons = seasons;
    this.cover = cover;
    this.synopsis = synopsis;
  }
}
