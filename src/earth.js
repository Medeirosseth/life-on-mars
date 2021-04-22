export default class Earth {
  static getEarthPic() {
    return new Promise (function (resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://api.nasa.gov/EPIC/api/natural/images?api_key=kntsqihdhV6TZHNpcikx2qXfNILaKo8Wg4SJ6yeE`;
      request.onload = function () {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response);
        }
      };
      request.open("GET", url, true);
      request.send();
    });
  }
}