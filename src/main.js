import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import Picture from "./picture.js";
import Rover from "./rover.js";

function clearAll(){
  $("#showPic").val("");
  $("#pictureDescription").val("");
  $("span#date").val('');
}

function getElements(response){
  if (response){
    $("#showPic").append('<img src="' + response.url + '">').show();
    $("#pictureDescription").text(response.explanation);
    $("#date").text(response.date);
  } else {
    $('.showErrors').text(`There was an error: ${response.message}`);
  }
}

function getRoverElements(response){
  if (response){
    $("#showRover").append('<img src="' + response.photos[0].img_src + '">').show();
  } else {
    $('.showErrors').text(`There was an error: ${response.message}`);
  }
}

$(document).ready(function(){
  $("button#but").click(function(event){
    event.preventDefault();
    clearAll();
    $("#date").text(response.date).show();
    Picture.getMarsNews()
      .then(function(response){
        getElements(response);
      });
    Rover.getRover()
      .then(function(response){
        getRoverElements(response);
      });
  });
});



// $("button#but").on("click", (event) => {
//   event.preventDefault();
//   let promise = Picture.getMarsNews();
//   promise.then(function (response) {
//     const body = JSON.parse(response);
//     const date = body.date;
//     const POTD = body.url;
//     const explanation = body.explanation;

//     showAll(date, POTD, explanation);
//   },
//     function (error) {
//       $(".showErrors").text(`There was an error processing your request: ${error}`);
//     });

//   let promiseRover = Rover.getRover();
//   promiseRover.then(function(response){
//     const bodyRover = JSON.parse(response);
//     const rover = bodyRover.photos[0].img_src;

//     $("#showRover").append('<img src="' + rover + '">');
//   },
//   function(error){
//     $('.showErrors').text(`There was an error processing your request: ${error}`);
//   });  
// });

