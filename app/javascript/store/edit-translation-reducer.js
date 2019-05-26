import { createSlice } from 'redux-starter-kit';

const editTranslationSlice = createSlice({
  initialState: { wordId: undefined, translation: {}, original: {}, saving: false },
  reducers: {
    storeWordId(state, action) { state.wordId = action.payload },
    storeTranslation(state, action) { 
      state.translation = action.payload;
      state.original = action.payload;
    },
    toggleKnown(state, action) { state.translation.known = !state.translation.known },
    changeField(state, action) { state.translation[action.payload.field] = action.payload.value },
    startSaving(state, action) { state.saving = true },
    finishedSaving(state, action) { state.saving = false },
  },
});

const { actions, reducer } = editTranslationSlice;
export const { storeTranslation, storeWordId, toggleKnown, changeField, startSaving, finishedSaving } = actions;
export default reducer;
