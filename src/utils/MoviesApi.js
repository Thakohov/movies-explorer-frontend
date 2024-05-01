export const BASE_URL = "https://api.nomoreparties.co";

const getJson = (res) => {
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
};

export const getMovieList = () => {
  return fetch(`${BASE_URL}/beatfilm-movies`, {
    headers: {
      "Content-Type": "application/json",
    },
  }).then(getJson);
};
