// Write your JavaScript code here!

window.addEventListener("load", function () {

	let listedPlanets;
	//Set listedPlanetsResponse equal to the value returned by calling myFetch()
	let listedPlanetsResponse = myFetch();
	listedPlanetsResponse.then(function (result) {
		listedPlanets = result;
		console.log(listedPlanets);
	}).then(function () {
		console.log(listedPlanets);
		let selectedPlanet = pickPlanet(listedPlanets);
		//Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
		addDestinationInfo(document, selectedPlanet.name, selectedPlanet.diameter, selectedPlanet.star, selectedPlanet.distance,
			selectedPlanet.moons, selectedPlanet.image);
	})

	init();

});

function init() {
	// Create Form Objects
	const formSubmit = document.getElementById('formSubmit');
	const list = document.getElementById('faultyItems');

	const pilotName = document.querySelector("input[name=pilotName]");
	const copilotName = document.querySelector("input[name=copilotName]");
	const fuelLevel = document.querySelector("input[name=fuelLevel]");
	const cargoMass = document.querySelector("input[name=cargoMass]");

	formSubmit.addEventListener("click", (event) => {
		formSubmission(document, list, pilotName.value, copilotName.value, fuelLevel.value, cargoMass.value)
		event.preventDefault();
	})
}
