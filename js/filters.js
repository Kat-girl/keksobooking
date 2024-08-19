import {clearLayer} from './map.js';

// Фильтрация по типу жилья
const housingType = document.querySelector('#housing-type');

const filterHousingType = (ads) => {
  if (housingType.value !== 'any') {
    return ads.filter((ad) => ad.offer.type === housingType.value);
  } else {
    return ads;
  }
};

// Фильтрация по цене
const housingPrice = document.querySelector('#housing-price');

const filterHousingPrice = (ads) => {
  if (housingPrice.value !== 'any') {
    if (housingPrice.value === 'low') {
      return ads.filter((ad) => ad.offer.price <= 10000);
    } else if (housingPrice.value === 'middle') {
      return ads.filter((ad) => ad.offer.price > 10000 && ad.offer.price < 50000);
    } else {
      return ads.filter((ad) => ad.offer.price >= 50000);
    }
  } else {
    return ads;
  }
};

// Фильтрация по количеству комнат
const housingRooms = document.querySelector('#housing-rooms');

const filterHousingRooms = (ads) => {
  if (housingRooms.value !== 'any') {
    return ads.filter((ad) => ad.offer.rooms === +housingRooms.value);
  } else {
    return ads;
  }
};

// Фильтрация по количеству гостей
const housingGuests = document.querySelector('#housing-guests');

const filterHousingGuests = (ads) => {
  if (housingGuests.value !== 'any') {
    return ads.filter((ad) => ad.offer.guests === +housingGuests.value);
  } else {
    return ads;
  }
};

// Фильтрация по фичам
const getFeatureRank = (ad) => {
  const filterWiFi = document.querySelector('#filter-wifi');
  const filterDishwasher = document.querySelector('#filter-dishwasher');
  const filterParking = document.querySelector('#filter-parking');
  const filterWasher = document.querySelector('#filter-washer');
  const filterElevator = document.querySelector('#filter-elevator');
  const filterConditioner = document.querySelector('#filter-conditioner');

  let rank = 0;
  if (ad.offer.features.includes(filterWiFi.value)) {
    rank += 1;
  }
  if (ad.offer.features.includes(filterDishwasher.value)) {
    rank += 1;
  }
  if (ad.offer.features.includes(filterParking.value)) {
    rank += 1;
  }
  if (ad.offer.features.includes(filterWasher.value)) {
    rank += 1;
  }
  if (ad.offer.features.includes(filterElevator.value)) {
    rank += 1;
  }
  if (ad.offer.features.includes(filterConditioner.value)) {
    rank += 1;
  }
  return rank;
};

const compareAds = (adA, adB) => {
  const rankA = getFeatureRank(adA);
  const rankB = getFeatureRank(adB);
  return rankB - rankA;
};

const applyFilters = (ads) => filterHousingGuests(filterHousingRooms(filterHousingPrice(filterHousingType(ads))));

const onFilterChange = (cb) => {
  const mapFilters = document.querySelectorAll('.map__filter');
  for (const filter of mapFilters) {
    filter.addEventListener('change', () => {
      clearLayer();
      cb();
    });
  }
};


export {onFilterChange, applyFilters};
