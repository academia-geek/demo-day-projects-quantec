import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './routes/App';
import 'bootstrap/dist/css/bootstrap.min.css';
// import LabelBottomNavigation from './components/LabelBottomNavigation';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

