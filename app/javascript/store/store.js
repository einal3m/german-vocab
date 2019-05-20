import { configureStore } from 'redux-starter-kit';
import wordsReducer from './words-reducer';
import translationsReducer from './translations-reducer';
import loadingReducer from './loading-reducer';

const store = configureStore({
  reducer: {
    words: wordsReducer,
    translations: translationsReducer,
    loading: loadingReducer,
  }
});

export default store;
