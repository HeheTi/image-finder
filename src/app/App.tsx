import { Outlet } from 'react-router';
import ToastProvider from './providers/ToastProvider';

import './styles/reset.css';
import './styles/index.css';
import './styles/App.css';

function App() {
  return (
    <div className="app-root">
      <Outlet />
      <ToastProvider />
    </div>
  );
}

export default App;
