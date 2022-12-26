const API_BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '32218008-200a90c8ecc2b09890a10d2f7';

export const getByText = async (text, page) => {
  try {
    const result = await fetch(
      `${API_BASE_URL}?key=${API_KEY}&q=${text}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=12`
    ).then(response => response.json().then(data => data));
    return result;
  } catch (error) {
    console.log(error);
  }
};

// fetch(url).then(response =>
//   response
//     .json()
//     .then(data => ({
//       data: data,
//       status: response.status,
//     }))
//     .then(res => {
//       console.log(res.status, res.data.title);
//     })
// );
