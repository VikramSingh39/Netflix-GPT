

export const API_options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NjM3NTEyZmYwZThmZTRlYTgyZDU2NDNmYmJkM2EyYSIsIm5iZiI6MTc0OTAzNDExNC41MTgwMDAxLCJzdWIiOiI2ODQwMjQ4MjRiN2Y1MDU2ZDJmY2I0MTUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.NhS2XwYM3Xi8_UCTjcfp5yswPqE0qtRKgdMlDrKAX-I'
  }
};

// fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_options)
//   .then(res => res.json())
//   .then(res => console.log(res))
//   .catch(err => console.error(err)); 