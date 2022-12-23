import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { toast } from 'react-toastify';
import css from './Searchbar.module.css';
import { scrollToTop } from 'servises/scroling';

export class Searchbar extends Component {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    query: '',
  };

  changeQuery = e => this.setState({ query: e.target.value });

  handleSubmit = e => {
    e.preventDefault();

    if (!this.state.query.trim()) {
      toast.warn('Please, write serch query');
      return;
    }

    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
    scrollToTop();
  };

  render() {
    const { isLoading } = this.props;
    const { query } = this.state;

    return (
      <header className={css.searchbar}>
        <form className={css.searchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.btn} disabled={isLoading}>
            <span className={css.btnLabel}>Search</span>
          </button>

          <input
            className={css.input}
            type="text"
            autoComplete="off"
            autoFocus
            value={query}
            placeholder="Search images and photos"
            onChange={this.changeQuery}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
