import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import Picture from "./picture.js";
import Rover from "./rover.js";


$("button#but").on("click", (event) => {
  event.preventDefault();
  let promise = Picture.getMarsNews();
  promise.then(
    function (response) {
      const body = JSON.parse(response);
      const date = body.date;
      const POTD = body.url;
      const explanation = body.explanation;

      $("#showPic").append('<img src="' + POTD + '">').show();
      $("#pictureDescription").text(explanation);
      $("span#date").text(date);
    },
    function (error) {
      $(".showErrors").text(`There was an error processing your request: ${error}`);
    }
  );

  let promiseRover = Rover.getRover();
  promiseRover.then(function(response){
    const bodyRover = JSON.parse(response);
    const rover = bodyRover.photos[0].img_src;

    $("#showRover").append('<img src="' + rover + '">');
  },
  function(error){
    $('.showErrors').text(`There was an error processing your request: ${error}`);
  });  
});

