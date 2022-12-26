import { Component } from 'react';
import { toast } from 'react-toastify';
import css from './Searchbar.module.css';
import { BiSearch } from 'react-icons/bi';

export class Searchbar extends Component {
  state = {
    text: '',
  };

  handleSubmit = evt => {
    evt.preventDefault();

    const { text } = this.state;
    if (text.trim() === '') {
      toast.error('Fill the search form');
      return;
    }

    this.props.onSubmit(text);
    this.setState({ text: '' });
  };

  handleChange = evt => {
    this.setState({ text: evt.target.value.toLowerCase() });
  };

  render() {
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.SearchForm_button}>
            <BiSearch fill="#000" className={css.BiSearch} />
            <span className={css.SearchForm_button_label}>Search</span>
          </button>

          <input
            className={css.SearchForm_input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.text}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}
