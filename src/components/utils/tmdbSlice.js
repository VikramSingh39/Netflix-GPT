import { createSlice } from "@reduxjs/toolkit";

const tmdbSlice = createSlice({
  name: "tmdb",
  initialState: {
    showTmdbSearch: null,
    tmdbMovieSearchResult: null
  },
  reducers: {
    toggleTmdbSearchView: (state) => {
      state.showTmdbSearch = !state.showTmdbSearch;
    },
    addTmdbMovieResult: (state, action) => {
    state.tmdbMovieSearchResult = action.payload;
   },
  },
});

export const { toggleTmdbSearchView, addTmdbMovieResult } = tmdbSlice.actions;

export default tmdbSlice.reducer;