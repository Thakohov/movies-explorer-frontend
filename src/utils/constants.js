export const RES_ERRORS = {
  SERVER_500: "На сервере произошла ошибка",

  SIGNUP_409: "Пользователь с таким email уже существует",
  SIGNUP_Error: "При регистрации пользователя произошла ошибка",

  SIGNIN_401: "Вы ввели неправильный логин или пароль",
  SIGNIN_INCORRET_TOKEN:
    "При авторизации произошла ошибка. Токен не передан или передан не в том формате.",
  SIGNIN_INVALID_TOKEN:
    "При авторизации произошла ошибка. Переданный токен некорректен.",
  SIGNIN_Error: "При входе произошла ошибка.",

  UPDATE_PROFILE: "Пользователь с таким email уже существует",
  UPDATE_Error_400: "При обновлении профиля произошла ошибка",
  UPDATE_SUCCESS: "Данные успешно изменены",
  SEARCH_ERROR:
    "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз",
  SERVER_TIMEOUT: "Подождите немного и попробуйте еще раз",
};

export const ERRORS = {
  NEED_LETTERS: "Нужно ввести ключевое слово",
};

export const shortMovieDuration = 40;

export const WIDTH_SIZE = { BIG: 1035, MEDIUM: 649 };
export const COUNT_CARD = { MAX: 12, MEDIUM: 8, SMALL: 5 };
export const ADD_CARD = { MAX: 3, MIN: 2 };
