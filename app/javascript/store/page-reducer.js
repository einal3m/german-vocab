import { createSlice } from 'redux-starter-kit';

const pageSlice = createSlice({
  initialState: { pageNo: 1 },
  reducers: {
    setPage(state, action) { state.pageNo = action.payload },
    nextPage(state, action) { state.pageNo += 1 },
    previousPage(state, action) { state.pageNo += -1 },
  },
});

const { actions, reducer } = pageSlice;
export const { setPage, nextPage, previousPage } = actions;
export default reducer;
