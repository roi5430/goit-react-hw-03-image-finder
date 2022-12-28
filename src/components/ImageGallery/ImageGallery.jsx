import css from './ImageGallery.module.css';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ galleryItems, showModal }) => {
  return (
    <ul className={css.ImageGallery}>
      {galleryItems.map(item => (
        <ImageGalleryItem
          item={item}
          key={item.id}
          showModal={showModal}
          webformatURL={item.webformatURL}
          tags={item.tags}
          largeImageURL={item.largeImageURL}
        />
      ))}
    </ul>
  );
};
