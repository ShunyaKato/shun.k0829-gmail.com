export const fetchApi = async (artistId: any): Promise<any> => {
  let data;
  await fetch(
    `https://genius.p.rapidapi.com/artists/${artistId}/songs?page=1&per_page=50`,
    {
      headers: {
        "x-rapidapi-host": "genius.p.rapidapi.com",
        "x-rapidapi-key": "fb9b03ccd3msh08a2d37de980038p147519jsn839de88844ae"
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