// rutes per evitar errors de CORS
// opció 1 (heroku):
const APIURL = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com';
// opció 2 (thingproxy):
// const APIURL = 'https://thingproxy.freeboard.io/fetch/https://api.deezer.com';

var apiMethods = {
    getPlaylists() {
        return fetch(APIURL + '/chart/0/playlists', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(
            result => result.json()
        ).catch(error => error)
    },
    getPlaylist(playlistId) {
        return fetch(APIURL + '/playlist/'+playlistId, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(
            result => result.json()
        ).catch(error => error)
    },
    getTracks(el) {
        return fetch(APIURL + '/search/track?q='+el, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(
            result => result.json()
        ).catch(error => error)
    },
    getAlbums(el) {
        return fetch(APIURL + '/search/album?q='+el, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(
            result => result.json()
        ).catch(error => error)
    },
    getArtists(el) {
        return fetch(APIURL + '/search/artist?q='+el, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(
            result => result.json()
        ).catch(error => error)
    },
};

export default apiMethods;