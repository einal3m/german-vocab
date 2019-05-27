import { configureStore } from 'redux-starter-kit';
import wordsReducer from './words-reducer';
import translationsReducer from './translations-reducer';
import editTranslationReducer from './edit-translation-reducer';
import loadingReducer from './loading-reducer';
import searchReducer from './search-reducer';

const store = configureStore({
  reducer: {
    words: wordsReducer,
    translations: translationsReducer,
    editTranslation: editTranslationReducer,
    loading: loadingReducer,
    search: searchReducer,
  }
});

export default store;
