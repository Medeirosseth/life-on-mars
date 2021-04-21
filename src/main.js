import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import Mars from "./filename.js";

$.ready(() => {
  $("#form-check").on("click", (event) => {
    event.preventDefault();

    let promise = Mars.getMarsNews();
    promise.then(
      function (response) {
        const body = JSON.parse(response);
        const date = body.date;
        const POTD = body.hdurl
        const explanation = body.explanation;

        $("#pictureOfTheDay").append(`<img id="" src"${POTD}"`);
        $("#pictureDescription").text(explanation)
        $("#")
      },
      function (error) {
        $(".showErrors").text(
          `There was an error processing your request: ${error}`
        );
      }
    );
  });
});
