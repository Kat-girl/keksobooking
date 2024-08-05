const getData = (onSuccess, onFail) => {
  fetch(
    'https://25.javascript.htmlacademy.pro/keksobooking/data',
  )
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        onFail('Не удалось загрузить данные с сервера');
      }
    })
    .then((ads) => {
      onSuccess(ads);
    })
    .catch(() => onFail('Не удалось загрузить данные с сервера'));
};

const sendData = (onSuccess, onFail, body) => {
  fetch(
    'https://25.javascript.htmlacademy.pro/keksobooking',
    {
      method: 'POST',
      body
    }
  ).then((response) => {
    if (response.ok) {
      onSuccess();
    } else {
      onFail();
    }
  })
    .catch(() => onFail());
};

export {getData, sendData};
