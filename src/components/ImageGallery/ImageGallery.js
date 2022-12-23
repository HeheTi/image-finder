import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { toast } from 'react-toastify';
import ImageGalleryItem from './ImageGalleryItem';
import css from './ImageGallery.module.css';
import { fetchImages } from 'servises/api';
import Modal from 'components/Modal';

const INITIAL_LARG_IMG = {
  url: '',
  tags: '',
  error: null,
};

export default class ImageGallery extends Component {
  static propTypes = {
    page: PropTypes.number.isRequired,
    query: PropTypes.string.isRequired,
    showLoader: PropTypes.func.isRequired,
    setTotalPages: PropTypes.func.isRequired,
  };

  state = {
    images: [],
    largeImg: { ...INITIAL_LARG_IMG },
    error: null,
  };

  componentDidMount() {
    this.fetchPicturesForShow();
  }

  componentDidUpdate(prevProps, _) {
    const { page, query } = this.props;

    if (prevProps.page !== page || prevProps.query !== query) {
      this.fetchPicturesForShow();
    }
  }

  fetchPicturesForShow = async () => {
    const { page, query, showLoader, setTotalPages } = this.props;
    showLoader();

    try {
      const { totalHits, hits } = await fetchImages(query, page);

      if (totalHits === 0) {
        toast.info(
          `On request - ${query} nothing found, please enter another word`
        );
      }

      this.setState(prevState => ({
        images: page === 1 ? [...hits] : [...prevState.images, ...hits],
      }));

      setTotalPages(totalHits);
    } catch (error) {
      toast.error(
        'Something went wrong, reload the page and try to find something else'
      );
    } finally {
      showLoader();
    }
  };

  closeModal = () => this.setState({ largeImg: { ...INITIAL_LARG_IMG } });

  showModalBigImg = (largeImg, tags) =>
    this.setState({
      largeImg: {
        url: largeImg,
        tags,
      },
    });

  render() {
    const { images, largeImg } = this.state;

    return (
      <>
        {images.length > 0 && (
          <ul className={css.imageGallery}>
            {images.map(({ largeImageURL, webformatURL, tags }) => (
              <ImageGalleryItem
                key={webformatURL}
                pic={webformatURL}
                tags={tags}
                onClick={() => this.showModalBigImg(largeImageURL, tags)}
              />
            ))}
          </ul>
        )}

        {largeImg.url && (
          <Modal img={largeImg} onCloseModal={this.closeModal} />
        )}
      </>
    );
  }
}
