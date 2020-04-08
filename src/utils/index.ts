export const fetchApi = async (artistId: any): Promise<any> => {
  let data;
  await fetch(
    `https://genius.p.rapidapi.com/artists/${artistId}/songs?page=1&per_page=50`,
    {
      headers: {
        "x-rapidapi-host": "genius.p.rapidapi.com",
        "x-rapidapi-key": process.env.VUE_APP_API_KEY
      }
    }
  )
    .then(response => {
      data = response.json();
      // console.log(data);
    })
    .catch(function (error) {
      // console.log(error);
    });
  return data;
}