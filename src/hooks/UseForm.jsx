import { useEffect, useState } from 'react';
import validator from 'validator';

const useValidation = (value, validations) => {
  const [isEmpty, setIsEmpty] = useState(true);
  const [minLengthError, setMinLengthError] = useState(false);
  const [maxLengthError, setMaxLengthError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [inputValid, setInputValid] = useState(false);
  const error =
    (isEmpty ? 'Не может быть пустым. ' : '') +
    (minLengthError ? `Не меньше ${validations.minLength} символов. ` : '') +
    (maxLengthError ? `Не больше ${validations.maxLength} символов. ` : '') +
    (emailError ? 'Неверный формат электронной почты: email@email.ru. ' : '') +
    (nameError
      ? `Может содержать только латиницу, кириллицу, пробел или дефис `
      : '');

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case 'minLength':
          value.length < validations[validation]
            ? setMinLengthError(true)
            : setMinLengthError(false);
          break;

        case 'maxLength':
          value.length > validations[validation]
            ? setMaxLengthError(true)
            : setMaxLengthError(false);
          break;

        case 'isEmpty':
          value ? setIsEmpty(false) : setIsEmpty(true);
          break;

        case 'isEmail':
          validator.isEmail(value) ? setEmailError(false) : setEmailError(true);
          break;

        case 'isName':
          !new RegExp(/^[-\sa-zA-Z\sа-яА-ЯёË]+$/).test(value)
            ? setNameError(true)
            : setNameError(false);
          break;

        default:
          break;
      }
    }
  }, [value]);

  useEffect(() => {
    if (
      isEmpty ||
      emailError ||
      minLengthError ||
      maxLengthError ||
      nameError
    ) {
      setInputValid(false);
    } else {
      setInputValid(true);
    }
  }, [isEmpty, emailError, minLengthError, maxLengthError, nameError]);

  return { isEmpty, minLengthError, emailError, inputValid, nameError, error };
};

const useInput = (initialValue, validations) => {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setIsDirty] = useState(false);
  const valid = useValidation(value, validations);

  const onChange = (evt) => {
    setValue(evt.target.value);
    setIsDirty(true);
  };

  const onFocus = () => {};

  return { value, onChange, onFocus, isDirty, ...valid, setValue };
};

export default useInput;