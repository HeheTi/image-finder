export const PER_PAGE = 20;

export interface IPixabayImage {
  id: number;
  largeImageURL: string;
  webformatURL: string;
  tags: string;
}

export type TLargeImagePayload = Pick<IPixabayImage, 'largeImageURL' | 'tags'>;

export interface IPixabayResponse {
  total: number;
  totalHits: number;
  hits: IPixabayImage[];
}
