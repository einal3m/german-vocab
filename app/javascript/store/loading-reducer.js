import { createSlice } from 'redux-starter-kit';

const loadingSlice = createSlice({
  initialState: { words: false, translations: false, translation: false },
  reducers: {
    startLoading(state, action) { state[action.payload.resource] = true },
    finishedLoading(state, action) { state[action.payload.resource] = false },
  },
});

const { actions, reducer } = loadingSlice;
export const { startLoading, finishedLoading } = actions;
export default reducer;
