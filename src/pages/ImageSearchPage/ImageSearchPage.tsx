import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { useImageSearch } from '@/features/image-search/model/useImageSearch';

import type { TLargeImagePayload } from '@/features/image-search/model/types';

import { ImageGallery, SearchBar } from '@/features/image-search';
import { Button, Modal, Loader } from '@/shared/ui';

import s from './ImageSearchPage.module.scss';

const ImageSearchPage = () => {
  const { images, onChangeSearchQuery, isLoading, hasMore, incrementPage, error, noResults } =
    useImageSearch();

  const [largeImg, setLargeImg] = useState<TLargeImagePayload | null>(null);
  const closeModal = () => setLargeImg(null);

  const handleSelectImage = ({ largeImageURL, tags }: TLargeImagePayload): void =>
    setLargeImg({
      largeImageURL,
      tags,
    });

  useEffect(() => {
    if (error) toast.error(error);
    if (noResults) toast.info('Nothing found, please enter another word');
  }, [error, noResults]);

  // First open - load cats
  useEffect(() => {
    onChangeSearchQuery('cats');
  }, [onChangeSearchQuery]);

  return (
    <div className={s.wrapper}>
      <SearchBar isLoading={isLoading} onSearch={onChangeSearchQuery} />

      <div className="container">
        <ImageGallery
          images={images}
          onSelect={handleSelectImage}
          classNameWrapper={s.wrapperGallery}
        />

        {largeImg && (
          <Modal onCloseModal={closeModal}>
            <div>
              <img src={largeImg.largeImageURL} alt={largeImg.tags} />
            </div>
          </Modal>
        )}

        {hasMore && (
          <Button disabled={isLoading} onClick={incrementPage} classNameButton={s.buttonLoadMore}>
            Load more
          </Button>
        )}
      </div>
      {isLoading && <Loader />}
    </div>
  );
};

export default ImageSearchPage;
