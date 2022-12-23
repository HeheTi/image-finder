import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ pic, tags, onClick }) => {
  return (
    <li className={css.item} onClick={onClick}>
      <img src={pic} alt={tags} className={css.image} loading="lazy" />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  pic: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
