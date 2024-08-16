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

const applyFilters = (ads) => filterHousingPrice(filterHousingType(ads));

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
