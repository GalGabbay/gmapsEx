'use strict'

var gMap
var gMarkers = []
function onInit() {
    renderPlaces()
    gMap = initMap()
}

function renderPlaces() {

    const places = getPlaces()
    const strHTMLs = places.map(place => `
        <li>${place.name}
            <button onclick="onRemovePlace('${place.id}')">X</button>
            <button onclick="onGoToPlace('${place.id}')">Travel</button>
        </li>
    `)
    const elPlacesList = document.querySelector('.places-list')
    elPlacesList.innerHTML = strHTMLs.join('')
    console.log(places)
}

function getPosition() {

    if (!navigator.geolocation) {
        alert('HTML5 Geolocation is not supported in your browser')
        return
    }
    navigator.geolocation.getCurrentPosition(showLocation, handleLocationError)
}

function showLocation(position) {
    const { latitude: lat, longitude: lng } = position.coords

    gMap.setCenter({ lat, lng })
    gMap.setZoom(15)
}

function renderMarkers() {
    const places = getPlaces()
    // remove previous markers
    gMarkers.forEach(marker => marker.setMap(null))
    // every place is creating a marker
    gMarkers = places.map(place => {
    return new google.maps.Marker({
    position: place,
    map: gMap,
    title: place.name
    })
    })
    }

function onRemovePlace(placeId) {
    console.log(placeId)
    removePlace(placeId)
    renderPlaces()
    renderMarkers()
}



function onGoToPlace(placeId) {
    const place = getPlace(placeId)
    const lat = place.lat
    const lng = place.lng

    gMap.setCenter({ lat, lng })
    gMap.setZoom(place.zoom)
    renderMarkers()
}

function initMap(lat = 29.557669, lng = 34.951923) {
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

    map.addListener('click', ev => {
        console.log('dd')
        const name = prompt('Place name?', 'Place 1')
        if(!name) return
        const lat = ev.latLng.lat()
        const lng = ev.latLng.lng()
        addPlace(name, lat, lng, gMap.getZoom())
        renderPlaces()
        renderMarkers()
    })
    return map
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
