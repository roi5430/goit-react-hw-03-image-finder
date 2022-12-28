import css from './ImageGalleryItem.module.css';
import { Component } from 'react';
import { Modal } from '../Modal/Modal';

export class ImageGalleryItem extends Component {
  state = {
    largeImage: '',
    showModal: false,
  };

  toggleModal = () => {
    this.setState(state => ({ showModal: !state.showModal }));
  };

  render() {
    const { webformatURL, tags, largeImageURL, showModal } = this.props;
    return (
      <>
        <li className={css.ImageGalleryItem} onClick={this.toggleModal}>
          <img
            className={css.ImageGalleryItem__image}
            src={webformatURL}
            alt={tags}
            url={largeImageURL}
          />
        </li>
        {this.state.showModal && (
          <Modal onClose={this.toggleModal} showModal={showModal}>
            <img src={largeImageURL} alt={tags} />
          </Modal>
        )}
      </>
    );
  }
}
