import { Navigation } from '../Navigation/Navigation';

import './Header.scss';

export const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <Navigation />
      </div>
    </header>
  );
}
