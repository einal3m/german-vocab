import { createSlice } from 'redux-starter-kit';

const wordsSlice = createSlice({
  initialState: [],
  reducers: {
    storeWords(state, action) { return action.payload },
  },
});

const { actions, reducer } = wordsSlice;
export const { storeWords } = actions;
export default reducer;
