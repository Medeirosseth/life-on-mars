export default class Giphy {
  static alien() {
    return fetch(`api.giphy.com/v1/gifs/search?q=alien&limit=1&api_key=c3QqxbirVNhEMJwW6U2weuBRgi6XTy7n`)
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