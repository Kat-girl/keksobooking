import {clearLayer} from './map.js';

const housingType = document.querySelector('#housing-type');
console.log(housingType.value);

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

export {filterHousingType, onHousingTypeChange};
