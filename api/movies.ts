
const fetchTopRatedMovies = async () => {
    const url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0M2NmMDlhYzBmNGI1NTAwMDlmZmVkOGJjMjgzNDA5NiIsInN1YiI6IjYzMGI4MDVlZGNiNmEzMDA4MzU5ZDE1MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.g1hsvLDDg3O8ND9WkisB_yCC5-Tk0M7_BlnzdvUdCIs'
      },
    }

    try{
  const response = await fetch(url, options);
  if(!response.ok){
    throw new Error("Failed to fetch movies")
  }
  const json = await response.json()
  //console.log(JSON.stringify(json, null, 2))
  return json.results;
}catch (err){
   console.error(err)
}
}
export default fetchTopRatedMovies;