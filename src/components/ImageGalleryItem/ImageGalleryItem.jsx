import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ item }) => {
  const { id } = item;
  return (
    <li className={css.ImageGalleryItem} key={id}>
      <img src="{}" alt="" className={css.ImageGalleryItem__image} />
    </li>
  );
};
