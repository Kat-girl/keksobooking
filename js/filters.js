import {clearLayer} from './map.js';

// Фильтрация по типу жилья
const filterHousingType = (ads) => {
  const housingType = document.querySelector('#housing-type');
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
const features = document.querySelectorAll('input[name = "features"]');
const getCheckedFeatures = () => {
  const checkedFeatures = new Array();
  for (const feature of features) {
    if(feature.checked){
      checkedFeatures.push(feature.value);
    }
  }
  return checkedFeatures;
};

const getAdRank = (ad) => {
  let rank = 0;
  getCheckedFeatures().forEach((feature) => {
    if (ad.offer.features && ad.offer.features.includes(feature)) {
      rank ++;
    }
  });
  return rank;
};

const compareAds = (adA, adB) => {
  const rankA = getAdRank(adA);
  const rankB = getAdRank(adB);
  return rankB - rankA;
};

const applyFilters = (ads) => filterHousingGuests(filterHousingRooms(filterHousingPrice(filterHousingType(ads))))
  .slice()
  .sort(compareAds);

const onFilterChange = (cb) => {
  const mapFilters = document.querySelector('.map__filters');
  mapFilters.addEventListener('change', () => {
    clearLayer();
    cb();
  });
};

export {applyFilters, onFilterChange};
