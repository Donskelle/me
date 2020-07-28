const cleanObjectReference = (obj) => {
  Object.keys(obj).forEach((key) => {
    if (obj[key] == null || obj[key] === '') {
      // eslint-disable-next-line
      delete obj[key];
    } else if (typeof obj === 'object') {
      cleanObjectReference(obj[key]);
    }
  });
};

export { cleanObjectReference };
