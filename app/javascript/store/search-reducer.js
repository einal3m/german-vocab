import { createSlice } from 'redux-starter-kit';

const searchSlice = createSlice({
  initialState: { editSearchText: '', searchText: '', filter: 'translated' },
  reducers: {
    changeSearchText(state, action) { state.editSearchText = action.payload },
    startTextSearch(state, action) { 
      state.filter = 'text';
      state.searchText = state.editSearchText;
    },
    clearTextSearch(state, action) {
      state.filter = 'translated';
      state.searchText = '';
      state.editSearchText = '';
    }
  },
});

const { actions, reducer } = searchSlice;
export const { changeSearchText, startTextSearch, clearTextSearch } = actions;
export default reducer;
