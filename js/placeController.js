'use strict'

var gMap

function onInit() {
    renderPlaces()
    gMap = initMap()
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

   
}



function onRemovePlace(placeId) {
    console.log(placeId)
    removePlace(placeId)
    renderPlaces()

}


  
function onGoToPlace(placeId) {
    const place = getPlace(placeId)
    const lat = place.lat
    const lng = place.lng
   
    gMap.setCenter({ lat, lng })
}




    // function initMap() {
    //     const myLatlng = { lat: -25.363, lng: 131.044 };
    //     const map = new google.maps.Map(document.getElementById("map"), {
    //       zoom: 4,
    //       center: myLatlng,
    //     });
    //     const marker = new google.maps.Marker({
    //       position: myLatlng,
    //       map,
    //       title: "Click to zoom",
    //     });
      
    //     map.addListener("center_changed", () => {
    //       // 3 seconds after the center of the map has changed, pan back to the
    //       // marker.
    //       window.setTimeout(() => {
    //         map.panTo(marker.getPosition());
    //       }, 3000);
    //     });
    //     marker.addListener("click", () => {
    //       map.setZoom(8);
    //       map.setCenter(marker.getPosition());
    //     });
    //   }
      
    //   window.initMap = initMap;


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
        const lat = ev.latLng.lat()
        const lng = ev.latLng.lng()
        addPlace(name, lat, lng, gMap.getZoom())
        renderPlaces()
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
