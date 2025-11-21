import { useCallback, useEffect, useState } from 'react';
import { PER_PAGE, type IPixabayImage } from './types';
import { fetchImages } from '../api/pixabay';

export const useImageSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [totalHits, setTotalHits] = useState(0);
  const [images, setImages] = useState<IPixabayImage[]>([]);

  const [error, setError] = useState<string | null>(null);
  const [noResults, setNoResults] = useState(false);

  const onChangeSearchQuery = useCallback((query: string): void => {
    setSearchQuery(query);
    setPage(1);
  }, []);

  const incrementPage = (): void => setPage(state => state + 1);

  const totalPages = Math.ceil(totalHits / PER_PAGE);
  const hasMore = totalPages > 1 && totalPages >= page + 1;

  useEffect(() => {
    if (!searchQuery.trim()) return;

    let cancelled = false;

    const fetchPicturesForShow = async () => {
      setError(null);
      setNoResults(false);
      setIsLoading(true);

      try {
        const { totalHits, hits } = await fetchImages(searchQuery, page);
        if (cancelled) return;

        if (totalHits === 0) {
          setNoResults(true);
        }

        setImages(state => (page === 1 ? [...hits] : [...state, ...hits]));
        setTotalHits(totalHits);
      } catch (error) {
        if (cancelled) return;
        console.log('🚀 ~ fetchPicturesForShow ~ error:', error);
        setError('Something went wrong, reload the page and try to find something else');
      } finally {
        if (!cancelled) {
          setIsLoading(false);
        }
      }
    };

    fetchPicturesForShow();

    return () => {
      cancelled = true;
    };
  }, [page, searchQuery]);

  return {
    images,
    onChangeSearchQuery,
    isLoading,
    hasMore,
    incrementPage,
    error,
    noResults,
  };
};
