const cleanObject = obj => {
  Object.keys(obj).forEach(key => {
    if (obj[key] == null || obj[key] === '') {
      // eslint-disable-next-line
      delete obj[key]
    } else if (typeof obj === 'object') {
      cleanObject(obj[key])
    }
  })
}

export { cleanObject }
