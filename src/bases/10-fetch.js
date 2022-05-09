const apiKey = 'mZGJwiJYGuUUdHZWJgFj0Cplhay1Egno'
const url = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`

// fetch(url)
//   .then(response => {
//     response.json().then(console.log)
//   })
//   .catch(console.log);

fetch(url)
  .then(response => response.json())
  .then(({ data }) => {
    const { url } = data.images.original

    // console.log(url);
    const img = document.createElement('img');
    img.src = url

    document.body.append(img);
  })
  .catch(console.log);