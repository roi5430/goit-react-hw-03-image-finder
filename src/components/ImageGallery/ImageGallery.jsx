import css from './ImageGallery.module.css';
// import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ items }) => {
  return (
    <ul className={css.ImageGallery}>
      {/* {items.map(item => {
        return <ImageGalleryItem item={item} />;
      })} */}
    </ul>
  );
};

// const imageList = ({ items }) => (
//   <ul>
//     {items.map(({ id, urlSmall, urlLarge }) => (
//       <li key={id}>
//         <a href={} target="_blank" rel="noreferrer noopener">
//
//         </a>
//       </li>
//     ))}
//   </ul>
// );
