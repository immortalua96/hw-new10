const MY_KEY =
  'live_RewMHWqsKPM7un9j0u0UWgDN64BJIT9mT6w8PeYAc2ce07njo9Jbutxu06LIAaDH';
const BREDS_URL = 'https://api.thecatapi.com/v1/breeds';
export const fetchBreeds = name => {
  return fetch(`${BREDS_URL}?api_key=${MY_KEY}`)
    .then(response => {
      if (!response.ok) {
        if (response.status === 404) {
          return [];
        }
        throw new Error(response.status);
      }
      return response.json();
    })
    .catch(error => {
      console.error(error);
    });
};
