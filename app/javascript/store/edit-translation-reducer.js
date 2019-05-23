import { createSlice } from 'redux-starter-kit';

const editTranslationSlice = createSlice({
  initialState: { wordId: undefined, translation: {} },
  reducers: {
    storeWordId(state, action) { state.wordId = action.payload },
    storeTranslation(state, action) { state.translation = action.payload },
    storeDefaultTranslation(state, action) { 
      state.translation = defaultTranslation(action.payload.userId, action.payload.wordId) 
    },
  },
});

const defaultTranslation = (userId, wordId) => {
  return {
    word_id: wordId,
    user_id: userId,
    translation: '',
    example: '',
    known: false,
  };
};

const { actions, reducer } = editTranslationSlice;
export const { storeTranslation, storeWordId, storeDefaultTranslation } = actions;
export default reducer;
