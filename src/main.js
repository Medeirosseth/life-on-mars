import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import Picture from "./picture.js";
import Rover from "./rover.js";


$("#form-check").on("click", () => {
  let promise = Picture.getMarsNews();
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
  $("input:checkbox[name=pic]:checked#showPic").show();

  let promiseRover = Rover.getRover();
  promiseRover.then(function(response){
    const bodyRover = JSON.parse(response);
      
  },function(error){
    $('.showErrors').text(`There was an error processing your request: ${error}`);
  });

  const rover = body.photos[1];
});

