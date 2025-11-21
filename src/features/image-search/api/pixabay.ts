import { PER_PAGE, type IPixabayResponse } from '../model/types';

const BASE_URL = 'https://pixabay.com/api';

const API_KEY = import.meta.env.VITE_PIXABAY_API_KEY;
if (!API_KEY) {
  throw new Error('Missing VITE_PIXABAY_API_KEY');
}

const fetchImages = async (searchQuery: string, page: number): Promise<IPixabayResponse> => {
  const searchParams = new URLSearchParams({
    key: API_KEY,
    q: searchQuery,
    page: String(page),
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: String(PER_PAGE),
  });

  const url = `${BASE_URL}/?${searchParams.toString()}`;

  const response = await fetch(url);
  if (!response.ok) throw new Error(`Pixabay request failed: ${response.status}`);

  const data: IPixabayResponse = await response.json();
  return data;
};

export { fetchImages };
