import axios from 'axios';

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID WqtAJwDFa-G6J54dxazu9fnBbpgJLKYC84OIU5dDnEg',
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;