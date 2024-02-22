// למחוק
// להוסיף
// ללכת אליהם

var Places_DB = 'placesData'



var gPlaces
_createPlaces()

function getPlaces() {
    return gPlaces

}

// function removePlace(placeId) {
//     const placeId = gPlaces.findIndex(place => place.id === placeId)
//     gPlaces.splice(placeId, 1)

// }



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


