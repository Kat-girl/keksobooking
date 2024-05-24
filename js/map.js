import {setInactivePageMode} from './set-inactive-page-mode.js';
import {setActivePageMode} from './set-active-page-mode.js';
import {getSimilarAds} from './render-similar-ads.js';
import {renderAd} from './render-similar-elements-layout.js';

setInactivePageMode();

const map = L.map('map-canvas').on('load', () => {
  setActivePageMode();
})
  .setView(
    {lat: 35.6895,
      lng: 139.692}, 10
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
    lat: 35.6895,
    lng: 139.692
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

const similarAds = getSimilarAds();

const regularPinIcon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

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
