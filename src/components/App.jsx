import React, { Component } from 'react';
import css from './App.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { API_BASE_URL, API_KEY } from '../api-client';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { ImageSkeleton } from './ImageSkeleton';

export class App extends Component {
  state = {
    page: 1,
    searchText: '',
    imageItems: [],
    isLoading: false,
  };

  async componentDidUpdate(_, prevState) {
    const { searchText, page } = this.state;
    try {
      if (prevState.page !== page || prevState.searchText !== searchText) {
        this.setState({
          isLoading: true,
        });
        await fetch(
          `${API_BASE_URL}?key=${API_KEY}&q=${searchText}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=12`
        )
          .then(res => res.json())
          .then(data =>
            this.setState(result => ({
              imageItems: [...result.imageItems, ...data.hits],
              isLoading: false,
            }))
          );
      }
    } catch {
      toast.error('🦄 something goes wrong =(');
    }
  }

  handleSubmit = searchText => {
    this.setState({ searchText: searchText, page: 1, imageItems: [] });
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { error, isLoading, imageItems } = this.state;
    return (
      <section className={css.App}>
        <Searchbar onSubmit={this.handleSubmit} />
        {error && <p>{toast.error('🦄 something goes wrong =(')}</p>}
        {isLoading && <ImageSkeleton />}
        {imageItems && <ImageGallery galleryItems={imageItems} />}

        {imageItems.length >= 12 && <Button onClick={this.loadMore} />}

        <ToastContainer autoClose={3000} position="top-right" />
      </section>
    );
  }
}
