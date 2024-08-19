import {clearLayer} from './map.js';

// Фильтрация по типу жилья
const housingType = document.querySelector('#housing-type');

const filterHousingType = (ads) => {
  if (housingType.value !== 'any') {
    const filteredArr = ads.filter((ad) => ad.offer.type === housingType.value);
    return filteredArr;
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

// Фильтрация по цене
const housingPrice = document.querySelector('#housing-price');

const pricesRange = {
  middle: '> 10000 && < 50000',
  low: '<= 10000',
  high: '>= 50000'
};

const filterHousingPrice = (ads) => {
  if (housingPrice.value !== 'any') {
    const filteredArr = ads.filter((ad) => ad.offer.price < 40000);
    return filteredArr;
  } else {
    return ads;
  }
};

const applyFilters = (ads) => {
  const copiedAds = ads.slice();
  const filteredHouse = filterHousingType(copiedAds);
  console.log(filteredHouse());
  const filteredPrice = filterHousingPrice(filteredHouse());
  console.log(filteredPrice());
  return filteredPrice();
};

export {filterHousingType, onHousingTypeChange, filterHousingPrice, applyFilters};
