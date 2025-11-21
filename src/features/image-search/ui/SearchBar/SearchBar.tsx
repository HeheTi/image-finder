import { useState, type ChangeEvent, type FormEvent } from 'react';
import { toast } from 'react-toastify';

import { scrollToTop } from '@/shared/lib/scrollToTop';
import s from './SearchBar.module.scss';

export interface ISearchBarProps {
  isLoading: boolean;
  onSearch: (query: string) => void;
}

const SearchBar = ({ isLoading, onSearch }: ISearchBarProps) => {
  const [query, setQuery] = useState('');

  const changeQuery = (e: ChangeEvent<HTMLInputElement>) => setQuery(e.target.value);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const trimQuery = query.trim();

    if (!trimQuery) {
      toast.warn('Please, write search query');
      return;
    }

    onSearch(trimQuery);
    setQuery('');
    scrollToTop();
  };

  return (
    <header className={s.searchbar}>
      <form className={s.searchForm} onSubmit={handleSubmit}>
        <button type="submit" className={s.btn} disabled={isLoading}>
          <span className={s.btnLabel}>Search</span>
        </button>

        <input
          className={s.input}
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

export default SearchBar;
