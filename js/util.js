const uploadPicture = (input, preview) => {
  input.addEventListener('change', () => {
    const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
    const file = input.files[0];
    const fileName = file.name.toLowerCase();

    const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

    if (matches) {
      if (preview.tagName === 'IMG') {
        preview.src = URL.createObjectURL(file);
      } else {
        preview.style.backgroundImage = `url(${URL.createObjectURL(file)})`;
        preview.style.backgroundSize = '100%';
        preview.style.backgroundPosition = 'center center';
        preview.style.backgroundRepeat = 'no-repeat';
      }
    }
  });
};

export {uploadPicture};
