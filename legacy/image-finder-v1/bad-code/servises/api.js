const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '24468918-f1629215ca3337ba51b4044a7';

const fetchImages = (serchQuery, page) => {
  const url = `${BASE_URL}/?q=${serchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=20
`;
  return fetch(url).then(res =>
    res.ok ? res.json() : Promise.reject(new Error('Something went wrong'))
  );
};

export { fetchImages };
