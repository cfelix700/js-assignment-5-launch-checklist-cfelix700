// Write your JavaScript code here!

// const { pickPlanet, addDestinationInfo } = require("./scriptHelper");

//  const myFetch = require("./scriptHelper");


window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let randomPlanet = pickPlanet(listedPlanets);
       console.log(randomPlanet.image);
       addDestinationInfo(document, randomPlanet.name, randomPlanet.diameter, randomPlanet.star, randomPlanet.distance, randomPlanet.moons, randomPlanet.image);
   })

let list = this.document.getElementById("faultyItems");
    list.style.visibility = "hidden";
    let form = document.querySelector("form");  
    

   form.addEventListener("submit", function(event){
    event.preventDefault();
    let pilotInput = document.querySelector("input[name = pilotName]");
    let pilot = pilotInput.value;

    let copilotInput = document.querySelector("input[name = copilotName]");
    let copilot = copilotInput.value;

    let fuelInput = document.querySelector("input[name = fuelLevel]");
    let fuelLevel = fuelInput.value;

    cargoInput = document.querySelector("input[name = cargoMass");
    let cargoMass = cargoInput.value;

    formSubmission(document,list, pilot, copilot, fuelLevel, cargoMass);
   });
   
});