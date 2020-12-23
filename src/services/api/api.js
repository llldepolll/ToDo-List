export const apiPath = 'https://api.covid19api.com';

const apiConfig = {
  get: {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  },
};

export default class Api {
  static getAllCountries = () => {
    return fetch(`${apiPath}/summary`, apiConfig.get).then(response => response.json()).then((data) => {
      const { Countries } = data;
      return Countries;
    })
  };
}
