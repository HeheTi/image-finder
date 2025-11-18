import { useState, useCallback } from 'react';
import { ToastContainer } from 'react-toastify';
import ImageGallery from './ImageGallery';
import Searchbar from './Searchbar';
import Button from './Button';
import Loader from './Loader';
import { PER_PAGE } from 'servises/constants';

import css from 'components/App.module.css';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [searcQuery, setSearcQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [totalHits, setTotalHits] = useState(1);

  const onChangeSearcQuery = searcQuery => {
    setSearcQuery(searcQuery);
    setPage(1);
  };

  const showLoader = useCallback(() => {
    setIsLoading(state => !state);
  }, []);

  const incrementPage = () => setPage(state => state + 1);

  const totalPages = Math.ceil(totalHits / PER_PAGE);
  const isShowBtn = totalPages > 1 && totalPages >= page + 1;

  return (
    <div className={css.app}>
      <Searchbar isLoading={isLoading} onSubmit={onChangeSearcQuery} />
      <ImageGallery
        page={page}
        query={searcQuery}
        showLoader={showLoader}
        setTotalH={setTotalHits}
      />
      {isShowBtn && <Button isLoading={isLoading} onClick={incrementPage} />}
      <ToastContainer theme="colored" autoClose={3000} />
      {isLoading && <Loader />}
    </div>
  );
};

export default App;
