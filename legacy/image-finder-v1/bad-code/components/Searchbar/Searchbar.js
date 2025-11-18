import PropTypes from 'prop-types';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { scrollToTop } from 'servises/scroling';
import css from './Searchbar.module.css';

const Searchbar = ({ onSubmit, isLoading }) => {
  const [query, setQuery] = useState('');

  const changeQuery = e => setQuery(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();

    const trimQuery = query.trim();

    if (!trimQuery) {
      toast.warn('Please, write serch query');
      return;
    }

    onSubmit(trimQuery);
    setQuery('');
    scrollToTop();
  };

  return (
    <header className={css.searchbar}>
      <form className={css.searchForm} onSubmit={handleSubmit}>
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
          onChange={changeQuery}
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
