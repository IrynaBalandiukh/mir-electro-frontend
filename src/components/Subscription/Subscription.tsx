import { Link } from '../Link/Link';

import './Subscription.scss';

export const Subscription = () => {
  return (
    <div className="subscription">
      <div className="subscription__content">
        <div className="subscription__left">
          <h3 className="subscription__title">Хотите быть в курсе всех самых послених новинок в мире бытовой технике?</h3>
          <p className="subscription__text">Уверяем Вас, никакого спама - только по делу</p>
        </div>

        <div className="subscription__right">
          <div className="subscription__email">
            <input 
              type="text" 
              className="subscription__email-input"
              placeholder="Введите Ваш email"
            />
          </div>

          <div className="subscription__link">
            <Link>Подписаться</Link>
          </div>
        </div>
      </div>
    </div>
  );
}