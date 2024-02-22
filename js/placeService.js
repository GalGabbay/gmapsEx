// למחוק
// להוסיף
// ללכת אליהם

var Places_DB = 'placesData'

_createPlaces()


var gPlaces = loadFromStorage(Places_DB) || gPlaces



function getPlaces() {
    return gPlaces

}

function removePlace(placeId) {
    const idx = gPlaces.findIndex((place) => place.id === placeId)
    gPlaces.splice(idx, 1)
    _savePlaces()

}



function _createPlaces() {
    gPlaces = [
        _createPlace(32.1416, 34.831213, 'tel-aviv'),
        _createPlace(33, 33, 'new-york'),

    ]

}


function _createPlace(lat, lng, name) {

    return {
        id: makeId(),
        lat,
        lng,
        name,
    }
}


function _savePlaces() {

    saveToStorage(Places_DB, gPlaces)
}