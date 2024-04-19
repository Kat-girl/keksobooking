import {getRandomArrayElement, getUniqueNumber, getRandomFloatInclusive} from './util.js';

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
      lat: getRandomFloatInclusive(35, 36, 10),
      lng: getRandomFloatInclusive(139, 140, 10)
    }
  },
});

const getSimilarAds = () => Array.from({length: 12}, renderAd);
console.log(getSimilarAds());
