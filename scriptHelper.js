// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
    let div = document.getElementById("missionTarget");
    div.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name} </li>
                    <li>Diameter: ${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance} </li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}" atl="Planet Picture"> `;
   
}

function validateInput(testInput) {
   let numberInput = Number(testInput);
   if (testInput === ""){
    return "Empty";
   } else if (isNaN(numberInput)){
    return "Not a Number";
   } else if (isNaN(numberInput) === false){
    return "Is a Number";
   }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass) {
    console.log("lol");

    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");

    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoMass) === "Empty" ) {
        alert("All fields are required!");
    } else if  (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" || validateInput(fuelLevel) === "Not a Number" || validateInput(cargoMass) === "Not a Number" ){
        alert("Enter valid information for each field!")
    } else {
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
        let launchStatus = document.getElementById("launchStatus");
        if (fuelLevel < 10000 && cargoMass > 10000) {
            list.style.visibility = "visible";
            fuelStatus.innerHTML = "Fuel level too low for launch";
            cargoStatus.innerHTML = "Cargo mass too high for launch";
            launchStatus.innerHTML = "Shuttle not ready for launch";
            launchStatus.style.color = "9f4143";
        } else if (fuelLevel < 10000 && cargoMass < 10000){
            list.style.visibility = "visible";
            fuelStatus.innerHTML = "Fuel level too low for launch";
            cargoStatus.innerHTML = "Cargo mass low enough for launch";
            launchStatus.innerHTML = "Shuttle not ready for launch";
            launchStatus.style.color = "9f4143";
        } else if (fuelLevel > 10000 && cargoMass > 10000){
            list.style.visibility = "visible";
            fuelStatus.innerHTML = "Fuel level high enough for launch";
            cargoStatus.innerHTML = "Cargo mass too high for launch";
            launchStatus.innerHTML = "Shuttle not ready for launch";
            launchStatus.style.color = "9f4143";
        } else {
            list.style.visibility = "visible";
            fuelStatus.innerHTML = "Fuel level high enough for launch";
            cargoStatus.innerHTML = "Cargo mass low enough for launch";
            launchStatus.innerHTML = "Shuttle is ready for launch";
            launchStatus.style.color = "#419f6a";
        };
    };
};



async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
            return response.json()
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    let planetNumber = Math.floor(Math.random()*planets.length);
    return planets[planetNumber];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
