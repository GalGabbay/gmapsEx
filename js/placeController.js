'use strict'



function onInit() {
    renderPlaces() 

}


function renderPlaces() {

    const places = getPlaces()
    const strHTMLs = places.map(place => `
        <li>${place.name}
            <button onclick="onRemovePlace('${place.id}')">X</button>
            <button onclick="onGoToPlace('${place.id}')">Go</button>
        </li>
    `)
    const elPlacesList = document.querySelector('.places-list')
    elPlacesList.innerHTML = strHTMLs.join('')
    console.log(places)

    initMap(29.557669,34.951923)
    // initMap(place.lat,place.lng)
}



function onRemovePlace (placeId){
    console.log(placeId)
    removePlace(placeId)
    renderPlaces()
    
}



function onGoToPlace(){

    gMap.setCenter({ lat, lng })

}


function initMap(lat, lng) {

    const elMap = document.querySelector('.map')
    const mapOptions = {
        center: { lat, lng },
        zoom: 10
    }
    const map = new google.maps.Map(elMap, mapOptions)

    const markerOptions = {
        position: { lat, lng },
        map,
        title: 'Hello World!'
    }
    const marker = new google.maps.Marker(markerOptions)
}

function handleLocationError(error) {
    var locationError = document.getElementById("locationError")

    switch (error.code) {
        case 0:
            locationError.innerHTML = "There was an error while retrieving your location: " + error.message
            break
        case 1:
            locationError.innerHTML = "The user didn't allow this page to retrieve a location."
            break
        case 2:
            locationError.innerHTML = "The browser was unable to determine your location: " + error.message
            break
        case 3:
            locationError.innerHTML = "The browser timed out before retrieving the location."
            break
    }
}
