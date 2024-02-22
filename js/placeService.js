// למחוק
// להוסיף
// ללכת אליהם

var Places_DB = 'placesData'

_createPlaces()


var gPlaces = loadFromStorage(Places_DB) || gPlaces



function getPlaces() {
    return gPlaces

}

function addPlace(name, lat, lng, zoom) {
    const place = _createPlace(lat, lng, name, zoom)
    gPlaces.push(place)

    _savePlaces()
    return place 
}

function removePlace(placeId) {
    const idx = gPlaces.findIndex((place) => place.id === placeId)
    gPlaces.splice(idx, 1)
    _savePlaces()

}

function getPlace(placeId){
    const place = gPlaces.find(place => place.id === placeId)
    console.log(place)
    return place

}



function _createPlaces() {
    gPlaces = [
        _createPlace(32.085300, 34.781769, 'Tel-Aviv', zoom = 10),
        _createPlace(40.741895, -73.989308, 'New-York', zoom = 10),

    ]

}


function _createPlace(lat, lng, name, zoom) {

    return {
        id: makeId(),
        lat,
        lng,
        name,
        zoom,
    }
}


function _savePlaces() {

    saveToStorage(Places_DB, gPlaces)
}