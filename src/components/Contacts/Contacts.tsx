import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { postUser } from '../../api/users';
import { FormInputData } from '../../types/FormInputData';
import { validationSchema } from '../../utils/validationSchema';

import './Contacts.scss';

type Props = {
  setIsModalActive: (data: boolean) => void;
  setResponse: (data: string | null) => void;
  setError: (data: string | null) => void;
}

export const Contacts:React.FC<Props> = ({ setIsModalActive, setResponse, setError }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormInputData>({ resolver: yupResolver(validationSchema) });

  // Функція-обробник відправки форми, надсилає дані користувача на сервер
  const onSubmit: SubmitHandler<FormInputData> = (data) => {
    setResponse(null);
    setError(null);

    postUser(data)
    .then(response => {
      // У разі успішного запиту встановлюємо дані у state для відображення, активуємо модальне вікно
      setResponse(response.message);
      setIsModalActive(true);
      reset();
    })
    .catch(error => {
      // У разі невдалого запиту встановлюємо помилку у state для відображення, активуємо модальне вікно
      setError(error.message || 'An error occurred');
      setIsModalActive(true);
    });
  }

  return (
    <div className="contacts">
      <div className="contacts__content">
        <div className="contacts__form-wrapper">
          <h4 className="contacts__form-title">Запит пропозицій</h4>

          <form className="contacts__form" onSubmit={handleSubmit(onSubmit)}>
            <div className="contacts__input-wrapper">
              <input className="contacts__input" type="text" placeholder="Имя" {...register('name')} />

              {errors.name && <p className="contacts__error">{errors.name.message}</p>}
            </div>

            <div className="contacts__input-wrapper">
              <input className="contacts__input" type="email" placeholder="Почта" {...register('email')} />

              {errors.email && <p className="contacts__error">{errors.email.message}</p>}
            </div>

            <div className="contacts__input-wrapper">
              <input className="contacts__input" type="phone" placeholder="Телефон" {...register('phone')} />
              {errors.phone && <p className="contacts__error">{errors.phone.message}</p>}
            </div>

            <button type="submit" className="contacts__button">
              Заказать звонок
            </button>
          </form>
        </div>

        <div className="contacts__info">
          <h4 className="contacts__info-title">Мы всегда Вам рады</h4>

          <div className="contacts__info-container">
            <div className="contacts__info-left">
              <p className="contacts__info-item">Сязаться с нами:</p>
              <a className="contacts__link contacts__link--phone" href="tel:+38 (097) 466 31 90">
                +38 (097) 466 31 90
              </a>

              <p className="contacts__info-item">Написать:</p>
              <a className="contacts__link contacts__link--email" href="mailto:info@mir.electro.com">
                info@mir.electro.com
              </a>

              <p className="contacts__info-item">Всегда быть в курсе:</p>
              <div className="contacts__social-media">
                <a href="/#" className="contacts__social-link">Facebook</a>
                
                <a href="/#" className="contacts__social-link">Instagram</a>
              </div>

              <p className="contacts__info-item">Иди заходите в гости:</p>
              <a className="contacts__link contacts__link--address" href="/#">
              г. Днепр, ул. Глинки 2, <br/> ТРЦ “Мост-Сити”
              </a>
            </div>

            <div className="contacts__info-right">
              <iframe 
                className="contacts__map"
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2645.472554325629!2d35.0508551!3d48.466648799999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe2c2c60241bd%3A0x999c964048051b3e!2z0KLQoNCaIMKr0JzQntCh0KIt0YHRltGC0ZbCuw!5e0!3m2!1suk!2sua!4v1694259529334!5m2!1suk!2sua" 
                width="600" height="450"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}