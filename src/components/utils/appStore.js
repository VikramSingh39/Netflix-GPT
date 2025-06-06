import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer  from "./userSlice";
import moviesReducer from './movieSlice';
import configReducer from "./configSlice";
import tmdbReducer from "./tmdbSlice"

const appStore = configureStore(
    {
        reducer: {
           user: userSliceReducer,
           movies: moviesReducer,
           config: configReducer,
           tmdb: tmdbReducer
        },
    },
);

export default appStore;