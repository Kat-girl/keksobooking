import {clearLayer} from './map.js';

// Фильтрация по типу жилья
// Фильтрация по типу жилья
const housingType = document.querySelector('#housing-type');
console.log(housingType.value);

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

const onHousingTypeChange = (cb) => {
  housingType.addEventListener('change', () => {
    clearLayer();
    cb();
  });
};

export {filterHousingType, onHousingTypeChange};
