const adForm =  document.querySelector('.ad-form');

const setUserFormSubmit = (onSuccess) => {
  adForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    fetch(
      'https://25.javascript.htmlacademy.pro/keksobooking',
      {
        method: 'POST',
        body: formData,
      },
    ).then(() => onSuccess)
      .catch((err) => console.error(err));
  });
};

export {setUserFormSubmit};
