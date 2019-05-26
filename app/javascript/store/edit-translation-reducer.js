import { createSlice } from 'redux-starter-kit';

const editTranslationSlice = createSlice({
  initialState: { wordId: undefined, translation: {} },
  reducers: {
    storeWordId(state, action) { state.wordId = action.payload },
    storeTranslation(state, action) { state.translation = action.payload },
    toggleKnown(state, action) { state.translation.known = !state.translation.known },
    changeField(state, action) { state.translation[action.payload.field] = action.payload.value },
  },
});

const { actions, reducer } = editTranslationSlice;
export const { storeTranslation, storeWordId, toggleKnown, changeField } = actions;
export default reducer;
