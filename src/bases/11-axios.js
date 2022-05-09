import axios from "axios";

const apiKey = 'mZGJwiJYGuUUdHZWJgFj0Cplhay1Egno'
const url = 'https://api.giphy.com/v1/gifs'

const giphyApi = axios.create({
  baseURL: url,
  params: {
    api_key: apiKey
  }
});

export default giphyApi

// giphyApi.get('/random')
//   .then(response => {
//     const { data } = response.data
//     const { url } = data.images.original

//     const img = document.createElement('img')
//     img.src = url

//     document.body.append(img)

//     console.log(url);
//   });
