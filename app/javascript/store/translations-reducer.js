import { createSlice } from 'redux-starter-kit';

const translationsSlice = createSlice({
  initialState: [],
  reducers: {
    storeTranslations(state, action) { return action.payload },
  },
});

const { actions, reducer } = translationsSlice;
export const { storeTranslations } = actions;
export default reducer;
