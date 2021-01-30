import { configureStore } from '@reduxjs/toolkit'
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { rootReducer } from '../reducers'

const store = configureStore({
  reducer: rootReducer,
});

const App: NextPage<AppProps> = ({ Component }) => {
  return (
    <Provider store={store}>
      <Component />
    </Provider>
  );
};

export default App;
