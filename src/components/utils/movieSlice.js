import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
      nowPlayingMovies: null,
      popularMovie: null,
      topRatedMovie: null,
      trailerVideo: null,

    },
    reducers:{
       addNowPlayingMovies: (state, action)=>{
        state.nowPlayingMovies = action.payload;
       },
        addPopularMovie: (state, action)=>{
        state.popularMovie = action.payload;
       },
        addTopRatedMovie: (state, action)=>{
        state.topRatedMovie = action.payload;
       },
       addTrailerVideo:(state, action)=>{
        state.trailerVideo = action.payload;
       },
       addUpcomingMovie: (state, action)=>{
        state.upcomingMovie = action.payload;
       },
    }
})

export const {addNowPlayingMovies, addPopularMovie, addTopRatedMovie, addTrailerVideo, addUpcomingMovie}= moviesSlice.actions;
export default moviesSlice.reducer;   