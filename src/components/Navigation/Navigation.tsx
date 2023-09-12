import './Navigation.scss';

//@ts-ignore
import logo from '../../images/logo.png';

export const Navigation = () => {
  return (
    <div className="navigation">
      <div className="navigation__logo">
      <img 
          src={logo} 
          alt="MIR electro logo" 
          className="navigation__logo-img" 
        />
      </div>

      <div className="navigation__search">
        <input 
          type="text" 
          className="navigation__search-input"
          placeholder='Ваш запрос'
        />
      </div>

      <nav className="navigation__nav-list">
        <a className="navigation__nav-link" href="/#">О компании</a>

        <a className="navigation__nav-link" href="/#">Каталог</a>

        <a className="navigation__nav-link" href="/#">Новинки</a>

        <a className="navigation__nav-link" href="/#">Акции</a>

        <a className="navigation__nav-link" href="/#">Контакты</a>
      </nav>

      <div className="navigation__actions">
        <a className="navigation__phone" href="tel:+38 (097) 466 31 90">
          +38 (097) 466 31 90
        </a>

        <a className="navigation__icon-wrapper" href="/#">
          <div className="navigation__icon navigation__icon--bag"></div>
        </a>

        <a className="navigation__icon-wrapper" href="/#">
          <div className="navigation__icon navigation__icon--user"></div>
        </a>
      </div>
    </div>
  );
}