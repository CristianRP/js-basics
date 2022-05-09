const myPromise = () => {
  return new Promise( (resolve, reject) => {
    setTimeout(() => {
      // resolve('Value')
      reject('rejected')
    }, 1000);
  })
}

const measureTimeAsync = async() => {

  try {
    console.log('Start');

    const response = await myPromise()
    console.log(response);

    console.log('End');

    return 'end measure time'
    // throw 'Error in async'
  } catch(error) {
    return 'catch on measure tyme'
  }
}

measureTimeAsync()
  .then(console.log)
  .catch(console.log);
