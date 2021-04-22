export default class Picture {
  static getMarsNews() {
    return fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}`)
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

/// PRE 1st refactor /////

// export default class Picture {
//   static getMarsNews() {
//     return new Promise (function (resolve, reject) {
//       let request = new XMLHttpRequest();
//       const url = `https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}`;
//       request.onload = function () {
//         if (this.status === 200) {
//           resolve(request.response);
//         } else {
//           reject(request.response);
//         }
//       };
//       request.open("GET", url, true);
//       request.send();
//     });
//   }
// }




