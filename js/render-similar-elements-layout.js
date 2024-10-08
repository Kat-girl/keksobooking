const accomodationTypes = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель'
};

const renderAd = (data) => {
  const templateCard = document.querySelector('#card').content.querySelector('.popup').cloneNode(true);
  templateCard.querySelector('.popup__avatar').src = data.author.avatar;
  templateCard.querySelector('.popup__title').textContent = data.offer.title;
  templateCard.querySelector('.popup__text--address').textContent = `${data.offer.address}`;
  templateCard.querySelector('.popup__text--price').textContent = `${data.offer.price} ₽/ночь`;
  templateCard.querySelector('.popup__type').textContent = accomodationTypes[data.offer.type];
  templateCard.querySelector('.popup__text--capacity').textContent = `${data.offer.rooms} комнаты для ${data.offer.guests} гостей`;
  templateCard.querySelector('.popup__text--time').textContent = `Заезд после ${data.offer.checkin}, выезд до ${data.offer.checkout}`;

  templateCard.querySelector('.popup__features').textContent = '';
  if (data.offer.features) {
    data.offer.features.forEach((feature) => templateCard.querySelector('.popup__features').insertAdjacentHTML('beforeEnd', `<li class="popup__feature popup__feature--${feature}"></li>`));
  }

  templateCard.querySelector('.popup__description').textContent = '';
  templateCard.querySelector('.popup__description').textContent = data.offer.description;

  templateCard.querySelector('.popup__photos').textContent = '';
  if (data.offer.photos) {
    data.offer.photos.forEach((photo) => templateCard.querySelector('.popup__photos').insertAdjacentHTML('beforeEnd', `<img src="${photo}" class="popup__photo" width="45" height="40" alt="Фотография жилья">`));
  }

  return templateCard;
};

export {renderAd};
