export default class Giphy {
  static alien() {
    return fetch(`https://api.giphy.com/v1/gifs/search?q=alien&limit=1&api_key=${process.env.API_KEY1}`)
      .then(function(response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .catch(function(error) {
        return error;
      });
  }
}