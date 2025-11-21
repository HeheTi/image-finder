import type { IPixabayImage, TLargeImagePayload } from '../../model/types';

import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';

import s from './ImageGallery.module.scss';

export interface IImageGalleryProps {
  images: IPixabayImage[];
  onSelect: (image: TLargeImagePayload) => void;
  classNameWrapper?: string;
}

const ImageGallery = ({ images, onSelect, classNameWrapper }: IImageGalleryProps) => {
  return (
    <div className={classNameWrapper}>
      {images.length > 0 && (
        <ul className={s.imageGallery}>
          {images.map(({ id, largeImageURL, webformatURL, tags }) => (
            <ImageGalleryItem
              key={id}
              webformatURL={webformatURL}
              tags={tags}
              onClick={() => onSelect({ largeImageURL, tags })}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ImageGallery;
