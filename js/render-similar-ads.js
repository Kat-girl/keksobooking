import {getRandomArrayElement, getUniqueNumber, getRandomFloatInclusive, getRandomIntInclusive, getNewRandomArray} from './util.js';

const OFFER_TITLES = [
  'Уютная квартира ждет вас: сдаётся прямо сейчас!',
  'Идеальное жилье для вас: аренда от собственника',
  'Комфортная и стильная квартира в аренду',
  'Доступное и качественное жилье: аренда по привлекательной цене',
  'Большая и светлая квартира: идеальный выбор для вашей семьи',
  'Сдаем уютное гнездышко: квартира вашей мечты',
  'Тихий район и развитая инфраструктура: идеальное жилье для аренды',
  'Современный ремонт и удобное расположение: лучший выбор для аренды',
  'Экономичное и комфортное жилье: аренда на любой вкус и бюджет',
  'Идеальная квартира для жизни: аренда без посредников и комиссий'
];

const ACCOMOD_TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel'
];

const CHECK_IN_OUT_TIMES = [
  '12:00',
  '13:00',
  '14:00'
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner'
];

const ACCOMOD_DESCRIPTIONS = [
  'Уютная однушка в центре города',
  'Просторная двушка с видом на парк',
  'Трёхкомнатная квартира в элитном районе',
  'Современный лофт с панорамными окнами',
  'Классическая трёхкомнатная квартира',
  'Квартира-студия с балконом и видом на море',
  'Элитная четырёхкомнатная квартира с дизайнерским ремонтом',
  'Двухэтажный дом с гаражом и участком',
  'Роскошная пентхаус с террасой и бассейном',
  'Экодом с садом и зоной барбекю'
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

const getUniqueAvatarID = getUniqueNumber(1, 50);

const getUniqueAvatarImg = () => {
  let id = getUniqueAvatarID();
  if (id < 10) {
    id = `0${id}`;
  }
  return id;
};


const renderAd = () => ({
  author: {
    avatar: `img/avatars/user${getUniqueAvatarImg()}.png`
  },
  offer: {
    title: OFFER_TITLES[getRandomArrayElement(OFFER_TITLES)],
    address: {
      lat: getRandomFloatInclusive(35.65000, 35.70000, 5),
      lng: getRandomFloatInclusive(139.70000, 139.80000, 5)
    },
    price: getRandomIntInclusive(5000, 20000),
    type: ACCOMOD_TYPES[getRandomArrayElement(ACCOMOD_TYPES)],
    rooms: getRandomIntInclusive(1, 5),
    guests: getRandomIntInclusive(1, 5) * 2,
    checkin: CHECK_IN_OUT_TIMES[getRandomArrayElement(CHECK_IN_OUT_TIMES)],
    checkout: CHECK_IN_OUT_TIMES[getRandomArrayElement(CHECK_IN_OUT_TIMES)],
    features: getNewRandomArray(FEATURES),
    description: ACCOMOD_DESCRIPTIONS[getRandomArrayElement(ACCOMOD_DESCRIPTIONS)],
    photos: getNewRandomArray(PHOTOS),
  },
  location: {
    lat: getRandomFloatInclusive(35.65000, 35.70000, 5),
    lng: getRandomFloatInclusive(139.70000, 139.80000, 5)
  }
});

const getSimilarAds = () => Array.from({length: 11}, renderAd);

export {getSimilarAds};
