import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import Mars from "./filename.js";


$("#form-check").on("click", () => {
  let promise = Mars.getMarsNews();
  promise.then(
    function (response) {
      const body = JSON.parse(response);
      const date = body.date;
      const POTD = body.url;
      const explanation = body.explanation;

      $("#showPic").append('<img src="' + POTD + '">');
      $("#pictureDescription").text(explanation);
      $("span#date").text(date);
    },
    function (error) {
      $(".showErrors").text(
        `There was an error processing your request: ${error}`
      );
    }
  );
});

