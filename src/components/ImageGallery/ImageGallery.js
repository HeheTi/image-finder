import PropTypes from 'prop-types';
import Modal from 'components/Modal';
import ImageGalleryItem from './ImageGalleryItem';
import { toast } from 'react-toastify';
import { useState, useEffect } from 'react';
import { fetchImages } from 'servises/api';
import css from './ImageGallery.module.css';

const INITIAL_LARG_IMG = {
  url: '',
  tags: '',
};

const ImageGallery = ({ page, query, showLoader, setTotalH }) => {
  const [images, setImages] = useState([]);
  const [largeImg, setLargeImg] = useState({ ...INITIAL_LARG_IMG });

  useEffect(() => {
    const fetchPicturesForShow = async () => {
      showLoader();

      try {
        const { totalHits, hits } = await fetchImages(query, page);

        if (totalHits === 0) {
          toast.info(
            `On request - ${query} nothing found, please enter another word`
          );
        }

        setImages(state => (page === 1 ? [...hits] : [...state, ...hits]));
        setTotalH(totalHits);
      } catch (error) {
        toast.error(
          'Something went wrong, reload the page and try to find something else'
        );
      } finally {
        showLoader();
      }
    };

    fetchPicturesForShow();
  }, [page, query, setTotalH, showLoader]);

  const closeModal = () => setLargeImg({ ...INITIAL_LARG_IMG });

  const showModalBigImg = (largeImg, tags) =>
    setLargeImg({
      url: largeImg,
      tags,
    });

  return (
    <>
      {images.length > 0 && (
        <ul className={css.imageGallery}>
          {images.map(({ largeImageURL, webformatURL, tags }) => (
            <ImageGalleryItem
              key={webformatURL}
              pic={webformatURL}
              tags={tags}
              onClick={() => showModalBigImg(largeImageURL, tags)}
            />
          ))}
        </ul>
      )}

      {largeImg.url && <Modal img={largeImg} onCloseModal={closeModal} />}
    </>
  );
};

ImageGallery.propTypes = {
  page: PropTypes.number.isRequired,
  query: PropTypes.string.isRequired,
  showLoader: PropTypes.func.isRequired,
  setTotalH: PropTypes.func.isRequired,
};

export default ImageGallery;
