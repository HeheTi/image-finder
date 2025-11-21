import s from './ImageGalleryItem.module.scss';

export interface IImageGalleryItemProps {
  webformatURL: string;
  tags: string;
  onClick: () => void;
}

const ImageGalleryItem = ({ webformatURL, tags, onClick }: IImageGalleryItemProps) => {
  return (
    <li className={s.item} onClick={onClick}>
      <img src={webformatURL} alt={tags} className={s.image} loading="lazy" />
    </li>
  );
};

export default ImageGalleryItem;
