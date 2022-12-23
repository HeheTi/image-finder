import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import ImageGallery from './ImageGallery';
import Searchbar from './Searchbar';
import Button from './Button';
import Loader from './Loader';
import { PER_PAGE } from 'servises/constants';

import css from 'components/App.module.css';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  state = {
    searcQuery: '',
    page: 1,
    isLoading: false,
    totalPages: 1,
  };

  setTotalPages = totalHits => {
    const totalPages = Math.ceil(totalHits / PER_PAGE);
    this.setState({ totalPages });
  };

  onChangeSearcQuery = searcQuery =>
    this.setState({
      searcQuery,
      page: 1,
    });

  showLoader = () =>
    this.setState(prevState => ({
      isLoading: !prevState.isLoading,
    }));

  incrementPage = () =>
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));

  render() {
    const { page, searcQuery, isLoading, totalPages } = this.state;
    const isShowBtn = totalPages > 1 && totalPages >= page + 1;

    return (
      <div className={css.app}>
        <Searchbar isLoading={isLoading} onSubmit={this.onChangeSearcQuery} />
        <ImageGallery
          page={page}
          query={searcQuery}
          showLoader={this.showLoader}
          setTotalPages={this.setTotalPages}
        />
        {isShowBtn && (
          <Button isLoading={isLoading} onClick={this.incrementPage} />
        )}
        <ToastContainer theme="colored" autoClose={3000} />
        {isLoading && <Loader />}
      </div>
    );
  }
}

export default App;
