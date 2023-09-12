import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  name: yup
    .string()
    .required('Поле "Имя" обязательное'),
    // .min(3, 'Имя должно состоять из 3 или больше символов'),
  email: yup
    .string()
    .required('Поле "Почта" обязательное')
    .email('Введите правильный адрес электронной почты'),
  phone: yup
    .string()
    .required('Поле "Телефон" обязательное')
});