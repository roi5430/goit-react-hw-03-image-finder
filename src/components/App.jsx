import React, { Component } from 'react';
import css from './App.module.css';
// import { RotatingLines } from 'react-loader-spinner';

// import { ToastContainer } from 'react-toastify';
// toast.error('введіть слово для пошуку');
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
// import { Modal } from './Modal/Modal';
import { getByText } from '../api-client';

// async componentDidMount() {
//   const response = await axios.get("/search?query=react");
//   this.setState({ articles: response.data.hits });
// }

export class App extends Component {
  state = {
    page: 1,
    text: '',
    imageItems: [],
    isLoading: false,
    showModal: false,
    error: null,
  };

  handleSubmit = text => {
    this.setState({ text: text, page: 1 });
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  componentDidMount() {
    const items = getByText('nature', 1);
    console.log(items);
    this.setState({
      imageItems: items,
    });
  }

  componentDidUpdate(_, prevState) {
    if (
      prevState.page !== this.state.page ||
      prevState.text !== this.state.text
    ) {
      console.log('не дурне');
    }
  }

  render() {
    return (
      <section className={css.App}>
        <Searchbar onSubmit={this.handleSubmit} />

        <ImageGallery />

        {/* <Loader /> */}
        {/* <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        /> */}
        {this.state.imageItems.length > 12 && (
          <Button onClick={this.loadMore} />
        )}

        {/* <Modal /> */}

        {/* <ToastContainer autoClose={3000} /> */}
      </section>
    );
  }
}
