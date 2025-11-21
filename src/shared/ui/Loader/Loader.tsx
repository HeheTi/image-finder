import { createPortal } from 'react-dom';
import { Oval } from 'react-loader-spinner';

import s from './Loader.module.scss';

const loaderRootRef =
  typeof document !== 'undefined' ? document.querySelector('#loader-root') : null;

const Loader = () => {
  if (!loaderRootRef) return null;

  return createPortal(
    <div>
      <Oval
        height={130}
        width={130}
        color="#bab6fa"
        secondaryColor="#180ebd"
        ariaLabel="oval-loading"
        strokeWidth={4}
        strokeWidthSecondary={6}
        wrapperClass={s.loader}
        visible={true}
      />
    </div>,
    loaderRootRef
  );
};

export default Loader;
