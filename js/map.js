import {setInactivePageMode} from './set-inactive-page-mode.js';
import {setActivePageMode} from './set-active-page-mode.js';
import {renderAd} from './render-similar-elements-layout.js';

setInactivePageMode();

const LATITUDE = 35.6895;
const LONGITUDE = 139.692;

const map = L.map('map-canvas').on('load', () => {
  setActivePageMode();
})
  .setView(
    {lat: LATITUDE,
      lng: LONGITUDE}, 10
  );

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52]
});

const marker = L.marker(
  {
    lat: LATITUDE,
    lng: LONGITUDE
  },
  {
    draggable: true,
    icon: mainPinIcon
  }
);
marker.addTo(map);

document.querySelector('#address').value = marker.getLatLng();

marker.on('moveend', (evt) => {
  document.querySelector('#address').value = evt.target.getLatLng();
});

const regularPinIcon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const renderMarkers = (similarAds) => {
  similarAds.forEach((ad) => {
    const regularMarker = L.marker(
      {
        lat: ad.location.lat,
        lng: ad.location.lng
      },
      {
        icon: regularPinIcon
      }
    );
    regularMarker.addTo(map).bindPopup(renderAd(ad));
  });
};

const setDefaultMarkerPosition = () => {
  map.setView({
    lat: LATITUDE,
    lng: LONGITUDE
  }, 10);
  marker.setLatLng({
    lat: LATITUDE,
    lng: LONGITUDE
  });
  document.querySelector('#address').value = marker.getLatLng();
};

const hideBaloon = () => {
  if (document.querySelector('.leaflet-popup')) {
    document.querySelector('.leaflet-popup').remove();
  }
};

export {renderMarkers, setDefaultMarkerPosition, hideBaloon};

