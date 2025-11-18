import React from 'react';
import { Oval } from 'react-loader-spinner';
import { createPortal } from 'react-dom';
import css from './Loader.module.css';

const loaderRootRef = document.querySelector('#loader-root');

const Loader = () => {
  return createPortal(
    <Oval
      height={130}
      width={130}
      color="#bab6fa"
      secondaryColor="#180ebd"
      ariaLabel="oval-loading"
      strokeWidth={4}
      strokeWidthSecondary={6}
      wrapperClass={css.loader}
      visible={true}
    />,
    loaderRootRef
  );
};

export default Loader;
