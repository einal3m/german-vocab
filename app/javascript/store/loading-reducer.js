import { createSlice } from 'redux-starter-kit';

const loadingSlice = createSlice({
  initialState: { words: false, translations: false, translation: false },
  reducers: {
    startLoading(state, action) { state[action.payload] = true },
    finishedLoading(state, action) { state[action.payload] = false },
  },
});

const { actions, reducer } = loadingSlice;
export const { startLoading, finishedLoading } = actions;
export default reducer;
